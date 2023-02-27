import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, useMediaQuery } from "@mui/material"
import Navbar from '../../component/Navbar'
import SideBar from '../../component/SideBar'
import { useSelector } from 'react-redux'
import { useGetUserQuery } from '../../state/apiSlice'



const Layout = () => {
  const userId = useSelector((state)=>state.mode.userId)
  // console.log(typeof(userId))
  const {data, error, isLoading} = useGetUserQuery(userId);
  // console.log(data)
  const match = useMediaQuery('(min-width:600px)')
  // console.log(match)
  
  return (
    <Box display={match? 'flex':'block'} width="100%" height="100%">
        <SideBar
          user = {data || {}}
          match={match}
        />
        <Box flexGrow={1}>
          <Navbar
            user = {data}
          />
          <Outlet/>
        </Box>
    </Box>
  )
}

export default Layout