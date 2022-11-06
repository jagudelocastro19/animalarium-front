import React, { useState, useContext, forwardRef } from 'react';
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ShopContenedor = {
  position: 'relative',
  width: '1100px',
  height: '700px',
  //background: 'red',
}
const ShopImgContenedor = {
  //background: '#f2f',
  position: 'absolute',
  left: '0%',
  width: '65%',
  height: '100%',
  textAlign: 'center',
}
const ShopImg = {
  //background: '#f2f2f2',
  position: 'absolute',
  left: '0%',
  width: '100%',
  height: '90%',
  marginTop: '5%',
  //background:'url("/img/logoW.png")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}
const ShopDetailsContainer = {

  display: 'inline-block',
  position: 'absolute',
  right: '0%',
  width: '35%',
  height: '90%',
  marginTop: '3.3%',
  borderStyle: 'double',
  borderRadius: '25px'
}
const ShopDetailsSubContainer = {

  display: 'inline-block',
  position: 'absolute',
  right: '10%',
  top: '5%',
  width: '80%',
  height: '80%',
  marginTop: '3.3%',
}

const CardAppleWatch = ({ data, login, parentCallback }) => {
  const [carrito, setCarrito] = useState([]);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  //const jsonTxt = data;
  //const txt = jsonTxt;
  //const articulo = JSON.parse(txt);
  const articulo = data;

  const onTrigger = (lista) => {
    parentCallback(lista);
  }

  const currency = (number) => {
    return new Intl.NumberFormat('en-ES', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(number);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCarChopping = (item) => {
    if (login) {
      setCarrito([...carrito, item])
      onTrigger(carrito)
    } else {
      navigate("/LoginPage");

    }

  }
  return (
    <div>
      <Card sx={{ maxWidth: '500px' }}>
        <CardMedia sx={{ height: '15rem', width: '280px', margin: 'auto' }} image={articulo.url} />
        <CardContent sx={{ padding: theme => `${theme.spacing(3, 1, 4)} !important` }}>
          <Typography variant='h6' sx={{ marginBottom: 2, width: '350px', height: '50px' }}>
            {articulo.title}
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>{currency(articulo.price)}</Typography>
        </CardContent>
        <Button
          variant='contained'
          sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
          onClick={handleClickOpen}
        >
          <AddShoppingCartOutlinedIcon />  Ver mas
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          maxWidth={false}
        >
          <DialogTitle style={{ textAlign: 'center', fontSize: '2em' }}>{articulo.title}</DialogTitle>
          <DialogContent>
            <div style={ShopContenedor}>
              <div style={ShopImgContenedor}>
                <div style={ShopImg}>
                  <img src={articulo.url} style={{ height: '100%', margin: '0 auto' }} />

                </div>
              </div>
              <div style={ShopDetailsContainer}>
                <div style={ShopDetailsSubContainer}>
                  <h1>{currency(articulo.price)}</h1>
                  <div>
                    <p><strong>ID: </strong>{articulo._id}</p>
                    <p><strong>Referencia: </strong>{articulo.referencia}</p>
                    <p><strong>Unidades Disponibles: </strong>{articulo.stock}</p>
                    <p><strong>Categoría: </strong>{articulo.categoria}</p>
                    <p><strong>Tipo Mascota: </strong>{articulo.typePet}</p>
                  </div>
                  <p><strong>Descripción: </strong>{articulo.description}</p>
                  <div>
                    <Button
                      variant='contained'
                      sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                      onClick={(event) => { handleCarChopping(articulo) }}
                    >
                      Agregar al Carrito
                    </Button>
                    <Button
                      variant='outlined'
                      sx={{ py: 1, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0, marginTop: '5%' }}
                      onClick={handleClose}
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </Card>
    </div>
  )
}

export default CardAppleWatch
