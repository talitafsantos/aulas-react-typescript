//import { useNavigate } from "react-router-dom"

import { useCallback, useMemo, useRef, useState } from "react"
import { InputLogin } from "./components/InputLogin";


export const Login = () => {
    // let navigate = useNavigate();

    // const handleClick = () => {
    //     navigate('/pagina-inicial');
    // }

    //const inputPasswordRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const emailLength = useMemo(() => {
        return email.length*1000;
    }, [email.length]);

    const handleEntrar = useCallback (() => {
        console.log(email);
        console.log(senha);
    }, [email, senha]);

    return (
    <div>
        <form>

            <p>Qtd de caracteres email: {emailLength}</p>

            <InputLogin
                label="Email"
                value={email}
                onChange={newValue => setEmail(newValue)}
                //onPressEnter={() => inputPasswordRef.current?.focus()}
            />

            <InputLogin
                type="password"
                label="Senha"
                value={senha}
                onChange={newValue => setSenha(newValue)}
            />

            {/* <label>
                <span>Senha</span>
                <input type="password" value={senha} onChange={e => setSenha(e.target.value)} ref={inputPasswordRef}/>
            </label> */}

                <button type="button" onClick={handleEntrar}>Entrar</button>
        </form>
    </div>
    )
}