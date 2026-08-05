import { useContext } from "react";
import { userContext } from "../Context/UserContext";

const useUser = () => {
    return useContext("UserContext");
}

export default useUser;