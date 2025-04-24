import React, { Children, createContext, useContext, useEffect, useState } from 'react'

const Crypto = createContext();
const CryptoContext = ({ children }) => {
    const [currency, setCurrency] = useState("INR");
    const [symbol, setSymbol] = useState("₹");

    useEffect(() => {

        load();

    }, [currency]);

    function load() {
        if (currency == "INR") {
            setSymbol("₹");
        }
        else {
            setSymbol("$");
        }
    };

    return (
        <Crypto.Provider value={{ currency, symbol, setCurrency }}>
            {children}
        </Crypto.Provider>
    )
};

export default CryptoContext;

export const CryptoState = () => {
    return useContext(Crypto);
};