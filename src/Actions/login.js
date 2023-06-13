// import { useNavigate } from 'react-router';
import { GetStorage } from 'utils/localstorage';
import { baseURL } from 'Constant/Common';
import { apiInstance } from 'httpClient';

async function PostLogin(formdata) {
    try {
        const response = await apiInstance.post(`/auth/login`, formdata, {
            // data: formdata
            // headers: { Authorization: `Barear ${GetStorage('SignIN_Token')}` }
        });
        if (response) return response;
    } catch (error) {
        console.error(error);
    }
}
export default {
    PostLogin
};
