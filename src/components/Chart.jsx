import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

const Charts = () => {
    const [change24, setChange24] = useState({});
    let { id } = useParams();
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/' + id).then(((res) => {
            setChange24(res.data);
            console.log(res.data);
        })((err) => {
            console.log(err.data);

        }))
    }, [id]);


    const pdata = [
        {
            year: "2014",
            price: 1300000,
            fees: 10,
        },
        {
            year: "2015",
            price: 100000,
            fees: 10,
        },
        {
            year: "2016",
            price: 1400000,
            fees: 10,
        },
        {
            year: "2017",
            price: 2200000,
            fees: 10,
        },
        {
            year: "2018",
            price: 1350000,
            fees: 10,
        },
    ]
if (change24.image === undefined){

    return <>

    Loading...

    </>
}
else{
    return (
        <div>
           
            <img src={change24.image.large}/>
        </div>
    )
}
    
}

export default Charts;
