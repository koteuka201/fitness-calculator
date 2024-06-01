import React from "react";
import { Logo } from "./logo/logo";

export const Header=()=>{
    return(
        <header className="flex justify-between items-center border-t border-black border-b">
            <div>
                <Logo/>
            </div>
            <div className="flex">
                <span className="mr-20">
                    Калькулятор приемов пищи
                </span>
                <span className="">
                    Рассчет норма калорий
                </span>
            </div>
            <div className="w-[225px]"></div>
            
        </header>
    )
}