import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

function CheckoutCart() {

    const { formatPrice } = useContext(CurrencyContext);
    return (
        <>
            <h2>Checkout Cart</h2>
            <p>Subtotal: {formatPrice(150)}</p>
        </>
    );
}

export default CheckoutCart;