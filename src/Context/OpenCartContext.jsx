import { useState } from "react";
import { createContext } from "react";

export const OpenCartContext = createContext()

export const OpenCartContextProvider = ({children})=>{
    const [openCart,setOpenCart] = useState(false);
    return (
        <OpenCartContext.Provider value={{openCart,setOpenCart}}>
            {children}
        </OpenCartContext.Provider>
    )
}