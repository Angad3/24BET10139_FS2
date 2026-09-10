import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

function StoreHeader() {
    const { currency, changeCurrency } = useContext(CurrencyContext);
    return (
        <>
            <button onClick={() => changeCurrency("USD")}>USD</button>
            <button onClick={() => changeCurrency("EUR")}>EUR</button>
            <button onClick={() => changeCurrency("GBP")}>GBP</button>
            <button onClick={() => changeCurrency("JPY")}>JPY</button>
            <p>Current Currency: {currency}</p>
        </>
    );
}

export default StoreHeader;
