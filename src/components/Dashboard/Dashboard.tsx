import React from 'react';
import './dash.css';
import { Navbar } from '../Navbar';
import { Table_ } from '../Table/Table_';
import { Typography } from '@mui/material';

export const Dashboard = () => {
  return (
    <>
    <Navbar />
    <div className='main'>
      <Typography variant="h3" className='mainHeader'>Welcome to your Dashboard</Typography>
      </div>
    <Table_ />
    </>
    
  )
}
