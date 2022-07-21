const BikesModel = require("../models/Bikes.model");

const ObjectID = require("mongoose").Types.ObjectId;
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

module.exports.readBike = (req, res) => {
  BikesModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data:" + err);
  }).sort({ createdAt: -1 });
};

module.exports.createBike = async (req, res) => {
  let fileName;

  if (req.file != null) {
    try {
      if (
        req.file.detectedMimeType != "image/jpg" &&
        req.file.detectedMimeType != "image/png" &&
        req.file.detectedMimeType != "image/jpeg"
      )
        throw Error("invalid file");

      if (req.file.size > 500000) throw Error("taille maximale dépassée");
    } catch (err) {
      const errors = uploadErrors(err);
      return res.status(201).json({ errors });
    }
    fileName = req.body._id + Date.now() + ".jpg";

    await pipeline(
      req.file.stream,
      fs.createWriteStream(
        `${__dirname}/../client/public/uploads/bikes/${fileName}`
      )
    );
  }

  //on doit créer un objet, donc forcément, on reprend le model et on entre les clés et valeurs
  const newBike = new BikesModel({
    picture: req.file != null ? "./uploads/bike/" + fileName : "",
    modelName: req.body.modelName,
    description: req.body.description,
    kilometers:req.body.kilometers,
    rentPrice: req.body.rentPrice,
    
  });

  //si ca marche, on sauvegarde le nouveau post et on renvoie un status 201 en json

  try {
    const bikeProfile = await newBike.save();
    return res.status(201).json(bikeProfile);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.updateBike = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const updatedRecord = {
    message: req.body.message,
  };

  //On lui précide de poser, par updatedRecord, la valeur du message ainsi modifiée
  BikesModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("update errors:" + err);
    }
  );
};

module.exports.deleteBike = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  //on a direct une fonction pour ça, juste donc à préciser que si il n'y a pas d'erreur, la fonction opère normalement
  //donc on envoie le résultat prenant en réponse le paramètres "de réussite" docs

  BikesModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs).json({ message: "Modèle plus en circulation" });
    else console.log("delete error:" + err);
  });
};