import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { UidContext } from './AppContext'

export default function Navbar() {

  const uid = useContext(UidContext)
  const userData = useSelector((state)=> state.userReducer)
  return (
    <div className='flex flex-row justify-around'>
      <Link to={"/"}>Acceuil</Link>
      {uid ? (
        <Link to={"/profil"}>
        <h2>Bonjour, {userData.name} </h2>
        </Link>
      ): (
        <Link to={"/connexion"}>Connexion</Link>
      )}
      
      <Link to={"/inscription"}>Inscription</Link>
    </div>
  )
}
