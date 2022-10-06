import React, { useState } from 'react';
import TableSpanning from "./TableSpanning"


//MUI Button

//import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const PayPagePresenter = ({carrito}) => {

    const contenedorStyle = {
        margin: 'auto',
        marginTop: '7%',
        //background: 'red',
        maxWidth: '1600px',
        //display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const titleStyle = {
        textAlign: 'left'
    }

    const buttomStyle = {
        marginTop: '2%',
        alignItems: 'right',
        justifyContent: 'right',
    }
    const [count, setCount] = useState(carrito.length);
    
    return (
        <div style={contenedorStyle}>
            <h1 style={titleStyle}>Carrito ({count})</h1>
            <TableSpanning carrito={carrito}/>
            <div style={buttomStyle}>
                <Button variant="contained" size="large">
                    Comprar
                </Button>
            </div>
        </div>
    )

}

export default PayPagePresenter