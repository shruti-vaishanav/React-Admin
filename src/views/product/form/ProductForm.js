/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormHelperText, Grid, TextField, useMediaQuery } from '@mui/material';
import { Formik } from 'formik';
// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
// import ChooseImage from 'views/users/InputImage';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ApiClient from 'Actions';

// ===========================|| FIREBASE - REGISTER ||=========================== //
const ProductForm = ({ ...others }) => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
    const data = useLocation();
    const [date, setDate] = useState();
    const [file, setFile] = useState();
    const [productInput, setProductInput] = useState({
        image: '',
        title: '',
        description: '',
        price: '',
        stock: '',
        Createddate: ''
    });
    // console.log('form', data.state);
    // console.log('productInput', productInput);

    const InputValue = (event) => {
        setProductInput({
            ...productInput,
            [event.target.name]: event.target.value
        });
        if (event.target.files) {
            setFile(URL.createObjectURL(event.target.files[0]));
        }
        setDate({
            [event.target.name]: event.target.setDate
        });
    };
    // console.log('file', file);
    useEffect(() => {
        if (data.state) {
            setProductInput({
                id: data.state.id,
                image: data.state.image,
                price: data.state.price,
                description: data.state.description,
                title: data.state.title
                // stock: data.state.stock,
                // Createddate: data.state.Createddate
            });
            setFile(data.state.image);
            //on update image store in setfile state
            console.log('productInput', productInput);
        }
    }, [data]);

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Formik>
                    {({ errors, isSubmitting }) => (
                        <form {...others}>
                            <Grid container spacing={matchDownSM ? 0 : 2}>
                                <Grid item xs={12} sm={6}>
                                    <div role="presentation" className="addimage">
                                        <div>
                                            <img alt="" src={file} id="productimage_input" name="image" value={productInput.image} />
                                            <TextField type="file" onChange={InputValue} />
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container spacing={matchDownSM ? 0 : 2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        label="Product Name"
                                        value={productInput.title}
                                        margin="normal"
                                        name="title"
                                        type="text"
                                        onChange={InputValue}
                                        sx={{ ...theme.typography.customInput }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="standard-basic"
                                        variant="standard"
                                        fullWidth
                                        label="Discription"
                                        margin="normal"
                                        name="description"
                                        value={productInput.description}
                                        type="text"
                                        onChange={InputValue}
                                        sx={{ ...theme.typography.customInput }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} lg={6}>
                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        label="Price"
                                        name="price"
                                        value={productInput.price}
                                        type="text"
                                        onChange={InputValue}
                                        sx={{ ...theme.typography.customInput }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} lg={6}>
                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        label="stock/quantity"
                                        margin="normal"
                                        value={productInput.stock}
                                        name="stock"
                                        type="text"
                                        defaultValue=""
                                        onChange={InputValue}
                                        sx={{ ...theme.typography.customInput }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} lg={6}>
                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        label="Create Date"
                                        margin="normal"
                                        value={productInput.Createddate}
                                        name="Createddate"
                                        type="date"
                                        defaultValue=""
                                        onChange={InputValue}
                                        sx={{ ...theme.typography.customInput }}
                                    />
                                </Grid>
                            </Grid>

                            {errors.submit && (
                                <Box sx={{ mt: 3 }}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Box>
                            )}
                            <Box sx={{ mt: 2 }}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => navigate('/product/product-list', { state: { ...productInput, image: file } })}
                                    >
                                        submit
                                    </Button>
                                    <Outlet />
                                </AnimateButton>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Grid>
        </>
    );
};
export default ProductForm;
