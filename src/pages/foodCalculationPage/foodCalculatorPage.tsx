import { Card } from "@/components/ui/card";
import { MainTable } from "./mainTable/mainTable";

export const FoodCalculation=()=>{
    return(
        <div className="flex justify-center">
            <Card className="w-[850px] text-center mt-[42px] border-0 shadow-none">
                <h1 className="text-[26px] font-bold ">Калькулятор приемов пищи</h1>
                <MainTable/>
            </Card>
        </div>
    )
}