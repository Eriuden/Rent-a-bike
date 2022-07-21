import React from 'react'
import { useEffect } from 'react'
import { getbike } from '../redux/actions/bike.action'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'

export default function Bike(bike) {

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getbike(bike._id))
  })

  return (
    <div>
      
      <h2>{bike.name}</h2>
      <img src={bike.picture} alt="photo de la moto" />
      <p>{bike.description}</p>
      <p>{bike.rentPrice}</p>
      <p>{bike.kilometers}</p>   
    
    </div>
  )
}
