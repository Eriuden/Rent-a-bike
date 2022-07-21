import { useEffect } from "react"
import React from 'react'
import { getbike } from "../redux/actions/bike.action"
import { useDispatch } from "react-redux/es/exports"
import { Link } from "react-router-dom"


export default function BikeCard() {

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getbike(bike._id))
  })

  return (
    <div>
      <h2><Link to={"/bike:id"}>{bike.name}</Link></h2>
      <img src={bike.picture} alt="" />
      <p>{bike.description}</p>
      <p>{bike.rentPrice}</p>
      <p>{bike.kilometers}</p>   
    </div>
  )
}
