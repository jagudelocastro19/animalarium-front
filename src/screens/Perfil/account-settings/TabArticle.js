import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

const createData = (_id, referencia, title, description, url, stock, price, categoria, typePet, status) => {
  return {_id, referencia, title, description, url, stock, price, categoria, typePet, status}
}

const rows = [
  createData('I1','R2', 'T3', 'D4', 'U5', 'S6','P7', 'C8', 'T9', 'S10'),
  createData('I1','R2', 'T3', 'D4', 'U5', 'S6','P7', 'C8', 'T9', 'S10'),
]

const TabArticle = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650,}} aria-label='simple table' >
        <TableHead>
          <TableRow>
            <TableCell align='center'>_id</TableCell>
            <TableCell align='center'>referencia</TableCell>
            <TableCell align='center'>title</TableCell>
            <TableCell align='center'>description</TableCell>
            <TableCell align='center'>url</TableCell>
            <TableCell align='center'>stock</TableCell>
            <TableCell align='center'>price</TableCell>
            <TableCell align='center'>categoria</TableCell>
            <TableCell align='center'>typePet</TableCell>
            <TableCell align='center'>status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row._id}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell component='th' scope='row'>
                {row._id}
              </TableCell>
              <TableCell align='center'>{row.referencia}</TableCell>
              <TableCell align='center'>{row.title}</TableCell>
              <TableCell align='center'>{row.description}</TableCell>
              <TableCell align='center'>{row.url}</TableCell>
              <TableCell align='center'>{row.stock}</TableCell>
              <TableCell align='center'>{row.price}</TableCell>
              <TableCell align='center'>{row.categoria}</TableCell>
              <TableCell align='center'>{row.typePet}</TableCell>
              <TableCell align='center'>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TabArticle