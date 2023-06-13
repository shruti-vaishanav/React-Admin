/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import '../../../src/App.css'
import { React, useState } from 'react';
// import { Label } from '@mui/icons-material';
import { TextField } from '@mui/material';

export default function ChooseImage() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <>
            <div>
                <div>
                    <img alt="" src={file} id="file-input" />
                </div>
                <TextField type="file" onChange={handleChange} />
            </div>
        </>
    );
}