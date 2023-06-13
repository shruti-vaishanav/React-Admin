/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { token, baseURL } from 'Constant/Common';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router';
import Chip from '@mui/material/Chip';
// import { GetStorage } from 'utils/localstorage';
import ApiClient from 'Actions';

function PostCard(props) {
    const navigate = useNavigate();
    const [username, setUserName] = useState([]);
    const GetUserName = async () => {
        const userid = props.userid;
        //     // axios({
        //     //     method: 'get',
        //     //     url: `${baseURL}/${props.userid}`,
        //     //     headers: { Authorization: `Barear ${GetStorage('SignIN_Token')}` }
        //     // })
        //     //     .then((res) => {
        //     //         setUserName(res.data);
        //     //     })
        //     //     .catch((error) => console.log(error));
        const response = await ApiClient.User.GetUserById(userid);
        setUserName(response.data);
        if (response) {
            // console.log('response: ', response);
        }
    };
    useEffect(() => {
        GetUserName();
    }, []);

    return (
        <>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <Card>
                    {/* <CardMedia component="img" alt="green iguana" height="140" image="/static/images/cards/contemplative-reptile.jpg" /> */}
                    <CardContent>
                        <Typography gutterBottom variant="body2" component="div" sx={{ marginBottom: '10px' }}>
                            {props.userid}
                            {username.firstName ? (
                                <Chip label={username.firstName} variant="filled" />
                            ) : (
                                <Chip label="undefined" variant="filled" />
                            )}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.body}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" onClick={() => navigate('/posts/post-add', { state: props.data })}>
                            Edit
                        </Button>
                        {/* <Button size="small" variant="contained">
                            Learn More
                        </Button> */}
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
}
export default PostCard;
