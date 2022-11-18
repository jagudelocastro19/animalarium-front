import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext, useState } from 'react'
import { Alert, Grid, Snackbar } from '@mui/material'
import { ItemRequestAPI } from '../../../services/ProductsAPI'
import { AppContext } from '../../../contexts/LoginContext'
import {Icon} from '@mui/material/Icon';
import DeleteIcon from '@mui/icons-material/Delete';


const createData = (_id, referencia, title, description, url, stock, price, categoria, typePet, status) => {
  return { _id, referencia, title, description, url, stock, price, categoria, typePet, status }
}

const rows = [
  createData('I1', 'R2', 'T3', 'D4', 'U5', 'S6', 'P7', 'C8', 'T9', 'S10'),
  createData('I1', 'R2', 'T3', 'D4', 'U5', 'S6', 'P7', 'C8', 'T9', 'S10'),
]

const TabArticle = () => {
  const [articleInfo] = useContext(AppContext);

  const handleDeleteArticle = () => {
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

  const handlerArticleUpdate = (_id, referencia, title, description, url, stock, price, categoria, typePet, status) => {
    ItemRequestAPI.articleUpdate(_id, referencia, title, description, url, stock, price, categoria, typePet, status)
      .then(res => {
        if (res !== false) {
          setOpenAlert(true)
          setAlertState(alertState.success)
          setMsj(alertsMjs.updateArticleMjs)
        } else {
          console.log(res)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const [values, setValues] = useState({
    id: articleInfo._id,
    referencia: articleInfo.referencia,
    title: articleInfo.title,
    description: articleInfo.description,
    url: articleInfo.url,
    stock: articleInfo.stock,
    price: articleInfo.price,
    categoria: articleInfo.categoria,
    typePet: articleInfo.typePet,
    status: articleInfo.status,
  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const alertsMjs = {
    deleteArticleMJS: 'Se eliminó el articulo correctamente',
    updateArticleMjs: 'El artículo fue actualizado correctamente',
  }

  const alertsSeverity = {
    error: 'error',
    warning: 'warning',
    info: 'info',
    success: 'success'
  }


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, }} aria-label='simple table' >
        <TableHead>
          <TableRow>
            <TableCell align='center'>Id</TableCell>
            <TableCell align='center'>Referencia</TableCell>
            <TableCell align='center'>Nombre</TableCell>
            <TableCell align='center'>Descripcion</TableCell>
            <TableCell align='center'>Url</TableCell>
            <TableCell align='center'>Stock</TableCell>
            <TableCell align='center'>Precio</TableCell>
            <TableCell align='center'>Categoria</TableCell>
            <TableCell align='center'>Tipo Mascota</TableCell>
            <TableCell align='center'>Estado</TableCell>
            <TableCell align='center'>Acciones</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map(row => (
            <TableRow
              key={articleInfo._id}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row._id}
              </TableCell>
              <TableCell align='center'>{row._id}</TableCell>
              <TableCell align='center'>{articleInfo.referencia}</TableCell>
              <TableCell align='center'>{row.title}</TableCell>
              <TableCell align='center'>{row.description}</TableCell>
              <TableCell align='center'>{row.url}</TableCell>
              <TableCell align='center'>{row.stock}</TableCell>
              <TableCell align='center'>{row.price}</TableCell>
              <TableCell align='center'>{row.categoria}</TableCell>
              <TableCell align='center'>{row.typePet}</TableCell>
              <TableCell align='center'>{row.status}</TableCell>
              <TableCell>
              <Grid item xs={12}>
                <Button variant='contained' sx={{ marginRight: 3.5 }} 
                onClick={(e) => { handlerArticleUpdate(articleInfo._id, values.referencia, values.title, values.description, values.url, values.stock, values.price, values.categoria, values.typePet,values.status ) }}>
                  Actualizar                                                                                                                        
                </Button>
                <Button variant='outlined' color='secondary'endIcon={<DeleteIcon />}
                onClick={(e) => { handleClickOpen() }}>
                  Eliminar
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Está a punto de eliminar el artículo"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      ¿Está seguro de eliminar el artículo?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={(handleClose)}>Cancelar</Button>
                    <Button onClick={handleClose} autoFocus>Eliminar</Button>
                  </DialogActions>
                </Dialog>
              </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Snackbar open={openAlert} autoHideDuration={300} onClose={handleClose}>
        <Alert onClose={handleCloseAlert} severity={alertState} sx={{ width: '100%' }}>
          {msj}
        </Alert>
      </Snackbar>
    </TableContainer>
    
  )
}

export default TabArticle