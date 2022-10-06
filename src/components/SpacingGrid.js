import React, { useEffect, useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CardAppleWatch from './CardAppleWatch';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import LinearProgress from '@mui/material/LinearProgress';

import Backdrop from '@mui/material/Backdrop';


import { ItemListAPI } from '../services/ProductsAPI'
import { AppContext } from '../contexts/LoginContext';

const loadingStyle = {
  height: '100hv',
  margin: '0 auto',
  textAlign: 'center',
  justifyContent: 'center',
  displa: 'flex',
}


export default function SpacingGrid({handleBackCarrito}) {
  const [articulos, setArticulos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shop, setShop] = useState([]);
  const [checked, setChecked] = useState(false);
  const [isLogged, setIsLogged] = useContext(AppContext);
  
  const spacing = 4;

  const handleChange = () => {
    setChecked(isLoaded);
  };

  const handleCallback = (childData) => {
    handleBackCarrito(childData)
  }

  const handleItemList = async () => {
    try {
      await ItemListAPI.itemList()
        .then(res => {
          setArticulos(res);
        })
      setIsLoaded(true)
      setChecked(true);
    } catch (e) {
      console.log(e)
      console.log("Algo está fallando")
    }
  }

  useEffect(() => {
    handleItemList()

  }, []);

  const handleCarrito = (e) => {
    setShop(e)
    console.log("res")
  }




  return (
    <>
      {isLoaded ?
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={13}>
            <Grow in={checked}>
              <Grid container justifyContent="center" spacing={spacing}>
                {articulos.map((value) => (
                  <Grid item>
                    <CardAppleWatch data={value} login={isLogged} parentCallback={handleCallback}></CardAppleWatch>
                  </Grid>
                ))}
              </Grid>
            </Grow>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Grid container>
                <Grid item>

                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        :
        <div style={loadingStyle}>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoaded}
          >
            <img src='/img/michi.gif' />
            <Box sx={{ width: '30%' }}>
              <LinearProgress />
            </Box>
          </Backdrop>
        </div>
      }
    </>
  );
}
