import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';

const Table = () => {
    const [data, setData] = useState([]);
    const [titles, setTitles] = useState([]);
    const [selected, setSelected] = useState({});
    const [order, setOrder] = useState("ASC");
    useEffect(() => {
        fetch('data.json')
            .then(res=>res.json())
            .then(tableData => {
                setData(tableData);
                const title = Object.keys(tableData[0]);
                setTitles(title);
            })
    }, [])

    const sorting = (col) => {
        if(order === "ASC"){
            const sorted = [...data].sort((a,b)=>
                a[col] > b[col] ? 1 : -1
            );
            setData(sorted);
            setOrder("DSC")
        }
        if(order === "DSC"){
            const sorted = [...data].sort((a,b)=>
                a[col] < b[col] ? 1 : -1
            );
            setData(sorted);
            setOrder("ASC")
        }
    }

    return (
        <div>
            <h1 className='text-4xl font-semibold text-center my-3'>Table</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full px-2">
                    <thead>
                        <tr>
                            {
                                titles?.map((title, i) => <th onClick={()=>sorting(title)} key={i}>{title}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(item => <TableRow key={item.id} item={item} selected={selected} setSelected={setSelected}></TableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;