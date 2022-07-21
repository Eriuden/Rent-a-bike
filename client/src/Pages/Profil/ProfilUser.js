import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/actions/user.action'
import UploadImg from './UploadImg'


export default function ProfilUser() {
  const [bio, setBio] = useState('')
  const [name, setName] = useState('')
  const [updateForm, setUpdateForm] = useState(false)

    const userData = useSelector((state) => state.userReducer)
    const error = useSelector((state) => state.errorReducer.userError)
    const dispatch = useDispatch


    const handleUpdate = () => {
      dispatch(updateUser(userData._id, bio, name))
      setUpdateForm(false)
    }

    

  return (
    <div className="profil-container">

        <h1> Profil de {userData.pseudo}</h1>

        <div className="update-container">

            <div className="left-part">
                <h3>Photo de profil</h3>
                <img src={userData.picture} alt="user-pic" />
                <UploadImg />
                <p>{error.maxSize}</p>
                <p>{error.format}</p>
                
            </div>

            <div className="right-part">

              <div className="bio-update">

                <h3>Bio</h3>
                {/* Qu'on clique sur la bio direct ou le bouton, on inverse la valeur de setUpdateForm*/
                  updateForm === false && (
                  <>
                    <h2 onClick={() => setUpdateForm(!updateForm)}>{userData.name}</h2>
                    <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
                    <button onClick={() =>setUpdateForm(!updateForm)}>Modifier vos informations</button>
                  </>
                )}
                {/*Si updateForm est true, alors on affiche la zone de texte avecle bouton de modif de la bio*/
                  updateForm &&(
                  <>
                    <input type="text" defaultValue={userData.name}onChange={(e)=>setName(e.target.value)} />
                    <textarea type="text" defaultValue={userData.bio}onChange={(e) => setBio(e.target.value)}>
                    </textarea>
                    
                    <button onClick={handleUpdate}>Valider la modification</button>
                  </>
                )}

              </div>
            </div>
        </div>
    </div>
  )
}