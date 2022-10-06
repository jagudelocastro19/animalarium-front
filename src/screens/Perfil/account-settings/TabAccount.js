// ** React Imports
//import { useState } from 'react'

// ** MUI Imports
import { useContext, useState, forwardRef } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { RegisterAPI } from '../../../services/LoginAPI';
import { AppContext } from '../../../contexts/LoginContext';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const TabAccount = () => {
  const [userInfo] = useContext(AppContext);
  const handleDeleteUser = () => {
    alert("Seguro seguro seguro?")

  }
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertState, setAlertState] = useState('info');
  const [msj, setMsj] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  const handlerUserUpdate = (id, username, email, name, lastname) => {
    RegisterAPI.userUpdate(id, username, email, name, lastname)
      .then(res => {
        if (res !== false) {
          setOpenAlert(true)
          setAlertState(alertState.success)
          setMsj(alertsMjs.updateUserMjs)
        } else {
          console.log("Login Fail")
          console.log(res)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const [values, setValues] = useState({
    id: userInfo.id,
    username: userInfo.username,
    email: userInfo.email,
    name: userInfo.name,
    lastname: userInfo.lastname,
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const alertsMjs = {
    deleteUserMJS: 'Se eliminó cuenta correctamente',
    updateUserMjs: 'Tus datos fueron actualziados correctamente',
    updateUserAlert: 'El Email que intenta registrar ya se encuentra en uso por otro usuario',
  }

  const alertsSeverity = {
    error: 'error',
    warning: 'warning',
    info: 'info',
    success: 'success'
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Username' placeholder={userInfo.username} defaultValue={userInfo.username} onChange={handleChange('username')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Name' placeholder={userInfo.name} defaultValue={userInfo.name} onChange={handleChange('name')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Lastname' placeholder={userInfo.lastname} defaultValue={userInfo.lastname} onChange={handleChange('lastname')} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='email'
              label='Email'
              placeholder={userInfo.email}
              defaultValue={userInfo.email}
              onChange={handleChange('email')}
              disabled={true}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }} onClick={(e) => { handlerUserUpdate(userInfo.id, values.username, values.email, values.name, values.lastname) }}>
              Actualizar Datos
            </Button>
            <Button variant='outlined' color='secondary' onClick={(e) => { handleClickOpen() }}>
              Eliminar Cuenta
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Está a punto de eliminar su cuenta"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  ¿Está seguro de eliminar su cuenta?.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={(handleClose)}>Cancelar</Button>
                <Button onClick={handleClose} autoFocus>
                  Eliminar
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </form>
      <Snackbar open={openAlert} autoHideDuration={300} onClose={handleClose}>
        <Alert onClose={handleCloseAlert} severity={alertState} sx={{ width: '100%' }}>
          {msj}
        </Alert>
      </Snackbar>
    </CardContent>
  )
}

export default TabAccount
