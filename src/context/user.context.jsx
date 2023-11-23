import { createContext } from "react";
import { useReducer } from "react";

const INITIAL_STATE = {
    username: "",
    email: "",
    displayName: "",
    email: "",
    password: "",
}
const DEFAULT_VALUES = {
    ...INITIAL_STATE,
    setUser: () => { }
}
export const UserContext = createContext(DEFAULT_VALUES);
const UserReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }
}
export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE)
    const setUser = (data) => dispatch({ type: "SET_USER", payload: data })
    const value = { state, setUser };
    return (
        <UserContext.Provider value={value} >
            {children}
        </UserContext.Provider>
    )
}