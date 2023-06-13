/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { baseURLPost, token, baseURL } from 'Constant/Common';
import axios from 'axios';
import { Button, Typography } from '@mui/material';
// import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';
import PostCard from './postcard/card';
import { useNavigate } from 'react-router-dom';
// import { GetStorage } from 'utils/localstorage';
import ApiClient from 'Actions';

function PostList() {
    const [post, setPost] = useState([]);
    const navigate = useNavigate();

    const addrow = () => {
        navigate('/posts/post-add');
    };

    // const GetCall = () => {
    //     axios({
    //         method: 'get',
    //         url: baseURLPost,
    //         headers: { Authorization: `Barear ${GetStorage('SignIN_Token')}` }
    //     })
    //         .then((res) => {
    //             setPost(res.data);
    //         })
    //         .catch((error) => console.log(error));
    // };
    //initial get call

    const PostCall = async () => {
        const response = await ApiClient.Post.GetPost();
        if (response) {
            setPost(response.data.posts);
        }
    };
    useEffect(() => {
        // GetCall();
        PostCall();
    }, []);

    return (
        <>
            <Typography align="right" mb={6}>
                <Button variant="contained" onClick={addrow}>
                    add
                </Button>
            </Typography>
            <Grid container spacing={3}>
                {post ? (
                    <>
                        {post.map((detail, index) => (
                            <>
                                <PostCard index={index} title={detail.title} body={detail.body} data={detail} userid={detail.userId} />
                            </>
                        ))}
                    </>
                ) : null}
            </Grid>
        </>
    );
}

export default PostList;
