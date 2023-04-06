import { createContext, useCallback, useEffect, useState } from "react";

interface UsuarioLogadoProviderProps {
    children: React.ReactNode;
}

interface IUsuarioLogadoContextData {
    nomeUsuario: string;
    logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);


export const UsuarioLogadoProvider: React.FC<UsuarioLogadoProviderProps> = ({children}) => {
    const [nome, setNome] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setNome("Talita");
        }, 1000)
    });



    const handleLogout = useCallback (() => {
        console.log("Logout executou!!")

    }, []);

    return (
        <UsuarioLogadoContext.Provider value={{nomeUsuario: nome, logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}