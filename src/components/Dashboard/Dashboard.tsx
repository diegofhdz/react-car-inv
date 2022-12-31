import React from 'react';
import './dash.css';
import { Navbar } from '../Navbar';
import { CarRow } from '../CarRow/CarRow';
import { Typography } from '@mui/material';
import { Table, TableBody, TableRow, TableCell, TableContainer, TableHead } from '@mui/material';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';

export const Dashboard = () => {
  return (
    <>
    <Navbar />
    <div className='main'>
      <Typography variant="h3" className='mainHeader'>Welcome to your Dashboard</Typography>
      </div>
      <TableContainer sx={{width: 3/4, mx: 'auto', border: '1px solid darkgrey' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Date Added</TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
        <CarRow id={0} make="Toyota" model="Supra MK3" year={1992} dateAdded="2021-09-01"/>
        <CarRow id={1} make="Honda" model="Civic EJ1" year={1993} dateAdded="2021-09-02"/>
      </TableBody>
      </Table>
      </TableContainer>
    </>
  )
}
