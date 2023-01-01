import React from 'react';
import { Table, TableBody, TableRow, TableCell, TableContainer, TableHead } from '@mui/material';

// const cars = [{id: 0, carName: "Toyota Supra Mk3", carDesc: "1992 Toyota Supra"}, {id:1, carName: "Honda Civic Ej1", carDesc: "1993 Honda Civic"}]
 interface Props {
  id: number,
  make: string,
  model: string;
  year: number;
  dateAdded?: string;
 }

 

export const CarRow = (props: Props) => {
  return (
    <>
          <TableRow key={props.id}>
            <TableCell>{props.id}</TableCell>
            <TableCell>{props.make}</TableCell>
            <TableCell>{props.model}</TableCell>
            <TableCell>{props.year}</TableCell>
            <TableCell>{props.dateAdded}</TableCell>
          </TableRow>
    </>
  )
}
