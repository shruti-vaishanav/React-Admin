/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

//api axios
import axios from 'axios';
import { baseURL, token } from 'Constant/Common';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, TextField, useMediaQuery } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import ChooseImage from 'views/users/InputImage';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// import { GetStorage } from 'utils/localstorage';
import ApiClient from 'Actions';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const [inputData, setInputData] = useState({ name: '', gender: '', email: '', status: '' });
    const location = useLocation();
    console.log('form', location.state);

    const InputValue = (event) => {
        setInputData({
            ...inputData,
            [event.target.name]: event.target.value
        });
    };
    // fill input data
    useEffect(() => {
        if (location.state) {
            setInputData({
                name: ` ${location.state.name.firstname} ${location.state.name.lastname}`,
                // gender: location.state.gender,
                email: location.state.email
                // status: location.state.status
            });
        }
    }, [location]);
    const Submit = async () => {
        if (location.state) {
            const id = location.state.id;
            console.log('id: ', id);
            if (id) {
                // axios({
                //     method: 'put',
                //     url: `${baseURL}/${location.state.id}`,
                //     headers: { Authorization: `Bearer ${await GetStorage('SignIN_Token')}` },
                //     data: inputData
                // })
                //     .then((res) => {
                //         console.log('update', res.data);
                //         navigate('/users/user-list');
                //     })
                //     .catch((error) => console.log(error));
                const response = await ApiClient.User.UpdateUSerCall(id, inputData);
                if (response) {
                    navigate('/users/user-list');
                }
            }
        } else {
            const response = await ApiClient.User.AddUserCall(inputData);
            setInputData(response.data.users);
            console.log('response: ', response);
            navigate('/users/user-list');
        }
        console.log(inputData);
        // axios({
        //     method: 'post',
        //     url: `${baseURL}`,
        //     headers: { Authorization: `Bearer ${await GetStorage('SignIN_Token')}` },
        //     data: inputData
        // })
        //     .then((res) => {
        //         console.log('update', res.data);
        //         navigate('/users/user-list');
        //     })
        //     .catch((error) => console.log(error));
    };
    // console.log('inputdata..setstate', inputData);
    // console.log('data.state.id: ', inputData.id);

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                {/* <form {...others}> */}
                <Grid container spacing={matchDownSM ? 0 : 2}>
                    <Grid item xs={12} sm={6}>
                        <ChooseImage />
                    </Grid>
                </Grid>
                <Grid container spacing={matchDownSM ? 0 : 2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Name"
                            value={inputData.name}
                            margin="normal"
                            name="name"
                            type="text"
                            onChange={InputValue}
                            sx={{ ...theme.typography.customInput }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Gender"
                            margin="normal"
                            name="gender"
                            value={inputData.gender}
                            type="text"
                            onChange={InputValue}
                            sx={{ ...theme.typography.customInput }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={matchDownSM ? 0 : 2}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <TextField
                            fullWidth
                            label="Email"
                            margin="normal"
                            value={inputData.email}
                            name="email"
                            type="text"
                            defaultValue=""
                            onChange={InputValue}
                            sx={{ ...theme.typography.customInput }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <TextField
                            fullWidth
                            label="Status"
                            name="status"
                            value={inputData.status}
                            type="text"
                            onChange={InputValue}
                            sx={{ ...theme.typography.customInput }}
                        />
                    </Grid>
                </Grid>
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
                            onClick={Submit}
                        >
                            submit
                        </Button>
                        <Outlet />
                    </AnimateButton>
                </Box>
                {/* </form> */}
            </Grid>
        </>
    );
};
export default FirebaseRegister;
