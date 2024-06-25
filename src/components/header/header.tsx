import React from "react";
import { Logo } from "./logo/logo";
import { Link, useLocation } from "react-router-dom";

export const Header=()=>{

    const location=useLocation()
    
    return(
        <header className="flex justify-between items-center border-t border-black border-b">
            <div>
                <Logo/>
            </div>
            <div className="flex">
                <span className="mr-20"  style={{cursor: 'pointer'}}>
                    <Link to='/selfCalculation' className={location.pathname==='/selfCalculation' || location.pathname==='/' ? 'font-bold' : ''}>
                        Калькулятор приемов пищи
                    </Link>
                    
                </span>
                <span style={{cursor: 'pointer'}}>
                    <Link to='/foodCalculation' className={location.pathname==='/foodCalculation' ? 'font-bold' : ''}>
                    Калькулятор нормы калорий
                    </Link>
                </span>
            </div>
            <div className="w-[225px]"></div>
            
        </header>
    )
}