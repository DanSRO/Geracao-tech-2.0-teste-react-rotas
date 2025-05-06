import { Button } from "primereact/button"
import { Card } from "primereact/card"

export const Home = () =>{
    return(
        <div className="p-d-flex p-jc-center p-ai-center p-mt-5" style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Card title="Bem-vindo!" subTitle="Página principal" className="p-shadow-5" style={{width:'50vw', textAlign:'center'}}>
                <p>Explore nosso site. Utilize o menu acima para acessar o formulário ou para entrar em contato.</p>
                <Button 
                    label="Enviar Feedback" 
                    icon="pi pi-comments" 
                    className="p-button-success p-mt-3"
                    onClick={() => window.location.href='/formulary'}
                />
            </Card>
        </div>
    )
}