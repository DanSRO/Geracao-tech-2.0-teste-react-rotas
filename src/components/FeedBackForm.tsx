import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputTextarea } from 'primereact/inputtextarea';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import { useState } from 'react';

function FeedBackForm (){

    const[value, setValue] = useState('');
    const[email, setEmail] = useState('');
    const[area, setArea] = useState('');

    const[botao, setBotao] = useState(false);
    
    // const formRef = useRef<HTMLFormElement>(null);

    const mudouOInput = (e:any) =>{
        e.preventDefault();
        if(e.target.id === "nome"){
            setValue(e.target.value);
        }else if(e.target.id === "email"){
            setEmail(e.target.value);
        }else if(e.target.id === "area"){
            setArea(e.target.value)
        }
    }

    const envioBtn = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        if(value.trim() && email.trim()){
            console.log("nome", value);
            console.log("email", email);
            console.log('Formulário enviado!');
            setBotao(true);
            alert(`Nome: ${value}, Email: ${email}, Comentário: ${area}`);
            // formRef.current?.reset();
            setValue("");
            setEmail("");
            setArea("");
            setTimeout(() =>{
                setBotao(false);
            }, 2000);
        }else{
            alert("Preencha todos os campos.");
        }
    }
    return(        
        <div className="p-d-flex p-jc-center p-ai-center p-mt-5" style={{ backgroundColor: "#f4f4f4", padding: "20px", borderRadius: "10px" }}>            
            <Card className="p-shadow-4 p-p-4 p-jc-center p-gap-3" title="Formulário de comentários" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div className="p-field" style={{marginBottom:"10px"}}>
                    <label htmlFor="nome">Nome:  </label>
                    <InputText id="nome" value={value} onChange={mudouOInput} className="p-inputtext-lg p-mb-3" required />
                </div>
      
                <div className="p-field" style={{marginBottom:"10px"}}>
                    <label htmlFor="email">Email:    </label>
                    <InputText id="email" type="email" value={email} onChange={mudouOInput} className="p-inputtext-lg p-mb-3" required />
                </div>
                
                    <label htmlFor="area">Comentários: </label>
                <div className="p-field">
                    <InputTextarea id="area" value={area} placeholder="Escreva seu comentário aqui..." className="p-inputtextarea-lg p-mb-3" onChange={mudouOInput} required />
                </div>
                <div className="p-d-flex p-jc-end">                    
                    <Button label={botao ? "Enviado" : "Enviar"} icon="pi pi-check"  severity = {botao ? 'warning': 'success'} onClick={envioBtn}/>    
                </div>
            </Card>            
        </div>
    )
}
export default FeedBackForm;