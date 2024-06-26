import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useLogsStore } from "@/store/store"

interface CalculationLogProps{
    isOpen: boolean,
    onClose: ()=>void
}


const formatDate = (dateString : string) => {
    const date = new Date(dateString)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const time= dateString.substring(11,16)

    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year} - ${time}`
}

const fotmatTarget = (target: string) => {
    switch (target) {
        case 'loyal':
            return 'Поддержание'
        case 'loose':
            return 'Похудение'
        case 'gain':
            return 'Набор'
        default:
            return target
    }
}

export const CalculationLog=(props: CalculationLogProps)=>{

    const {Logs, clearLogs}=useLogsStore()

    const handleClick=()=>{
        clearLogs()
        props.onClose()
    }

    return(
        <Sheet open={props.isOpen} onOpenChange={props.onClose}>
            <SheetContent className="overflow-y-auto">
                <SheetHeader className="flex">
                    <SheetTitle>
                        Журнал расчетов
                        <Button 
                            className="ml-[30px] w-[130px] h-[30px] bg-red-600 hover:bg-red-700" 
                            onClick={handleClick}
                        >Очистить журнал</Button>
                    </SheetTitle>
                </SheetHeader>
                <div className="mt-[30px]">
                    {Logs.length>0 ? (
                        Logs.map((item, index)=>(
                            <Card key={index} className="mt-[5px]">
                                <CardHeader className="p-[10px]">
                                    <CardTitle className="text-[16px] flex justify-center">Расчет от {formatDate(item.date)}</CardTitle>
                                </CardHeader>
                                <CardContent className="grid grid-cols-2 pb-[5px] pl-[15px] pr-[10px] text-[15px]">
                                    <div>
                                        <div>
                                            <span className="font-bold">Рост: </span>
                                            {item.height} см    
                                        </div>
                                        <div>
                                            <span className="font-bold">Вес: </span>
                                            {item.weight} кг
                                        </div>
                                        <div>
                                            <span className="font-bold">Цель: </span>
                                            {fotmatTarget(item.target)}
                                        </div>
                                        </div>
                                    <div>
                                        <span className="font-bold">
                                            Потребность КБЖУ:
                                        </span>
                                        <div>
                                            <span className="font-semibold">Калории: </span>
                                            {item.log.kcal.toFixed(1)} Ккал
                                        </div>
                                        <div>
                                            <span className="font-semibold">Белки: </span>
                                            {item.log.protein.toFixed(1)} г
                                        </div>
                                        <div>
                                            <span className="font-semibold">Жиры: </span>
                                            {item.log.fat.toFixed(1)} г
                                        </div>
                                        <div>
                                            <span className="font-semibold">Углеводы: </span>
                                            {item.log.carb.toFixed(1)} г
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                    <div className="font-bold text-[25px] h-[500px] flex items-center justify-center">Журнал пуст!</div> 
                    )}
                </div>
            </SheetContent>
        </Sheet>
    )
}