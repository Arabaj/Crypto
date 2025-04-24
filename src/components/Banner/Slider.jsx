import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CryptoState } from '../../CryptoContext';
import { TrendingCoins } from '../config/Api';
import HistoriesLoader from '../HistoriesLoder';
import './Slider.css';


const Slider = () => {
    const [trending, setTrending] = useState([]);
    const { currancy } = CryptoState();
    const [isLoaded, setIsLoaded] = useState(false);


    function fetchTrendingCoins() {

        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=20&page=1&sparkline=false").then(((res) => {
            console.log(res.data);
            setTrending(res.data);
            setIsLoaded(true);
        }), ((err) => {
            console.log(err.data);
        }))

    };

    useEffect(() => {

        fetchTrendingCoins();
    }, []);


    if (isLoaded) {
        return (
            <div className='container-fluid' style={{ height: "35vh" }}>
                <div className="slider container-fluid">
                    <div className="slide-track">
                        {
                            trending.map((data) => {

                                return <div className="slide mr-3">
                                   <img src={data.image} height="100" width="100" alt="" />
                                        <h6 className='text-center text-uppercase'>{data.symbol}
                                            {
                                                data.price_change_percentage_24h < 0 ? (<p className='text-danger'><i class="fa-solid fa-caret-down"></i> {data.price_change_percentage_24h.toFixed(2)} %</p>) : (<p className='text-success'><i class="fa-sharp fa-solid fa-caret-up"></i> {data.price_change_percentage_24h.toFixed(2)} %</p>)
                                            }
                                        </h6>


                                        <p className='text-info'> <strong ><strong >Rs {data.current_price.toFixed(2)}</strong></strong></p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )

    } else {
        return <div><HistoriesLoader /></div>
    }
}

export default Slider;