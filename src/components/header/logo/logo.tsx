import React from "react";
import { Link } from "react-router-dom";

export const Logo=()=>{
    return(
        <Link to="/" className="flex items-center ml-20 w-[145px]">
            <img src="/assets/logoOnly.png" className="w-[65px] h-[55px]" alt="" />
            <span className="font-bold text-[15px]">HealthCare</span>
        </Link>
    )
}