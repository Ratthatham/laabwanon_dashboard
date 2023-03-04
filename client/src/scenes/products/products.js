import React, { useState } from 'react'
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Button,
    Typography,
    Rating,
    useTheme,
    useMediaQuery
} from "@mui/material"
import Header from '../../component/Header'
import { useGetProductsQuery } from '../../state/apiSlice'

const Product = ({
    _id,
    name,
    description,
    price,
    rating,
    category,
    supply,
    stat
}) => {
    const theme = useTheme();
    const [isExpanded, setIsExpanded]=useState(false);

    return(
        <Card sx={{
            backgroundImage: 'none',
            backgrouColor: theme.palette.background.alt,
            borderRadius: "0.55rem"
        }}>
            <CardContent>
                <Typography sx={{
                    fontSize: 14,
                    color: theme.palette.secondary[700],
                }} gutterBottom>
                    {category}
                </Typography>
                <Typography variant='h5' component="div">
                    {name}
                </Typography>
                <Typography sx={{
                    color: theme.palette.secondary[400],
                    marginBottom: "1.5rem"
                }}>
                    ${Number(price).toFixed(2)}
                </Typography>
                <Rating value={rating} readOnly/>
                <Typography variant='body2'>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    variant='primary'
                    size='small'
                    onClick={()=>setIsExpanded(!isExpanded)}
                >
                        See more
                </Button>
            </CardActions>
            <Collapse
                in={isExpanded}
                timeout="auto"
                unmountOnExit
                sx={{
                    color: theme.palette.secondary[300]
                }}
            >
                <CardContent>
                    <Typography>id: {_id}</Typography>
                    <Typography>Supply Left: {supply}</Typography>
                    <Typography>Yearly Sales This Year: {stat[0].yearlySalesTotal}</Typography>
                    <Typography>Yearly Units Sold This Year: {stat[0].yearlyTotalSoldUnits}</Typography>
                </CardContent>
                
            </Collapse>
        </Card>
    )
}


const Products = () => {
    const theme = useTheme();
    const {data, error, isLoading} = useGetProductsQuery();
    console.log(data)
    const isNonMobile = useMediaQuery("(min-width: 1000px)")
    console.log(data)
    return (
        <Box sx={{
            margin: "1.5rem 2.5rem"
        }}>
            <Header title="Products" subtitle="more title"/>
            {
                data || !isLoading? 
                    <Box mt="20px"
                        display="grid"
                        gridTemplateColumns= "repeat(4, minmax(0, 1fr))"
                         sx={{
                        marginTop: "20px",
                        display: "grid",
                        justifyContent: "space-between",
                        rowGap: "20px",
                        columnGap: "1.33%",
                        "& > div": { gridColumn: isNonMobile? undefined: "span 4"}
                    }}> 
                    {
                        data.map(({
                            _id,
                            name,
                            description,
                            price,
                            rating,
                            category,
                            supply,
                            stat})=>(
                            <Product
                            key={_id}
                            _id={_id}
                            name={name}
                            description={description}
                            price={price}
                            rating={rating}
                            category={category}
                            supply={supply}
                            stat={stat}
                            />
                        ))
                    }
                    
                    </Box>
                : <div>Loading...</div>
            }

        </Box>
    )
}

export default Products