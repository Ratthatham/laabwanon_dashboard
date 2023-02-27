import React, { useState } from 'react'
import { 
  LightModeOutlined, 
  DarkModeOutlined, 
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined 
} from '@mui/icons-material'

import { 
  AppBar,
  Toolbar,
  Box,
  useTheme,
  IconButton,
  InputBase

} from '@mui/material'

import FlexBetween from "./FlexBetween"
import { useDispatch, useSelector } from "react-redux"
import { setMode } from '../state/slice/modeSlice'
import { setSideBarOpen } from '../state/slice/sideBarSlice'


const Navbar = ({user}) => {
  const dispatch = useDispatch();
  const mode = useSelector((state)=>state.mode.mode)
  const theme = useTheme();

  return (
    <Box>
      <AppBar 
        sx={{
          position: "static",
          background: "none",
          boxShadow: "none"
        }} 
      >
        <Toolbar
          sx={{
            justifyContent: "space-between"
          }}
        >
          {/* Left Side */}
          <FlexBetween>
            <IconButton onClick={()=>dispatch(setSideBarOpen())}>
              <MenuIcon/>
            </IconButton>
            <FlexBetween
              backgroundColor = {theme.palette.background.alt}
              borderRadius = "9px"
              gap="3rem"
              p="0.1rem 1rem 0.1rem 1.5rem"
            >
              <InputBase placeholder='Search...'/>
              <IconButton>
                <Search/>
              </IconButton>
            </FlexBetween>
          </FlexBetween>
          {/* Right Side */}
          <FlexBetween>
            <IconButton onClick={()=>dispatch(setMode())}>
              {
                mode === "dark"? <DarkModeOutlined/> : <LightModeOutlined/>
              }
            </IconButton>
            <IconButton >
              <SettingsOutlined />
            </IconButton>
          </FlexBetween>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar