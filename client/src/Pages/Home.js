import React, { useEffect } from 'react'
import BikeCard from '../Components/BikeCard'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/exports'
import {getbikes} from "../redux/actions/bike.action"
import { isEmpty } from '../Utils'

export default function Home() {

  //En fait, on prend l'action directement chez elle
  //Le reducer servira notamment à contenir les données selon leur état actuel
  //C'est pourquoi on fait un reducer bike et un bikes
  //Le bikes il prends l'état de la liste des mob
  //Le bike, l'état pour chacune
  //On veut seulement toutes les get
  //Mais on veut en update créer ou détruire qu'une à la fois
  
  const bikes = useSelector((state)=> state.bikesReducer)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getbikes())
  })

  return (
    <div>
      <ul>
        {!isEmpty(bikes) && bikes.map((bike) => {
          <BikeCard 
          bike={bike} 
          key={bike._id} 
          />
        })}
      </ul>
    </div>
  )
}
