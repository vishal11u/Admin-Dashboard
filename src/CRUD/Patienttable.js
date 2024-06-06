import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  const getData = "http://192.168.0.108:5001/api/saveFront/getallfrontendfrom";

  const handleData = () => {
    axios.get(getData)
      .then((response) => {
        console.log(response.data);
        const data = response.data.result;
        if (data.length > 0) {
          const firstRow = data[0];
          const columnKeys = Object.keys(firstRow);
          setColumns(columnKeys);
          setRows(data);
        }
      })
      .catch((error) => {
        console.log("error is" + error);
      });
  }

  useEffect(() => {
    handleData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = (searchQuery) => {
    if (searchQuery !== '') {
      const res = rows.filter((user) =>
        user.Firstname.toUpperCase()().includes(searchQuery.toUpperCase()())
      );
      setRows(res);
    } else {
      handleData();
      setRows([...rows]);
    }
  };

  return (
    <>
      <div className='flex items-center justify-between'>
        <TextField size='small' className='' sx={{ width: '40%' }} label='Search by Name.' variant='outlined' placeholder='Search by Name/Mobileno.' onChange={(e) => handleSearch(e.target.value)} />
        {/* <Link to='/details/createpatient'>
          <button className='py-2 px-3 bg-blue-600 text-white rounded-md shadow-lg' >Add New</button>
        </Link> */}
      </div>
      <Paper sx={{ width: '100%', overflow: 'hidden', height: '100%', marginTop: '3%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell
                    sx={{ backgroundColor: 'black', color: 'white' }}
                    key={index}
                    align="left"
                  >
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, rowIndex) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                    {columns.map((column, colIndex) => (
                      <TableCell key={colIndex} align="left">
                        {row[column]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
