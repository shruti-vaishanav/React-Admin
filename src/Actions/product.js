import axios from 'axios';
// import { useNavigate } from 'react-router';
// import { GetStorage } from 'utils/localstorage';
import { baseURL } from 'Constant/Common';
import { apiInstance } from '../httpClient';

async function GetProduct(formdata) {
    try {
        const response = await apiInstance.get(`/products`, formdata);
        if (response) return response;
    } catch (error) {
        console.error(error);
    }
}
async function GetById(id, detaildata) {
    try {
        const response = await apiInstance.get(`/products/${id}`, detaildata);
        if (response) return response;
    } catch (error) {
        console.error(error);
    }
}
async function UpdateById(productid, product_data) {
    try {
        const response = await apiInstance.put(`/products/${productid}`, product_data);
        if (response) return response;
    } catch (error) {
        console.log(error);
    }
}
async function Add(product_data) {
    try {
        const response = await apiInstance.post(`/products`, product_data);
        if (response) return response;
    } catch (error) {
        console.log(error);
    }
}

export default {
    GetProduct,
    UpdateById,
    Add,
    GetById
};
