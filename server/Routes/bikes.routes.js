const router = require("express").Router();
const bikeController = require("../controllers/bikes.controller");
const multer = require("multer");
const upload = multer();

router.get("/", bikeController.readBike);
router.post("/", upload.single("file"), bikeController.createBike);
router.put("/:id", bikeController.updateBike);
router.delete("/:id", bikeController.deleteBike);

module.exports = router;