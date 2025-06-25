import { useParams } from "react-router-dom"

export const User = () =>{
    const {id} = useParams();
    return(
        <div>
            <h2>Perfil de Usuário</h2>
            <p>Id do usuário: {id}</p>
        </div>
    )
}