import { Card} from "@/components/ui/card";
import { SelfForm } from "./selfForm";

export const SelfCalculationPage=()=>{


    return(
        <div className="flex justify-center ">
            <Card className="w-[550px] text-start mt-[42px] mb-[25px] border-0 shadow-none">
                <h1 className="text-[26px] font-bold ">Индивидуальный рассчет нормы калорий</h1>
                <p className=" text-[14px] mt-[22px] text-start">Рассчитайте свои ежедневные потребности в калориях, белках, жирах и углеводах, 
                исходя из индивидуальных параметров. Наш калькулятор учитывает ваш вес, рост, пол, возраст и уровень физической активности 
                для точного определения ваших питательных потребностей.</p>

                <SelfForm/>
            </Card>
        </div>
        
    )
}