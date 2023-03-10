import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@mui/material';
import { CarForm } from '../CarForm';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide:true },
    { field: 'make', headerName: 'Make', flex: 1 },
    { field: 'model', headerName: 'Model', flex: 1 },
    { field: 'year_', headerName: 'Year', flex: 1 }
];

interface gridData {
    data: {
        id?: string
    }
}

export const DataTable = () => {
    let { carData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data: {}});
    const [selectionModel, setSelectionModel] = useState<any>([]);

    let handleOpen = () => {
        setOpen(true);
    }

    let handleClose = () => {
        setOpen(false);
    }

    let deleteData = () => {
        server_calls.delete(selectionModel);
        getData();
        setTimeout(() => {window.location.reload()}, 1000);
    }

  return (
    <div style={{height: '400px', width: '100%'}}>
        <h2 style={{ textAlign: 'center' }}>Your Cars</h2>

    <DataGrid rows={ carData } columns={ columns } pageSize={5} checkboxSelection = {true} 
    onSelectionModelChange= { (item) =>{
        setSelectionModel(item);
    }}/>

<Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        {/* Dialog pop-up */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Car {selectionModel}</DialogTitle>
            <DialogContent>
                <DialogContentText>Update Car</DialogContentText>
                    <CarForm id={selectionModel!}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="primary">Close</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}
