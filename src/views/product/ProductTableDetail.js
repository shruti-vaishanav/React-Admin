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
import VisibilityIcon from '@mui/icons-material/Visibility';
// import { keys } from '@mui/system';

function ProductTableDetail(props) {
    const [open, setOpen] = useState();
    const navigate = useNavigate();
    const handleOpenMenu = (event) => {
        setOpen(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setOpen(null);
    };
    // console.log(props.detail);
    return (
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                    {props.id}
                </TableCell>
                <TableCell style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <img src={props.image} alt="c" width={50} height={50} />
                    {props.title}
                </TableCell>
                {/* <TableCell>{props.Createddate}</TableCell> */}
                <TableCell>{props.category}</TableCell>
                <TableCell>{props.price}</TableCell>
                <TableCell>{props.stock}</TableCell>
                <TableCell align="left">
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
                    <MenuItem onClick={() => navigate('/product/product-detail', { state: props.data })}>
                        <VisibilityIcon sx={{ mr: 2, color: 'black' }} />
                        view
                    </MenuItem>
                    <MenuItem sx={{ color: '' }} onClick={() => navigate('/product/product-add', { state: props.data })}>
                        <EditIcon sx={{ mr: 2, color: 'blueviolet' }} />
                        Edit
                    </MenuItem>
                    <MenuItem sx={{ color: '' }} onClick={props.deletrow}>
                        <DeleteIcon sx={{ mr: 2, color: 'red' }} />
                        Delete
                    </MenuItem>
                </Popover>
            </TableRow>
        </>
    );
}

export default ProductTableDetail;
