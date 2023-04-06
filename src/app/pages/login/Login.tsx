import { useCallback, useContext, useMemo, useRef, useState } from "react"
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { UsuarioLogadoContext } from "../../shared/contexts";


export const Login = () => {
    
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const { nomeUsuario } = useContext(UsuarioLogadoContext);
    
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
            <p>{nomeUsuario}</p>

            <InputLogin
                label="Email"
                value={email}
                onChange={newValue => setEmail(newValue)}
                onPressEnter={() => inputPasswordRef.current?.focus()}
            />

            <InputLogin
                type="password"
                label="Senha"
                value={senha}
                ref={inputPasswordRef}
                onChange={newValue => setSenha(newValue)}
            />
                {/* <button type="button" onClick={handleEntrar}>Entrar</button> */}

                <ButtonLogin type="button" onClick={handleEntrar}>Entrar</ButtonLogin>
        </form>
    </div>
    )
}