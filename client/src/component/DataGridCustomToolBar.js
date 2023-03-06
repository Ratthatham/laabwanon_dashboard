import React from 'react'
import {Search, Cancel} from "@mui/icons-material"
import { IconButton, TextField, InputAdornment} from "@mui/material"
import {
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarColumnsButton
} from "@mui/x-data-grid"
import FlexBetween from "../component/FlexBetween"

const DataGridCustomToolBar = ({searchInput, setSearch, setSearchInput}) => {
  return (
    <GridToolbarContainer>
        <FlexBetween width="100%">
            <FlexBetween>
                <GridToolbarColumnsButton/>
                <GridToolbarDensitySelector/>
                <GridToolbarExport/>
            </FlexBetween>
            <TextField
                label="Search..."
                variant='standard'
                sx={{
                    mb: "0.5rem",
                    width: "15rem"
                }}
                onChange={(event)=>setSearchInput(event.target.value)}
                value={searchInput}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            {
                                searchInput!==''?
                                <IconButton 
                                    onClick={()=>{
                                        setSearchInput('')
                                    }}
                                >
                                    <Cancel fontSize='small'/>
                                </IconButton>
                                :''
                            }
                            <IconButton 
                                onClick={()=>{
                                    setSearch(searchInput);
                                    setSearchInput("");
                                }}
                            >
                                <Search/>
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />

            
        </FlexBetween>
    </GridToolbarContainer>
  )
}

export default DataGridCustomToolBar