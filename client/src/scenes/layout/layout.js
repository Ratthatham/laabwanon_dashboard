import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from "@mui/material"
import Navbar from '../../component/Navbar'

const Layout = () => {
  return (
    <Box width="100%" height="100%">
      <Box>
        <Navbar/>
        <Outlet/>
      </Box>
    </Box>
  )
}

export default Layout