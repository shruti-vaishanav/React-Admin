/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';

// project imports
// import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Google from 'assets/images/icons/social-google.svg';
import { baseURL_Login } from 'Constant/Common';
import { setStorage, GetStorage } from 'utils/localstorage';
import ApiClient from 'Actions'
// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useSelector((state) => state.customization);
    const [checked, setChecked] = useState(true);
    const [formdata, setFormData] = useState({
        username: "mor_2314",
        password: "83r5^_"
    });
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);


    const FormValue = (event) => {
        setFormData({
            ...formdata,
            [event.target.name]: event.target.value
        });
    };
    // const profileid = 1178221
    // const SignIn = async () => {
    //     setStorage('SignIN_Token', token); //token store on click
    //     navigate('/dashboard/default');
    //     axios({
    //         method: 'get',
    //         url: `${baseURL}/${profileid}`,
    //         headers: { Authorization: `Barear ${await GetStorage('SignIN_Token')}` }
    //     })
    //         .then((res) => {
    //             setStorage('profilename', JSON.stringify(res.data))
    //             console.log(res.data)

    //         })
    //         .catch((error) => console.log(error))
    // };


    const SignIn = async () => {
        const response = await ApiClient.Login.PostLogin(formdata)
        // console.log(response);
        if (response) {
            setStorage('logintoken', (response.data.token))
            navigate('/dashboard/default');
        }
    }

    // const SignI = async () => {
    //     // setStorage('SignIN_Token', token); //token store on click
    //     navigate('/dashboard/default');
    //     axios({
    //         method: 'POST',
    //         url: `${baseURL_Login}`,
    //         data: formdata
    //         // headers: { Authorization: `Barear ${await GetStorage('SignIN_Token')}` }
    //     })
    //         .then((res) => {
    //             setStorage('logintoken', (res.data.token))
    //             // setFormData(res.data)
    //             // console.log(res.data.token);

    //         })
    //         .catch((error) => console.log(error))
    // };

    const googleHandler = async () => {
        console.error('Login');
    };
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12}>
                    <AnimateButton>
                        <Button
                            disableElevation
                            fullWidth
                            onClick={googleHandler}
                            size="large"
                            variant="outlined"
                            sx={{
                                color: 'grey.700',
                                backgroundColor: theme.palette.grey[50],
                                borderColor: theme.palette.grey[100]
                            }}
                        >
                            <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                                <img src={Google} alt="google" width={16} height={16} style={{ marginRight: matchDownSM ? 8 : 16 }} />
                            </Box>
                            Sign in with Google
                        </Button>
                    </AnimateButton>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                        <Button
                            variant="outlined"
                            sx={{
                                cursor: 'unset',
                                m: 2,
                                py: 0.5,
                                px: 7,
                                borderColor: `${theme.palette.grey[100]} !important`,
                                color: `${theme.palette.grey[900]}!important`,
                                fontWeight: 500,
                                borderRadius: `${customization.borderRadius}px`
                            }}
                        // disableRipple
                        // disabled
                        >
                            OR
                        </Button>
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Sign in with Email address</Typography>
                    </Box>
                </Grid>
            </Grid>

            <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-email-login"
                    type="text"
                    value={formdata.username}
                    name="username"
                    // onBlur={handleBlur}
                    onChange={FormValue}
                    label="Username / Email Address "
                // inputProps={{}}
                />
            </FormControl>
            <FormControl
                fullWidth
                sx={{ ...theme.typography.customInput }}
            >
                <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password-login"
                    type={showPassword ? 'text' : 'password'}
                    value={formdata.password}
                    name="password"
                    // onBlur={handleBlur}
                    onChange={FormValue}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                size="large"
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                    inputProps={{}}
                />
            </FormControl>
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={(event) => setChecked(event.target.checked)}
                            name="checked"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                    Forgot Password?
                </Typography>
            </Stack>
            <Box sx={{ mt: 2 }}>
                <AnimateButton>
                    <Button
                        disableElevation
                        // disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        color="secondary"
                        onClick={SignIn}
                    >
                        Sign in
                    </Button>
                </AnimateButton>
            </Box>
        </>
    );
};

export default FirebaseLogin;
