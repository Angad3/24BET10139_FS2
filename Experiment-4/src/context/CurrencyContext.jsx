import { createContext, useState } from "react";

export const CurrencyContext = createContext();

const EXCHANGE_RATES = {
  USD: { rate: 1.0, symbol: "$" },
  EUR: { rate: 0.85, symbol: "€" },
  GBP: { rate: 0.75, symbol: "£" },
  JPY: { rate: 110.0, symbol: "¥" }
};

export function CurrencyProvider({ children }) {
    const [currency, setcurrency] = useState("USD")
    const changeCurrency = (currencyCode) => {
        setcurrency(currencyCode);
    };

    const formatPrice = (amount) => {
        if(EXCHANGE_RATES[currency]) {
        const rate = EXCHANGE_RATES[currency].rate;
        const symbol = EXCHANGE_RATES[currency].symbol;
        return symbol + (amount * rate).toFixed(2);
    }
        return amount.toFixed(2) + " " + currency;
    };

    return (
    <CurrencyContext.Provider value={{ currency, changeCurrency, formatPrice }} >
        {children}
    </CurrencyContext.Provider>
    )
}