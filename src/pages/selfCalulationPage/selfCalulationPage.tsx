import React, { useState } from "react";
import { Card, CardContent} from "@/components/ui/card";
import { SelfForm } from "./selfForm";

export const SelfCalculationPage=()=>{


    return(
        <div className="flex justify-center">
            <Card className="w-[760px] text-center mt-[82px] border-0">
                <h1 className="text-[26px] font-bold ">Индивидуальный рассчет нормы калорий</h1>
                <p className="w-[750px] text-[14px] mt-[22px] text-center">Рассчитайте свои ежедневные потребности в калориях, белках, жирах и углеводах, 
                исходя из индивидуальных параметров. Наш калькулятор учитывает ваш вес, рост, пол, возраст и уровень физической активности 
                для точного определения ваших питательных потребностей.</p>

                <SelfForm/>
            </Card>
        </div>
        
    )
}