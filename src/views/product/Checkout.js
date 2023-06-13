/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Steppers from './checkout-component/Stepper';
import { Divider, Grid, Breadcrumbs, Typography, Table, TableBody, Container } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
// import ApiClient from 'Actions';
import { GetStorage } from 'utils/localstorage';
import CartTable from './checkout-component/CartTable';

function Checkout() {
    const location = useLocation();
    console.log('location: ', location.state);
    const [cartdata, setCartData] = useState([]);
    useEffect(() => {
        const cartitem = JSON.parse(GetStorage('products'));
        setCartData(cartitem);
        console.log('cartitem: ', cartitem);
    }, []);
    console.log('cartdata', cartdata);

    return (
        <>
            <Container>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h2>Checkout</h2>
                    {/* <Badge badgeContent={4} color="error">
                        <ShoppingCartIcon color="action" />
                    </Badge> */}
                </div>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" to="/dashboard/default">
                        Dashboard
                    </Link>
                    <Link underline="hover" color="inherit" to="/product/product-list">
                        Product
                    </Link>
                    <Typography color="text.primary">Checkout</Typography>
                </Breadcrumbs>
                <Grid container="md" mt={5} direction="row">
                    <Grid item md={12} lg={12} sm={12}>
                        <Steppers />
                    </Grid>
                </Grid>
                <Grid container="md" mt={5} direction="row">
                    <Grid item md={12} lg={8} sm={12}>
                        {cartdata ? (
                            <TableContainer component={Paper}>
                                <h3 style={{ paddingLeft: '16px' }}>Cart ({cartdata.length} item)</h3>
                                <Divider />
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead style={{ backgroundColor: '#ECECEC' }}>
                                        <TableRow>
                                            <TableCell>id</TableCell>
                                            <TableCell>Product Name</TableCell>
                                            <TableCell>Price</TableCell>
                                            <TableCell>Quantity</TableCell>
                                            <TableCell>Total Price</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <>
                                            {cartdata.map((value, index) => (
                                                <>
                                                    <CartTable key={index.toString()} index={index} data={value} cartlist={cartdata} />
                                                </>
                                            ))}
                                        </>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        ) : (
                            <div className="empty_cart">
                                <div className="cart_header">
                                    <h6>
                                        {'Cart'}
                                        <span>(0 item)</span>
                                    </h6>
                                </div>
                                <div className="emptycart_img">
                                    <span>
                                        <img src={require('../../assets/product/empty_cart.png')} alt="ui" width={320} height={240} />
                                    </span>
                                    <h5> Cart is empty</h5>
                                    <p>Look like you have no items in your shopping cart.</p>
                                </div>
                            </div>
                        )}
                    </Grid>
                    <Grid item md={12} lg={4} sm={12}></Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Checkout;
