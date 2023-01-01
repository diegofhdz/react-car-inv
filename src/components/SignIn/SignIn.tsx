import React, { SyntheticEvent, useState } from 'react'
import firebase from 'firebase/app';
import { useAuth,  AuthCheck } from 'reactfire';
import 'firebase/auth';
import { Input } from '../SharedComponents/Input';
import { Container, Button, Typography, Snackbar, SnackbarCloseReason  } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { redirect, useNavigate } from "react-router-dom";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Navbar } from '../Navbar';

const Alert = (props:AlertProps) => {
    return <MuiAlert variant='filled' {...props} />;
}


const useStyles = makeStyles({
    googleButton:{
        backgroundColor: 'rgb(66,133,244)',
        marginTop: '2em',
        padding: '0',
        color: 'white',
        height: '50px',
        width: '240px',
        border: 'none',
        textAlign: 'center',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
        fontSize: '16px',
        lineHeight: '48px',
        display: 'block',
        borderRadius: '1px',
        fontFamily: 'Roboto, arial, sans-serif',
        cursor: 'pointer'
    },
    googleLogo:{
        width: '48px',
        height: '48px',
        display: 'block'
    },
    typographyStyle: {
        fontFamily: 'Roboto, arial, sans-serif;',
        textAlign: 'center',
        fontSize: '2em'
    },
    containerStyle: {
        marginTop: '2em'
    },
    snackBar: {
        color: 'white',
        backgroundColor: '#4caf50'
    }
});


export const SignIn = () => {

    const auth = useAuth();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleSnackOpen = () => {
        setOpen(true)
    };

    const handleSnackClose = (event?: React.SyntheticEvent, reason?:string) => {
        if(reason === 'clickaway'){
            return;
        }

        setOpen(false);
        navigate('../', { replace: true });
    }

    const handleSnackClose2 = (event: Event | React.SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => {
        event.preventDefault();
        if(reason === 'clickaway'){
            return;
        }
        setOpen(false);
        navigate('/', { replace: true });
      };
      

    const sign_in = async () => {
        const response = await auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
        if(response.user){
            handleSnackOpen();
        }
    };

    const sign_out = async () => {
        await auth.signOut();
    }

    return (
        <div>
            <Navbar />
            <Container maxWidth = 'sm' className={classes.containerStyle}>
                <Typography className={classes.typographyStyle}>Sign In Below</Typography>
                <form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Input name="email" placeholder="Place Email Here" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Input name="password" placeholder="Place Password Here" />
                    </div>
                    <Button type="submit" variant='contained' color='primary'>Submit</Button>
                </form>

                <AuthCheck fallback={
                    <Button className={classes.googleButton} onClick={sign_in}>Sign In With Google</Button>
                }>
                    <Button variant='contained' color='secondary' onClick={sign_out}>Sign Out</Button>
                </AuthCheck>
                <Snackbar message={'Success'} open={open} autoHideDuration={1000} onClose={handleSnackClose2} >
                    <MuiAlert onClose={handleSnackClose} severity="success">
                        <div>Successful Sign In - Redirect in 6 seconds</div>
                    </MuiAlert>
                </Snackbar>
            </Container>
        </div>
    )
};