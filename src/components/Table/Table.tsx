import React from 'react'
import { Tile } from '../Tile/Tile'

const cars = [{id: 0, carName: "Toyota Supra Mk3", carDesc: "1992 Toyota Supra"}, {id:1, carName: "Honda Civic Ej1", carDesc: "1993 Honda Civic"}]

export const Table = () => {
  return (
    <>
    <Tile items={cars}/>
    </>
  )
}
