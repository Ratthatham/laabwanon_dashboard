import React, {useState} from 'react'
import { Box, FormControl, MenuItem, InputLabel, Select, Input } from "@mui/material"
import Header from "../../component/Header"
import OverviewChart from "../../component/OverviewChart.js"


const Overview = () => {
  const [view, setValue] = useState("units")

  return (
    <Box sx={{
      m: "1.5rem 2.5rem"
    }}>
      <Header title="Overview" subtitle="This is Overview"/>
      <Box height="75vh">
        <FormControl>
          <InputLabel>View</InputLabel>
          <Select value={view} label="View" onChange={(e)=>setValue(e.target.value)}>
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  )
}

export default Overview