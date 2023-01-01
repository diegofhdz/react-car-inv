import React from 'react';
import './dash.css';
import { Navbar } from '../Navbar';
import { CarRow } from '../CarRow/CarRow';
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
      <DataTable/>
    </>
  )
}
