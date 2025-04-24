import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FadingLoader from '../FadingLoader';
// import './CoinsTable.css'; // create a CSS file for custom styles if needed

function CoinsTable() {
  const [cryptoData, setCryptoData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h,24h,7d')
      .then(res => {
        setCryptoData(res.data); 
        setIsLoading(true);
      })
      .catch(err => console.log(err));
  }, []);

  if (!isLoading) return <FadingLoader />;

  return (
    <div className="container">
      <h1 className='text-center'>Cryptocurrency Prices by Market Cap</h1>

      <input
        className='p-2 bg-dark text-white form-control'
        type="search"
        placeholder='Search For a Crypto Currency..'
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className='table table-bordered text-center text-dark mt-3'>
        <thead>
          <tr className='bg-warning' style={{ height: "50px", cursor: "pointer" }}>
            <th><strong className='text-start'>Coin</strong></th>
            <th><strong>Price</strong></th>
            <th><strong>24h Change</strong></th>
            <th><strong>Market Cap</strong></th>
            <th><strong>1h %</strong></th>
            <th><strong>7d %</strong></th>
            <th><strong>Volume(24h)</strong></th>
            <th><strong>Circulating Supply</strong></th>
            <th><strong>Last 7 Days</strong></th>
          </tr>
        </thead>
        <tbody>
          {
            cryptoData
              .filter(data =>
                data.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((data, index) => (
                <tr className='text-white' style={{ height: "80px" }} key={index}>
                  <td className='text-start'>
                    <img src={data.image} alt="" style={{ height: "60px" }} />
                    <strong>&nbsp;&nbsp;{data.name}</strong>
                  </td>

                  <td>
                    ₹{data.current_price.toFixed(2)}
                  </td>

                  <td className={data.price_change_percentage_24h < 0 ? "text-danger" : "text-success"}>
                    <b>
                      {data.price_change_percentage_24h < 0 ? (
                        <i className="fa-solid fa-caret-down"></i>
                      ) : (
                        <i className="fa-solid fa-caret-up"></i>
                      )}
                      &nbsp;{data.price_change_percentage_24h.toFixed(2)}%
                    </b>
                  </td>

                  <td>
                    {
                      Math.abs(data.market_cap) >= 1.0e+9
                        ? (data.market_cap / 1.0e+9).toFixed(2) + "B"
                        : Math.abs(data.market_cap) >= 1.0e+6
                          ? (data.market_cap / 1.0e+6).toFixed(2) + "M"
                          : Math.abs(data.market_cap) >= 1.0e+3
                            ? (data.market_cap / 1.0e+3).toFixed(2) + "K"
                            : data.market_cap
                    }
                  </td>

                  <td className={data.price_change_percentage_1h_in_currency < 0 ? "text-danger" : "text-success"}>
                    {data.price_change_percentage_1h_in_currency?.toFixed(2)}%
                  </td>

                  <td className={data.price_change_percentage_7d_in_currency < 0 ? "text-danger" : "text-success"}>
                    {data.price_change_percentage_7d_in_currency?.toFixed(2)}%
                  </td>

                  <td>
                    {
                      Math.abs(data.total_volume) >= 1.0e+9
                        ? (data.total_volume / 1.0e+9).toFixed(2) + "B"
                        : Math.abs(data.total_volume) >= 1.0e+6
                          ? (data.total_volume / 1.0e+6).toFixed(2) + "M"
                          : Math.abs(data.total_volume) >= 1.0e+3
                            ? (data.total_volume / 1.0e+3).toFixed(2) + "K"
                            : data.total_volume
                    }
                  </td>

                  <td>{data.circulating_supply.toLocaleString()}</td>

                  <td>
                    <img src={data.sparkline_in_7d.price.length ? `https://quickchart.io/chart?c={type:'sparkline',data:{datasets:[{data:[${data.sparkline_in_7d.price.join(',')}] }]}}` : ""} alt="chart" style={{ height: "40px" }} />
                  </td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default CoinsTable;
