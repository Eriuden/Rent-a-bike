import { useEffect, useState } from "react"
import React from 'react'
import { getbike } from "../redux/actions/bike.action"
import { useDispatch } from "react-redux/es/exports"
import { Link } from "react-router-dom"
import DeleteButton from "./DeleteButton"
import UpdateBikeForm from "./UpdateBikeForm"
import { getUser } from "../redux/actions/user.action"


export default function BikeCard({bike}) {

  const [updateForm,setUpdateForm] = useState(false)

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getbike(bike._id))
    dispatch(getUser(user._id))
  })

  return (
    <div>
      <h2><Link to={"/bike:id"}>{bike.name}</Link></h2>
      <img src={bike.picture} alt="" />
      <p>{bike.description}</p>
      <p>{bike.rentPrice}</p>
      <p>{bike.kilometers}</p>   

      { user.role == "admin" && (
        <>
          <DeleteButton bikeId={bike._id} />
          <button onClick={setUpdateForm(true)}>Editer</button>
          {updateForm ??
            <UpdateBikeForm bike={bike} />}
        
        </>
      )
      }
      

      
    </div>
  )
}
