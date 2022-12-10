import React from 'react';

const TableRow = ({item, selected, setSelected}) => {
    const {id, first_name, last_name, email, gender, ip_address, airport_code, time, status, mobile, area, show, edit} = item;
    let active = "";
    if(selected.id === item.id){
        active="active";
    }
    return (
        <tr className={`hover ${active}`} onClick={()=>setSelected(item)}>
            <td>{id}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
            <td>{gender}</td>
            <td>{ip_address}</td>
            <td>{airport_code}</td>
            <td>{time}</td>
            <td>
                {status ? <span className='text-green-600'>TRUE</span>: <span className='text-red-600'>FALSE</span> }
            </td>
            <td>{mobile}</td>
            <td>{area}</td>
            <td>{show ? <span className='text-green-600'>TRUE</span>: <span className='text-red-600'>FALSE</span> }</td>
            <td>{edit ? <span className='text-green-600'>TRUE</span>: <span className='text-red-600'>FALSE</span> }</td>
        </tr>
    );
};

export default TableRow;