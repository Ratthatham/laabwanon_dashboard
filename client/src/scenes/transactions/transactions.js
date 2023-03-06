import React, { useState } from 'react'
import { useGetTransactionsQuery } from '../../state/apiSlice'
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Header from '../../component/Header';
import DataGridCustomToolBar from '../../component/DataGridCustomToolBar';

const Transactions = () => {

    //Set value to be sent to backend;
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const { data, error, isLoading } = useGetTransactionsQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search,
      });

    //Setting form of columns using in Datagrid
    const columns = [
      {
        field: "_id",
        headerName: "ID",
        flex:1,
      },
      {
        field: "userId",
        headerName: "User ID",
        flex:1,
      },
      {
        field: "createdAt",
        headerName: "CreatedAt",
        flex:1,
      },
      {
        field: "products",
        headerName: "# of Products",
        flex:0.4,
        sortable: false,
        renderCell: (params) => params.value.length
      },
      {
        field: "cost",
        headerName: "Cost",
        flex:1,
        renderCell: (params) => `$${Number(params.value).toFixed(2)}`
      },
    ]

  return (
    <Box sx={{
      margin: "1.5rem 2.5rem"
    }}>
      <Header title="Transactions" subtitle="All Transactions"/>
      <Box sx={{
        marginTop: "40px",
        height: "75vh"
      }}>
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row)=>row._id}
          rows={(data && data.transactions)|| []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          pagination
          page={page}
          rowsPerPageOptions={[20,50,100]}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode='server'
          onPageChange={(newPage)=>setPage(newPage)}
          onPageSizeChange={(newPageSize)=>setPageSize(newPageSize)}
          onProcessRowUpdateError={(newSortModel)=>setSort(...newSortModel)}
          components={{
            Toolbar: DataGridCustomToolBar
          }}
          //Sent prop into component Toolbar
          componentsProps={{ 
            toolbar: {searchInput, setSearchInput,  setSearch}
          }}
        />

      </Box>
    </Box>
  )
}

export default Transactions