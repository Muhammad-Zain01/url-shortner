import { UserContext } from "../context/user.context";
import { useContext } from "react";
export const useUser = () => useContext(UserContext);