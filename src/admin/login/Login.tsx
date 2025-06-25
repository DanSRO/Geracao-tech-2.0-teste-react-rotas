import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { useState } from "react";

export const Login = () => {
    const [senha, setSenha] = useState('');
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    return(
        <div className="login-container">
            <h2 className="login-title">Acesso ao sistema</h2>
            <label htmlFor="usuario">Usuário: </label>
            <InputText id="usuario" className="p-inputtext-sm"/>

            <label htmlFor="senha">Senha: </label>
            <Password 
                id="senha" 
                value={senha} 
                onChange={(e)=>setSenha(e.target.value)}
                feedback={false} toggleMask className="p-inputtext-sm"
            />

            <Button label="Entrar" icon="pi pi-sign-in" className="p-button-sm"
                style={{marginTop:'1.5rem', width:'100%'}}
            />
        </div>
    )
}