import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { GetStorage } from 'utils/localstorage';

// project imports
// eslint-disable-next-line no-unused-vars
import Customization from '../Customization';

// ==============================|| MINIMAL LAYOUT ||============================== //

function MinimalLayout() {
    const navigate = useNavigate();
    const istoken = GetStorage('SignIN_Token');
    console.log('istoken: ', istoken);
    useEffect(() => {
        if (istoken) {
            navigate('/dashboard/default');
        } else {
            navigate('/login');
        }
    }, []);
    return (
        <>
            <Outlet />
            <Customization />
        </>
    );
}

export default MinimalLayout;
