// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

const TableSpanning = ({carrito}) => {
const TAX_RATE = 0.19

const ccyFormat = num => {
  return `${num.toFixed(2)}`
}

const priceRow = (qty, unit) => {
  return qty * unit
}

const createRow = (desc, qty, unit) => {
  const price = priceRow(qty, unit)

  return { desc, qty, unit, price }
}

const subtotal = items => {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0)
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
]
const invoiceSubtotal = subtotal(carrito)
const invoiceTaxes = TAX_RATE * invoiceSubtotal
const invoiceTotal = invoiceTaxes + invoiceSubtotal
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='spanning table'>
        <TableHead>
          <TableRow>
            <TableCell align='center' colSpan={3}>
              Detalle
            </TableCell>
            <TableCell align='right'>Precio</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Producto</TableCell>
            <TableCell align='right'>Cantidad</TableCell>
            <TableCell align='right'>Valor Unitario</TableCell>
            <TableCell align='right'>Suma</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carrito.map(row => (
            <TableRow key={row.title}>
              <TableCell><img src={row.url} style={{width:'80px'}} /></TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell align='right'>{1}</TableCell>
              <TableCell align='right'>{row.price}</TableCell>
              <TableCell align='right'>{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align='right'>{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>IVA</TableCell>
            <TableCell align='right'>{`${(TAX_RATE * 100).toFixed(0)}%`}</TableCell>
            <TableCell align='right'>{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align='right'>{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableSpanning
