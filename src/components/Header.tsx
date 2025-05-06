import { useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';        
import { useState } from "react";
        
export const Header = () =>{

    const[activeIndex, setActiveIndex] = useState(0);

    const navigate = useNavigate();
    const items = [
        {
            label:"Home", icon:"pi pi-home", command:()=>{setActiveIndex(1);navigate("/")},
            className: activeIndex === 1 ? 'active' : ''
        },
        {
            label:"Formulário", icon:"pi pi-file", command:()=>{setActiveIndex(2);navigate("/formulary")},
            className: activeIndex === 2? 'active' : ''
        },
        {
            label:"Contato", icon:"pi pi-envelope", command:()=>{setActiveIndex(3);navigate("/contact")},
            className: activeIndex === 3 ? 'active' : ''
        },
    ]
    return(
        <>
        <style>
            {`
                .custom-menubar .p-menuitem-text,
                .custom-menubar .pi{
                    color: white !important;
                }            
                .custom-menubar .p-menuitem:hover .p-menuitem-text,
                .custom-menubar .p-menuitem:hover .pi{
                    color: black !important;
                }            
                .custom-menubar .p-menuitem.active .p-menuitem-text,
                .custom-menubar .p-menuitem.active .pi{
                    color: black !important;
                }            
            `}
        </style>
        <Menubar model={items} className="custom-menubar" style={{display:"flex", justifyContent:"flex-end", alignItems:"center", backgroundColor:"blueviolet"}}/>
        </>
    );
} 