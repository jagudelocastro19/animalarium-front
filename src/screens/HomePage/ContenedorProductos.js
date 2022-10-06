import SpacingGrid from '../../components/SpacingGrid'
import Carousel from '../../components/Carousel'

const ContenedorProducto = ({handleCarShop}) => {

    const contenedorStyle = {
        margin: 'auto',
        marginTop: '5%',
        //background: '#f0f2f2',
        maxWidth: '1600px',
        
    }

    const getCallCarrito = (c) =>{
        handleCarShop(c)
    }
    return (
        <div style={contenedorStyle}>
            <Carousel></Carousel>
            <SpacingGrid handleBackCarrito={getCallCarrito}></SpacingGrid>
        </div>

    )

}

export default ContenedorProducto