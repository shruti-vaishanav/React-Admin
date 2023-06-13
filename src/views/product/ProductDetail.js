/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prettier/prettier */
// /* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Container, Grid, Button, Typography, Divider } from '@mui/material';
// import ProductGallary from './gallary/Productgallary';
import product1 from '../../../src/assets/product/product_7.jpg';
import product2 from '../../../src/assets/product/product_4.jpg';
import product3 from '../../../src/assets/product/product_6.jpg';
import product4 from '../../../src/assets/product/product_2.jpg';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useLocation } from 'react-router';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { color, margin } from '@mui/system';
import { useNavigate } from 'react-router';
import ApiClient from 'Actions';
import { setStorage, GetStorage, RemoveStorage } from 'utils/localstorage';

function ProductDetail() {
    const [showimage, setShowImage] = useState("");
    const [detaildata, setDetailData] = useState([])
    const showPhoto = (event) => setShowImage(event.target.src)
    const [count, setCount] = useState(1)
    const location = useLocation();
    const incrementCount = () => {
        setCount(count + 1)
    };
    const decrementCount = () => {
        setCount(count - 1)
    };
    const navigate = useNavigate();

    // console.log('location: ', location.state);
    // console.log(count);

    // ON UPDATE DATA FILL IN INPUT
    const GetProduct = async () => {
        if (location.state) {
            const id = location.state.id;
            const response = await ApiClient.product.GetById(id, detaildata)
            if (response) {
                setDetailData({ ...response.data, quantity: count })
                // console.log('response.data: ', );
            } else { console.log('not found'); }
        }

        // console.log(response.data.users);
    }
    useEffect(() => {
        GetProduct();
    }, [location, count]);

    function AddToCart() {
        // let productsString = JSON.parse(GetStorage(['products']))
        // let add = productsString.concat(detaildata);
        // setStorage('products', JSON.stringify(add));
        // let productsString = JSON.parse(GetStorage(['products']));

        navigate('/product/product-cart');
        const oldproduct = localStorage.getItem('products') ? localStorage.getItem('products') : "[]";
        const arrayproduct = JSON.parse(oldproduct);
        const add = arrayproduct.concat(detaildata);
        localStorage.setItem('products', JSON.stringify(add));
    }
    console.log("cout", detaildata);

    return (
        <>
            <Container>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h2>Product detail</h2>
                    <Badge badgeContent={1} color="error">
                        <ShoppingCartIcon color="action" />
                    </Badge>
                </div>
                <Grid container="md" spacing={6} mt={5} direction="row" >
                    <Grid item md={12} lg={6} sm={12}>
                        {/* <ProductGallary /> */}
                        <div>
                            {/* <img alt="productimage"
                                src="https://api-prod-minimal-v4.vercel.app/assets/images/products/product_1.jpg"
                                // src={detaildata.image}
                                width={540} height={450} style={{ borderRadius: '10px' }} onClick={showPhoto}
                            /> */}
                            {
                                showimage ? (
                                    <img alt="productimage"
                                        src={showimage}
                                        width={540} height={450} style={{ borderRadius: '10px' }} onClick={showPhoto}
                                    />
                                ) :
                                    (
                                        // defalt image
                                        <img alt="productimage"
                                            // src="https://api-prod-minimal-v4.vercel.app/assets/images/products/product_1.jpg"
                                            src={detaildata.image}
                                            width={540} height={450} style={{ borderRadius: '10px' }} onClick={showPhoto}
                                        />
                                    )
                            }
                        </div>
                        <Grid container="md" spacing={1} mt={5} direction="row">
                            <Grid item md={3} lg={3}>
                                <div>
                                    <img
                                        alt="gvhj"
                                        src={product1}
                                        width={125}
                                        height={120}
                                        style={{ borderRadius: '10px' }}
                                        onClick={showPhoto}
                                    />

                                </div>
                            </Grid>
                            <Grid item md={3} lg={3}>
                                <div>
                                    <img alt="gvhj" src={product2} width={125} height={120} style={{ borderRadius: '10px' }}
                                        onClick={showPhoto}
                                    />
                                </div>
                            </Grid>
                            <Grid item md={3} lg={3}>
                                <div>
                                    <img alt="gvhj" src={product3} width={125} height={120} style={{ borderRadius: '10px' }}
                                        onClick={showPhoto}
                                    />
                                </div>
                            </Grid>
                            <Grid item md={3} lg={3}>
                                <div>
                                    <img alt="gvhj" src={product4} width={125} height={120} style={{ borderRadius: '10px' }}
                                        onClick={showPhoto}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={12} lg={6} sm={12}>
                        <div className='productdetail'>
                            <Typography spacing={1}
                                component='h3'
                                variant='button' >
                                {detaildata.title}
                                <Chip label="New" color="primary" size="small" variant='outlined' />
                            </Typography>
                            <Typography
                                variant='body2'
                                component='p'
                                mt={2}>
                                {detaildata.description}
                            </Typography>
                            <Typography
                                mt={2}
                            >
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            </Typography>
                            <Typography variant='caption' component='h4' style={{ marginBottom: '20px' }}>
                                {detaildata.price}
                            </Typography>
                            {/* <p>Create At : {detaildata.Createddate}</p> */}

                            {/* <h4>stock:{10}</h4> */}
                            {/* <Divider variant='middle' style={{ margin: '15px' }} /> */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '20px' }} className='quantity'>
                                Quantity
                                <div className="counter_quantity" >
                                    <button className="increment" onClick={decrementCount} type="button">-</button>
                                    {count}
                                    <button className="increment" onClick={incrementCount} type="button" >+</button>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <Button
                                    variant='contained'
                                    size='large'
                                    style={{ paddingInline: '35px' }}
                                    startIcon={<AddShoppingCartIcon />}
                                    onClick={AddToCart}
                                // onClick={() => navigate('/product/product-cart', { state: { ...detaildata, quantity: count } })}
                                >
                                    Add To Cart
                                </Button>
                                <Button variant='contained' size='large' style={{ paddingInline: '35px' }} >Buy Now</Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default ProductDetail;
