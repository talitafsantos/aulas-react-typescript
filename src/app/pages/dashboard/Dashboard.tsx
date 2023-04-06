import { useCallback, useState } from "react";

export const Dashboard = () => {

    const [lista, setLista] = useState<string[]>(["Teste 1", "Teste 2", "Teste 3"]);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback ((e) => {

    },[]);

    return (
        <div>
            <p>Lista</p>

            <input
                onKeyDown={handleInputKeyDown}
            />
            <ul>
                {lista.map((value, index)=> {
                    return <li>{value}</li>
                })}
            </ul>

        </div>
    )
}