import React from 'react';
import { Link } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
const Header = () => {
    const { currency, setCurrency, symbol } = CryptoState();
    console.log(currency);
    let INR = "INR";
    // let USD = "USD";
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand text-uppercase text-warning me-5" to="/"><strong>  Arabaj</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 mx-auto me-5">

                            <li className="nav-item dropdown" >

                                <select id="currency" className='bg-dark text-white' value={currency} onChange={(e) => setCurrency(e.target.value)} >
                                    <option value={INR}>INR</option>
                                    {/* <option value={USD}>USD</option> */}
                                </select>
                            </li>
                            {/* <button>Login</button> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header;
