import React from 'react'
import {CssBaseline, ThemeProvider, createTheme} from "@mui/material"
import {themeSettings} from "./assets/theme"
import { useMemo } from 'react'
import {useSelector} from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Layout from "./scenes/layout/layout"
import Dashboard from "./scenes/dashboard/dashboard"
import Products from './scenes/products/products'
import Customers from './scenes/customers/customers'
import Transactions from './scenes/transactions/transactions.js'
import Overview from './scenes/overview/overview'


const App = () => {
  const mode = useSelector((state)=>state.mode.mode)
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='customers' element={<Customers/>}/>
          <Route path='transactions' element={<Transactions/>}/>
          <Route path='overview' element={<Overview/>}/>
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App;
