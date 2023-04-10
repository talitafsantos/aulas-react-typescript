import { useCallback, useState } from "react";

export const Dashboard = () => {

    interface IListItem {
        title: string;
        isSelected: boolean;
    }

    const [lista, setLista] = useState<IListItem[]>([]);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback ((e) => {
        if (e.key === "Enter") {
            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            e.currentTarget.value = "";

            setLista((oldLista) => {
                if (oldLista.some((ListItem) => ListItem.title === value)) return oldLista;

                return [...oldLista,
                    {
                        title: value,
                        isSelected: false
                    }
                ];
            });
        }

    },[]);

    return (
        <div>
            <p>Lista</p>

            <input onKeyDown={handleInputKeyDown}/>

            <p>{lista.filter((listItem) => listItem.isSelected).length}</p>

            <ul>
                {lista.map((listItem)=> {
                    return <li key={listItem.title}>
                        < input type="checkbox"
                        checked={listItem.isSelected}
                        onChange={() => {
                            setLista(oldLista => {
                                return oldLista.map(oldListItem => {
                                    const newIsSelected = oldListItem.title === listItem.title
                                    ? !oldListItem.isSelected
                                    :oldListItem.isSelected;

                                    return {
                                        ...oldListItem,
                                        isSelected: newIsSelected
                                    };
                                });
                            });
                        }}
                        />
                        {listItem.title}</li>
                })}
            </ul>

        </div>
    )
}