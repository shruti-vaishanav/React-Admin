/* eslint-disable no-unused-vars */

import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery, Breadcrumbs } from '@mui/material';

// project imports
import AuthWrapper1 from '../pages/authentication/AuthWrapper1';
import AuthCardWrapper from '../pages/authentication/AuthCardWrapper';
import Logo from 'ui-component/Logo';
import ProductForm from './form/ProductForm';
import AuthFooter from 'ui-component/cards/AuthFooter';

// assets

// ===============================|| AUTH3 - REGISTER ||=============================== //

const ProductEdit = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    {/* <Grid item sx={{ mb: 1 }}>
                                        <Link to="#">
                                            <Logo />
                                        </Link>
                                    </Grid> */}
                                    <Grid item xs={12}>
                                        <Grid container direction={matchDownSM ? 'column-reverse' : 'row'}>
                                            <Stack>
                                                <Typography
                                                    color={theme.palette.secondary.main}
                                                    gutterBottom
                                                    variant={matchDownSM ? 'h5' : 'h2'}
                                                >
                                                    Product Edit
                                                </Typography>
                                                <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: '80px' }}>
                                                    <Link underline="hover" color="inherit" to="/dashboard/default">
                                                        Dashboard
                                                    </Link>
                                                    <Link underline="hover" color="inherit" to="/product/product-list">
                                                        Product
                                                    </Link>
                                                    <Typography color="text.primary">Add</Typography>
                                                </Breadcrumbs>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ProductForm />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography
                                                component={Link}
                                                to="/pages/login/login3"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                Already have an account?
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default ProductEdit;
