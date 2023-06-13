// import { useNavigate } from 'react-router';
import { GetStorage } from 'utils/localstorage';
import { baseURL } from 'Constant/Common';
import { apiInstance } from '../httpClient';

async function GetPost() {
    try {
        const response = await apiInstance.get(`/posts`);
        if (response) return response;
    } catch (error) {
        console.error(error);
    }
}
async function UpdatePost(postid, input) {
    try {
        const response = await apiInstance.put(`/posts/${postid}`, input);
        if (response) return response;
    } catch (error) {
        console.error(error);
    }
}
async function AddPost(input) {
    try {
        const response = await apiInstance.post(`/posts`, input);
        if (response) return response;
    } catch (error) {
        console.error(error);
    }
}

export default {
    GetPost,
    UpdatePost,
    AddPost
};
