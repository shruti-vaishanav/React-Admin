/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { productdetaildata } from '../Constant/TableData';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

function CookieBanner() {
    // const [open, setOpen] = useState(true);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // const setCookie = (product, productdetaildata) => {
    //     let cookieValue = '';
    //     let expire = '';
    //     let period = '';

    //     //Specify the cookie name and value
    //     cookieValue = product + '=' + JSON.stringify(productdetaildata) + ';';

    //     //Specify the path to set the cookie
    //     cookieValue += 'path=/product/product-list ;';

    //     //Specify how long you want to keep cookie
    //     period = 30; //days to store
    //     expire = new Date();
    //     expire.setTime(expire.getTime() + 1000 * 3600 * 24 * period);
    //     expire.toUTCString();
    //     cookieValue += 'expires=' + expire + ';';

    //     //Set cookie
    //     document.cookie = cookieValue;
    // };
    // setCookie('product', productdetaildata);
    // //Example: set a cookie that expires one year from now
    // const getCookie = () => {
    //     let cookieValue = '';
    //     let cookieArray = new Array();
    //     let result = new Array();

    //     //Get cookie
    //     console.log(document.cookie);
    //     cookieValue = document.cookie;

    //     //Divide the cookie into an array and convert them to JSON
    //     if (cookieValue) {
    //         cookieArray = cookieValue.split(';');

    //         cookieArray.forEach((data) => {
    //             data = data.split('=');

    //             //data[0]: Cookie name
    //             //data[1]: Cookie value

    //             result[data[0]] = JSON.parse(data[1]);
    //         });
    //     }
    //     return result;
    // };
    // getCookie();

    function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + JSON.stringify(cValue) + "; " + expires + "path=/product/product-list ;";

    }
    // Apply setCookie document.cookie
    setCookie('productnam', productdetaildata, 1)
    // console.log(document.cookie);

    //get cookie
    function getCookie(cName) {
        const cArr = document.cookie.split('; ');
        for (var i = 0; i < cArr.length; i++) {
            // console.log('cArr.length: ', cArr.length);
            var c = cArr[i];
            var cookiePair = c.split("=");
            // console.log('cookiePair: ', cookiePair);
            if (cookiePair[0] === cName) {
                return cookiePair[1];       // Return the cookie value
            }
        }
        // if (c.indexOf(name) == 0)
        //     return JSON.parse(c.substring(name.length, c.length));
        return null;
    }

    var myArrayCookieValue = getCookie("productnam");
    // Parse the cookie value as JSON if it exists
    if (myArrayCookieValue) {
        var productnam = JSON.parse(myArrayCookieValue);
        // console.log('productname: ', productname);
        // Access the array of objects and perform further operations as needed
    } else {
        console.log("Cookie not found."); // Handle case where cookie is not found
    }

    //deletcookie

    // function deleteCookie(cName, expDays) {
    //     let deletdate = new Date();
    //     deletdate.setTime(deletdate.getTime() + (expDays * 24 * 60 * 60 * 1000));
    //     const deletexpiredate = "expires=" + deletdate.toUTCString();
    //     document.cookie = cName + "= ;" + deletexpiredate + "path=/product/product-list ;";
    // }
    // deleteCookie('productname', 1);
    return (
        <>
            {/* <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open alert dialog
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            This website uses cookies or similar technologies, to enhance your browsing experience and provide personalized
                            recommendations. By continuing to use our website, you agree to our
                            <a style={{ color: '#115cfa' }} href="/privacy-policy">
                                Privacy Policy
                            </a>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={handleClose}>
                            Accept
                        </Button>
                    </DialogActions>
                </Dialog>
            </div> */}
        </>
    );
}

export default CookieBanner;
