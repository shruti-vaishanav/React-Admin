// import { useNavigate } from 'react-router';
// import { GetStorage } from 'utils/localstorage';
// import { baseURL } from 'Constant/Common';
import { apiInstance } from '../httpClient';
async function GetUserCall() {
    try {
        const response = await apiInstance.get(`/users`);
        if (response) return response;
    } catch (error) {
        console.log(error);
    }
}

async function GetUserById(userid) {
    try {
        const response = await apiInstance.get(`/users/${userid}`);
        if (response) return response;
    } catch (error) {
        console.log(error);
    }
}

async function UpdateUSerCall(id, inputData) {
    try {
        const response = await apiInstance.put(`/users/${id}`, inputData);
        if (response) return response;
    } catch (error) {
        console.log(error);
    }
    console.log('response: ', response);
}

async function AddUserCall(inputData) {
    console.log('inputData: ', inputData);
    try {
        const response = await apiInstance.post(`/users`, inputData);
        if (response) return response;
    } catch (error) {
        console.log(error);
    }
}

async function SearchUser(searchvalue) {
    try {
        const response = await apiInstance.get(`/users/search`, {
            params: {
                q: searchvalue
            }
        });
        if (response) return response;
    } catch (error) {
        console.log(error);
    }
}

async function Delete(deletid) {
    try {
        const response = await apiInstance.delete(`/users${deletid}`);
        if (response) return response;
    } catch (error) {
        console.log(error);
    }
}
export default {
    GetUserCall,
    UpdateUSerCall,
    AddUserCall,
    GetUserById,
    Delete,
    SearchUser
};
