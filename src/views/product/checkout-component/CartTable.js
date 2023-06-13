/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { setStorage, GetStorage } from 'utils/localstorage';
import { useEffect } from 'react';
// import { keys } from '@mui/system';

function CartTable(props) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (props.data.quantity) {
            setCount(props.data.quantity);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function IncrementCount() {
        const index = props.index;
        const countAdd = count + 1
        setCount(count + 1);
        const list = props.cartlist
        // if (index === 0 || index > 1) {
        list.splice(index, 1, {
            ...props.data,
            quantity: countAdd
        });
        console.log(list);
        setStorage('products', JSON.stringify(list));
        // }
        console.log("count", countAdd);
    }
    const decrementCount = () => {
        const index = props.index;
        const countAdd = count - 1
        setCount(count - 1);

        const list = props.cartlist
        // if (index === 0 || index > 1) {
        list.splice(index, 1, {
            ...props.data,
            quantity: countAdd
        });
        console.log(list);
        setStorage('products', JSON.stringify(list));
        // }
        console.log("count", countAdd);
    };

    return (
        <>
            <TableRow>
                <TableCell>{props.data.id} </TableCell>
                <TableCell style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <img src={props.data.image} alt="" width={50} />
                    {props.data.title}
                </TableCell>
                <TableCell>{props.data.price} </TableCell>
                <TableCell>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '20px' }} className="quantity">
                        <div className="counter_quantity">
                            <button className="increment" onClick={decrementCount} type="button">
                                -
                            </button>
                            {count}
                            <button className="increment" onClick={IncrementCount} type="button">
                                +
                            </button>
                        </div>
                    </div>
                </TableCell>
            </TableRow>
        </>
    );
}

// eslint-disable-next-line prettier/prettier
export default CartTable;
