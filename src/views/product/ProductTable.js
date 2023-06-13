/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// /* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import { Table, TableBody } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import ProductTableDetail from './ProductTableDetail';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import CookieBanner from 'cookie_session/CookieBanner';
// import Session from 'cookie_session/Session';
import ApiClient from 'Actions';


export default function ProductList() {
    const [productdata, setProductData] = useState([])
    const location = useLocation()
    const navigate = useNavigate()
    console.log("location.state", location.state);
    const getcall = async () => {
        const response = await ApiClient.product.GetProduct()
        // console.log(response.data);
        setProductData(response.data)
    }

    const Productedit = async () => {
        const product_data = location.state
        console.log('product_data: ', product_data);
        if (product_data) {
            const productid = location.state.id;
            if (productid) {
                const response = await ApiClient.product.UpdateById(productid, product_data);
                console.log('response: ', response.data);
                // navigate('/product/product-list');
                // setProductData(response.data)
            } else {
                const response = await ApiClient.product.Add(product_data);
                console.log('product_data: ', product_data);
                console.log('response: ', response);
                // navigate('/product/product-list');
                // setProductData(response.data);
            }
        }
    };
    // // console.log('productInput..setstate', productdata);
    useEffect(() => {
        getcall();
        Productedit();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // const delet = (id) => {
    //     const indexfind = productdata.findIndex(row => row.id === id)
    //     productdata.splice(indexfind, 1)
    //     console.log('productdata: ', productdata);
    //     setProductData([
    //         ...productdata
    //     ])
    // }
    // console.log('productdata: ', productdata);


    return (
        <>
            <Typography align="right" mb={6}>
                <Button variant="contained" onClick={() => navigate('/product/product-add')}>
                    add
                </Button>
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead style={{ backgroundColor: 'lightgray' }}>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>category</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Stock</TableCell>
                            <TableCell>action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            productdata ? (
                                <>
                                    {productdata.map((row, index) =>
                                        <>
                                            <ProductTableDetail
                                                index={index}
                                                id={row.id}
                                                image={row.image}
                                                title={row.title}
                                                // Createddate={row.Createddate}
                                                category={row.category}
                                                discription={row.discription}
                                                price={row.price}
                                                // stock={row.stock}
                                                data={row}
                                                deletrow={() => delet(row.id)}
                                            />
                                        </>
                                    )}
                                </>
                            ) : (
                                null
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <CookieBanner />
            <Session /> */}
            {/* <input type="button" value="getCookie" onclick={getCookie()} /> */}
        </>
    )
}
