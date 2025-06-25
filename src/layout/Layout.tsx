import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import './index.css';

export const Layout = ({children}:any) =>{
    return(
        <div className="layout-wrapper">
            <Header/>
            <main className="layout-main">{children}</main>
            <Footer/>
        </div>
    )
} 