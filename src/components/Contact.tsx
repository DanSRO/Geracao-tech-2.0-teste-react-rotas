import { Card } from "primereact/card"
import { Divider } from "primereact/divider"

function Contact () {
    return(
        <div className="p-d-flex p-jc-center p-ai-center p-mt-5" style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
            <Card title="Contato" subTitle="Fale conosco" style={{width:'50vw'}}>
                <p><strong>Email: </strong>contato@empresa.com</p>
                <p><strong>Telefone: </strong>(85) 99999-9999</p>
                <Divider />
                <p>Estamos à disposição para tirar dúvidas, receber sugestões ou críticas construtivas.</p>
            </Card>
        </div>
    )
}

export default Contact;