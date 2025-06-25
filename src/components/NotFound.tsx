import { Link } from "react-router-dom"

export const NotFound =()=>{
    return(
        <div className="p-d-flex p-jc-center p-ai-center p-mt-0" style={{textAlign:'center'}}>
            <h1>404: Página não encontrada!</h1>
            <p>Ops! Essa página não existe.</p>
            <Link to={"/"}>Voltar para a página principal</Link>
        </div>
    )
}