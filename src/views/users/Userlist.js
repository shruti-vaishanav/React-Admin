/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// /* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import axios from 'axios';
// import { token } from 'Constant/Common';
import { Table, TableBody } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import TableData from './UserTable';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ApiClient from 'Actions';
import SearchSection from 'layout/MainLayout/Header/SearchSection';
// import CookieBanner from 'cookie_session/CookieBanner';
// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9)
// ];


export default function BasicTable() {
    const [user, setUser] = useState([])
    // const [inputState, setInputState] = useState([]);
    const location = useLocation()
    const navigate = useNavigate()
    const addrow = () => {
        navigate('/users/user-Form')
    }

    // const GetCall = async () => {
    //     axios({
    //         method: 'get',
    //         url: baseURL,
    //         headers: { Authorization: `Barear ${await GetStorage('SignIN_Token')}` }
    //     })
    //         .then(async (res) => {
    //             setStorage('userlist', JSON.stringify(res.data))
    //             setUser((await JSON.parse(GetStorage('userlist'))))
    //         })

    //         .catch((error) => console.log(error))
    // }
    // console.log(user);   
    //initial get call

    const GetUser = async () => {
        const response = await ApiClient.User.GetUserCall()
        if (response) {
            setUser(response.data)
        } else { console.log('not found'); }
        // console.log(response.data.users);
    }
    useEffect(() => {
        GetUser();
    }, [])
    console.log(user);
    return (
        <>
            <Typography align="right" mb={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <SearchSection />
                <Button variant="contained" onClick={addrow}>
                    add
                </Button>
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead style={{ backgroundColor: 'lightgray' }}>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            {/* <TableCell>Gender</TableCell> */}
                            {/* <TableCell>status</TableCell> */}
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user ? (
                            <>
                                {user.map((row, index) =>
                                    <>
                                        <TableData
                                            index={index}
                                            id={row.id}
                                            // image={row.image}
                                            firstname={row.name.firstname}
                                            lastname={row.name.lastname}
                                            email={row.email}
                                            // gender={row.gender}
                                            // status={row.status}
                                            // update={FillDataOnUpdate}
                                            data={row}
                                        />
                                    </>
                                )}
                            </>
                        ) : (
                            null
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
