import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
        
export const Footer = () =>{    
    return(
        <>
        <footer className='p-d-flex p-jc-center p-ai-center p-bg-blueviolet p-c-white' style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center', backgroundColor:'blueviolet', color:'white'}}>            
            <div className='p-mb-3' style={{textAlign:'center', maxWidth:'600px'}}/>            
                <div>                    
                    <p>Obrigado por visitar nosso site. Sinta-se à vontade para navegar pelas páginas acima e deixar seu comentário no formulário.</p>
                    <Button
                        label="Voltar ao topo" 
                        icon="pi pi-arrow-up" 
                        className="p-button-text p-button-sm"
                        onClick={() => window.scrollTo({top:0, behavior:'smooth'})}
                    />
                <Divider/>    
                &copy; 2025 Daniel Dantas 
            </div>
        </footer>
        </>
    );
}