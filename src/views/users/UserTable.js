/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { Popover } from '@mui/material';
import { MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router';
// import { keys } from '@mui/system';
import CookieBanner from 'cookie_session/CookieBanner';
import Chip from '@mui/material/Chip';
import ApiClient from 'Actions';

function TableData(props) {
    const [open, setOpen] = useState();
    const navigate = useNavigate();
    const handleOpenMenu = (event) => {
        setOpen(event.currentTarget);
    };

    const deletid = props.id;
    const handleCloseMenu = () => {
        setOpen(null);
    };
    const delet = async () => {
        const response = await ApiClient.User.Delete(deletid);
        // console.log('==delet==', response);
    };

    return (
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                    {props.id}
                </TableCell>
                {/* <TableCell>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <img src={props.image} alt="userimage" width={50} />
                        {props.firstName} {props.lastName}
                    </div>
                </TableCell> */}
                <TableCell>
                    {props.firstname} {props.lastname}
                </TableCell>
                <TableCell>{props.email}</TableCell>
                {/* <TableCell>{props.gender}</TableCell> */}
                {/* <TableCell>
                    <Chip label={props.status} color="default" />
                </TableCell> */}
                <TableCell align="right">
                    <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                        <MoreVertIcon />
                    </IconButton>
                </TableCell>
                <Popover
                    open={Boolean(open)}
                    anchorEl={open}
                    onClose={handleCloseMenu}
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    PaperProps={{
                        sx: {
                            p: 1,
                            width: 140,
                            '& .MuiMenuItem-root': {
                                px: 1,
                                typography: 'body2',
                                borderRadius: 0.75
                            }
                        }
                    }}
                >
                    <MenuItem onClick={() => navigate('/users/user-Form', { state: props.data })}>
                        <EditIcon sx={{ mr: 2, color: 'blueviolet' }} />
                        update
                    </MenuItem>
                    <MenuItem sx={{ color: '' }} onClick={delet}>
                        <DeleteIcon sx={{ mr: 2, color: 'red' }} />
                        Delete
                    </MenuItem>
                </Popover>
            </TableRow>
            <CookieBanner />
        </>
    );
}

// eslint-disable-next-line prettier/prettier
export default TableData;