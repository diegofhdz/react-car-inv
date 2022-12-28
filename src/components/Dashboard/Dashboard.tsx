import React from 'react';
import './dash.css';
import { Navbar } from '../Navbar';
import { Table } from '../Table/Table';

export const Dashboard = () => {
  return (
    <>
    <Navbar />
    <div className='main'>
      <h1 className="mainHeader">Your Dashboard</h1>
      </div>
    <Table />
    </>
    
  )
}
