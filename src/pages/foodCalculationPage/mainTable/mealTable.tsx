import React,{useEffect, useState} from "react";
import {ITableItem, INutric } from "./mainTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MealTableProps{
    label: string,
    meal: ITableItem[]
}   

export const MealTable: React.FC<MealTableProps> = ({label, meal})=>{

    const [totals,setTotals]=useState<INutric>({
        protein: 0,
        fat: 0,
        carb: 0,
        kcal: 0
    })

    useEffect(() => {
        const newTotals = meal.reduce((acc, item) => {
            acc.protein += (item.protein * item.weight / 100);
            acc.fat += (item.fat * item.weight / 100);
            acc.carb += (item.carb * item.weight / 100);
            acc.kcal += (item.kcal * item.weight / 100);
            return acc;
        }, { protein: 0, fat: 0, carb: 0, kcal: 0 });

        setTotals(newTotals);
    }, [meal])

    return(
        <Card className="w-[80%]">
            <CardHeader className="p-1">
                <CardTitle className="text-[20px] ">
                    {label}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {meal.map((item, index) =>(
                    <div key={index} className="flex justify-between p-1 border border-b-black border-l-0 border-r-0 border-t-0">
                        <div>{item.name}</div>
                        <div>{item.weight} г</div>
                    </div>
                ))}
                <div className="flex justify-between font-semibold">
                    <div>Белки: {totals.protein} г</div>
                    <div>Жиры {totals.fat} г</div>
                    <div>Углеводы: {totals.carb} г</div>
                    <div>Калории: {totals.kcal} ккал</div>
                </div>
            </CardContent>
        </Card>
    )
}