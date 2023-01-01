import React from 'react';
import './dash.css';
import { Navbar } from '../Navbar';
import { AddCarButton } from '../AddCarButton/AddCarButton';
import { Typography } from '@mui/material';
import { Table, TableBody, TableRow, TableCell, TableContainer, TableHead } from '@mui/material';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { CarForm } from '../CarForm/CarForm';
import { DataTable } from '../DataTable';

export const Dashboard = () => {
  return (
    <>
    <Navbar />
    <div><DataTable/></div>
    <div style={{marginTop: "90px"}}>
      <AddCarButton/>
    </div>
    
    </>
  )
}
