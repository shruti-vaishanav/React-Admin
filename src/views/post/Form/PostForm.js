/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

//api axios
// import axios from 'axios';
// import { baseURLPost, token, baseURL } from 'Constant/Common';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, TextField, useMediaQuery } from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import { useLocation } from 'react-router-dom';
// import MenuItem from '@mui/material/MenuItem';
// import { GetStorage } from 'utils/localstorage';
import Autocomplete from '@mui/material/Autocomplete';
import ApiClient from 'Actions';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const PostForm = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const [input, setInput] = useState({ title: '', body: '', userId: '' });
    const [dropoption, setDropOption] = useState([]);
    const location = useLocation();

    const InputValue = (event, value) => {
        // console.log('event: ', event.target);
        // console.log('value: ', value);
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };
    console.log('location', location.state);
    // fill input data
    useEffect(() => {
        if (location.state) {
            setInput({
                userId: location.state.userId,
                title: location.state.title,
                body: location.state.body
            });
        }
    }, [location]);
    const GetUserId = async () => {
        const response = await ApiClient.User.GetUserCall();
        if (response) {
            setDropOption(response.data.users);
        }
    };

    useEffect(() => {
        GetUserId();
    }, []);

    const SubmitPost = async () => {
        if (location.state) {
            const postid = location.state.userId;
            if (postid) {
                // axios({
                //     method: 'put',
                //     url: `${baseURLPost}/${location.state.id}`,
                //     headers: { Authorization: `Bearer ${token}` },
                //     data: input
                // })
                //     .then((res) => {
                //         console.log('update', res.data);
                //         navigate('/posts/post-card');
                //     })
                //     .catch((error) => console.log(error));
                const response = await ApiClient.Post.UpdatePost(postid, input);
                if (response) {
                    navigate('/posts/post-card');
                }
            }
        } else {
            const response = await ApiClient.Post.AddPost(input);
            // console.log('response: ', response);
            navigate('/posts/post-card');
        }
        // axios({
        //     method: 'post',
        //     url: `${baseURLPost}`,
        //     headers: { Authorization: `Bearer ${token}` },
        //     data: input
        // })
        //     .then((res) => {
        //         console.log('update', res.data);
        //         navigate('/posts/post-card');
        //     })
        //     .catch((error) => console.log(error));
    };

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                {/* <form {...others}> */}
                <Grid container spacing={matchDownSM ? 0 : 2}>
                    <Grid item xs={12} sm={12}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            name="userId"
                            value={input.userId}
                            // disableClearable
                            options={dropoption.map((e) => e.id)}
                            onChange={InputValue}
                            // sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} name="user_id" label="UserID" />}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            fullWidth
                            label="title"
                            value={input.title}
                            margin="normal"
                            name="title"
                            type="text"
                            onChange={InputValue}
                            sx={{ ...theme.typography.customInput }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            fullWidth
                            label="body"
                            margin="normal"
                            name="body"
                            value={input.body}
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
                            onClick={SubmitPost}
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
export default PostForm;
