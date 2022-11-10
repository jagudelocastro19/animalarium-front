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


const TabNewArticle = () => {
  
  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Referencia' placeholder='Referencia' 
            // defaultValue='Referencia' 
            // onChange='Referencia' 
            />
          </Grid>
          
          <Grid item xs={12}>
            <Button variant='primary' sx={{ marginRight: 3.5 }}>
             Guardar
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabNewArticle
