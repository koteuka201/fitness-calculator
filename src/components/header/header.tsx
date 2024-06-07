import React from "react";
import { Logo } from "./logo/logo";
import { Link } from "react-router-dom";

export const Header=()=>{
    return(
        <header className="flex justify-between items-center border-t border-black border-b">
            <div>
                <Logo/>
            </div>
            <div className="flex">
                <span className="mr-20"  style={{cursor: 'pointer'}}>
                    <Link to='/selfCalculation'>
                        Калькулятор приемов пищи
                    </Link>
                    
                </span>
                <span style={{cursor: 'pointer'}}>
                    <Link to='/foodCalculation'>
                    Калькулятор нормы калорий
                    </Link>
                </span>
            </div>
            <div className="w-[225px]"></div>
            
        </header>
    )
}