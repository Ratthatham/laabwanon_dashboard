import React from 'react'
import {CssBaseline, ThemeProvider, createTheme} from "@mui/material"
import {themeSettings} from "./assets/theme"
import { useMemo } from 'react'
import {useSelector} from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Layout from "./scenes/layout/layout"
import Dashboard from "./scenes/dashboard/dashboard"


const App = () => {
  const mode = useSelector((state)=>state.mode.mode)
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App;
