import React, { useEffect, useState } from 'react'
import {
    Box,
    useTheme,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
    ListItemIcon
} from "@mui/material"

import { ChevronLeft } from "@mui/icons-material"

import { useLocation, useNavigate } from 'react-router-dom'
import FlexBetween from './FlexBetween'
import { useDispatch, useSelector } from 'react-redux'
import { setSideBarOpen } from '../state/slice/sideBarSlice'
import navItems from '../assets/navItems'
import { red } from '@mui/material/colors'


const SideBar = ({match}) => {
    const drawerWidth = '250px';
    const open = useSelector((state)=>state.sideBarStatus.sideBarOpen)
    const dispatch = useDispatch();
    console.log("open sidebar status", open)
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    const [active, setActive]=useState("")

    useEffect(()=>{
        setActive(pathname.substring(1))
    },[pathname])

  return (
    <Box component="nav">
        {open && <Drawer
            open={open}
            anchor="left"
            variant='persistent'
            sx={{
                width: drawerWidth,
                '& .MuiDrawer-paper': {
                    color: theme.palette.background.alt,
                    backgroundColor: theme.palette.background.alt,
                    boxSizing: "border-box",
                    width: drawerWidth
                }
            }}
        >
            <Box width="100%">
                <Box m="1.5rem 2rem 2rem 3rem">
                    <FlexBetween color={theme.palette.secondary.main}>
                        <Box display="flex" alignItems="center" gap="2rem" >
                            <Typography variant='h4' fontWeight="bold">
                                LaabWanon
                            </Typography>
                            <IconButton onClick={()=>dispatch(setSideBarOpen())}><ChevronLeft/></IconButton>
                        </Box>
                    </FlexBetween>
                </Box>
                <List>
                    {
                        navItems.map(({text, icon})=>{
                            const lcText = text.toLocaleLowerCase();
                            
                            return(
                                <ListItem key={text} disablePadding>
                                    <ListItemButton 
                                        onClick={()=>{
                                            navigate(`/${lcText}`)
                                            setActive(lcText)
                                        }}

                                        sx={{
                                            backgroundColor: active === lcText 
                                                ? theme.palette.secondary[300]
                                                : "transparent",
                                            color:
                                                active === lcText
                                                ? theme.palette.primary[600]
                                                : theme.palette.secondary[100]
                                        }}
                                    > 
                                        <ListItemIcon 
                                            sx={{
                                                ml: "2rem",
                                                color: active === lcText
                                                ? theme.palette.primary[600] 
                                                : theme.palette.secondary[200]
                                            }}
                                        >
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            sx={{

                                                color: active === lcText
                                                ? theme.palette.primary[600] 
                                                : theme.palette.secondary[200]
                                            }}
                                        >
                                            {text}
                                        </ListItemText>
                                    </ListItemButton>    
                                </ListItem>
                            )}
                        )
                    }
                </List>
            </Box>
        </Drawer>}
    </Box>
  )
}

export default SideBar