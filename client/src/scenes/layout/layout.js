import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, useMediaQuery } from "@mui/material"
import Navbar from '../../component/Navbar'
import SideBar from '../../component/SideBar'

const Layout = () => {
  const match = useMediaQuery('(min-width:600px)')
  console.log(match)
  
  return (
    <Box display={match? 'flex':'block'} width="100%" height="100%">
        <SideBar
          match={match}
        />
        <Navbar/>
        <Outlet/>
    </Box>
  )
}

export default Layout