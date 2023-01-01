import React, {useState} from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { CarForm } from '../CarForm';
import { useGetData } from '../../custom-hooks';

export const AddCarButton = () => {
  let [open1, setOpen1] = useState(false);

  let handleOpen = () => {
      setOpen1(true);
  }

  let handleClose = () => {
      setOpen1(false);
  }
  return (
    <>
        <Button onClick={handleOpen}>Add Car</Button>

            <Dialog open={open1} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add New Car</DialogTitle>
            <DialogContent>
                <DialogContentText>Add Car</DialogContentText>
                    <CarForm/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="contained" color="primary">Close</Button>
            </DialogActions>
        </Dialog>
    </>

  )
}
