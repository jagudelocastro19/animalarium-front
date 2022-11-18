import { useContext, useState } from 'react';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';

import { ItemRegisterAPI } from '../../../services/ProductsAPI';
import { AppContext } from '../../../contexts/LoginContext';


const TabNewArticle = () => {

  const [articleInfo] = useContext(AppContext);

  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  //const [alertState, setAlertState] = useState('info');
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

  const handlerArticleRegister = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

    const [values, setValues] = useState({
      referencia: '',
      title: '',
      description: '',
      url: '',
      stock: '',
      price: '',
      categoria: '',
      typePet: '',
      status: '',
    })

    const alertsMjs = {
      createArticleMJS: 'Se creo el artículo correctamente',
    }

    return (
      <CardContent>
        <form>
          <Grid container spacing={7}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Referencia' placeholder={articleInfo.referencia}
                defaultValue={articleInfo.referencia} onClick={handlerArticleRegister('referencia')}
              />

            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Nombre' placeholder={articleInfo.title}
                defaultValue={articleInfo.title} onClick={handlerArticleRegister('title')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Descripción' placeholder={articleInfo.description}
                defaultValue={articleInfo.description} onClick={handlerArticleRegister('description')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Url' placeholder='Url' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Stock' placeholder='Stock' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Precio' placeholder='Precio' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Categoria' placeholder='Categoria' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Tipo Mascota' placeholder='Tipo Mascota' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='Estado' placeholder='Estado' />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth
                size='large'
                variant='contained'
                sx={{ marginBottom: 7 }}
                //onClick={handlerArticleRegister}
                onClick={() => console.log(this.handlerArticleRegister)}
              >
                Crear articulo
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    )
  }

  export default TabNewArticle
