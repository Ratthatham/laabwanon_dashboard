import React from 'react'
import { useTheme, Box, Typography } from "@mui/material"

const Header = ({title, subtitle}) => {
    const theme = useTheme();
  return (
    <Box>
        <Typography 
            variant="h2"
            color={theme.palette.secondary[100]}
            fontWeight="bold"
            sx={{
                mb: "5px"
            }}
        >
            {title}
        </Typography>
        <Typography 
            variant="h4"
            color={theme.palette.secondary[100]}
            fontWeight="bold"
            sx={{
                mb: "5px"
            }}
        >
            {subtitle}
        </Typography>
    </Box>
  )
}

export default Header