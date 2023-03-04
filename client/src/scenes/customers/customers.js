import React from 'react'
import Header from '../../component/Header';
import { Box, useTheme} from "@mui/material"
import { useGetCustomersQuery } from '../../state/apiSlice'
import {DataGrid} from "@mui/x-data-grid"

const Customers = () => {

    const {data, error, isLoading} = useGetCustomersQuery();
    console.log(data);

    //Setting form of columns using in Datagrid
    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 1
        },
        {
            field: "name",
            headerName: "Name",
            flex: 0.5
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1
        },
        {
            field: "phoneNumber",
            headerName: "Phone Number",
            flex: 0.4,
            renderCell: (params) => {
                return params.value.replace(/^(\d{3})(\d{3})(\d{4})/,"($1)$2-$3")
            } //Replace form of Phone number using renderCell
        },
        {
            field: "country",
            headerName: "Country",
            flex: 0.2,
        },
        {
            field: "occupation",
            headerName: "Occupation",
            flex: 1,
        },
        {
            field: "role",
            headerName: "Role",
            flex: 0.3,
        },
      
        
    ]
  return (
    <Box sx={{
        margin: "1.5rem 2.5rem"
    }}>
        <Header title="Customers" subtitle="more title"/>
        <Box
            mt="40px"
            height="75vh"
        >
            <DataGrid
                initialState={{
                    pagination: {pageSize:20}
                }}
                loading={isLoading || !data}
                getRowId={(row)=>row._id}
                rows={ data || []}
                columns={columns}
                rowsPerPageOptions={[5, 20, 25]}
            />
        </Box>
    </Box>
  )
}

export default Customers