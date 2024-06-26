import { Card,CardContent,CardHeader, CardTitle } from "@/components/ui/card"
import { useStore } from "@/store/store"

export const NutricientsPerDay = () =>{

    const {totalNutricients}=useStore()
    
    return(
        <Card className="w-full mt-[20px]">
            <CardHeader className='p-1'>
                <CardTitle className="text-[20px] flex pr-[24px] pl-[24px]">
                    <div className="flex-grow">Дневное количество КБЖУ</div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between font-semibold">
                    <div>Белки: {totalNutricients.protein.toFixed(1)} г</div>
                    <div>Жиры {totalNutricients.fat.toFixed(1)} г</div>
                    <div>Углеводы: {totalNutricients.carb.toFixed(1)} г</div>
                    <div>Калории: {totalNutricients.kcal.toFixed(1)} ккал</div>
                </div>
            </CardContent>
        </Card>
    )
}