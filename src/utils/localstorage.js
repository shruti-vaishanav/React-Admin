import React from 'react';
// import { token } from 'Constant/Common';

const setStorage = (key, value) => {
    localStorage.setItem(key, value);
};
const GetStorage = (key) => {
    // const response = await localStorage.getItem(key);
    // return JSON.parse(response);
    return localStorage.getItem(key);
};
const RemoveStorage = (key) => {
    return localStorage.removeItem(key);
};
export { setStorage, GetStorage, RemoveStorage };
