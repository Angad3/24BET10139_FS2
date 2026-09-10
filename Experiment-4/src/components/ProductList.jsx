import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

function ProductList() {

    const { formatPrice } = useContext(CurrencyContext);
    return (
        <>
            <h2>Products</h2>
            <p>Wireless Headphones</p>
            <p>{formatPrice(100)}</p>
        </>
    );
}

export default ProductList;