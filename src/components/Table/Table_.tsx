import React from 'react';
import { Table, TableBody, TableRow, TableCell, TableContainer, TableHead } from '@mui/material';

const cars = [{id: 0, carName: "Toyota Supra Mk3", carDesc: "1992 Toyota Supra"}, {id:1, carName: "Honda Civic Ej1", carDesc: "1993 Honda Civic"}]

export const Table_ = () => {
  return (
    <>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Car Name</TableCell>
            <TableCell>Car Description</TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
        {cars.map(car =>
          <TableRow key={car.id}>
            <TableCell>{car.id}</TableCell>
            <TableCell>{car.carName}</TableCell>
            <TableCell>{car.carDesc}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
    </TableContainer>
    </>
  )
}
