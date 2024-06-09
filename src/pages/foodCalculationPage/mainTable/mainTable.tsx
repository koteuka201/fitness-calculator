import React,{useEffect, useState} from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SelectComponent, IOption } from "./select";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, CirclePlus, EggFried, Beef, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MealTable } from "./mealTable";
import { table } from "console";

export interface ITableItem {
    sign: string;
    num: string;
    name: string;
    weight: number;
    protein: number;
    fat: number;
    carb: number;
    kcal: number;
}

interface IStockItem extends ITableItem {
    label: string;
}

export interface INutric{
    protein: number,
    fat: number,
    carb: number,
    kcal: number
}

// export interface IMeal extends Pick<ITableItem,'name'|'weight'>{} 

export const MainTable=()=>{

    const [mealAdded, setMealAdded]=useState({
        breakfast: false,
        lunch: false,
        dinner: false
    })
    const [isSelected,setIsSelected]=useState(false)
    const [weight, setWeight]=useState<number>(100)
    const [stockItem, setStockItem]=useState<IStockItem>({
        label:'',
        sign: '',
        num: '',
        name: '',
        weight: 100,
        protein: 0,
        fat: 0,
        carb: 0,
        kcal: 0
    })

    const [newItem, setNewItem]=useState<ITableItem>({
        sign: '',
        num: '',
        name: '',
        weight: 100,
        protein: 0,
        fat: 0,
        carb: 0,
        kcal: 0
    })
    const [tableItems, setTableItems] = useState<ITableItem[]>([])
    const [tableBreakfast, setTableBreakfast] = useState<ITableItem[]>([])
    const [tableLunch, setTableLunch] = useState<ITableItem[]>([])
    const [tableDinner, setTableDinner] = useState<ITableItem[]>([])

    const [totals, setTotals] = useState<INutric>({
        protein: 0,
        fat: 0,
        carb: 0,
        kcal: 0
    })

    const setItemToAddTable = (selectedProduct: IOption | null) => {
        if (selectedProduct) {
            setIsSelected(true)
            setNewItem({
                sign: '/assets/foodCalculator/minus-circle.svg',
                num: (tableItems.length + 1).toString(),
                name: selectedProduct.label,
                weight: weight,
                protein: selectedProduct.protein,
                fat: selectedProduct.fat,
                carb: selectedProduct.carb,
                kcal: selectedProduct.kcal
            })
            setStockItem({
                label: selectedProduct.label,
                sign: '/assets/foodCalculator/minus-circle.svg',
                num: (tableItems.length + 1).toString(),
                name: selectedProduct.label,
                weight: weight,
                protein: selectedProduct.protein,
                fat: selectedProduct.fat,
                carb: selectedProduct.carb,
                kcal: selectedProduct.kcal 
            })
            
        }
    }

    const handleSetBreakfast=()=>{
        if(tableItems.length>0){
        
            setTableBreakfast(tableItems)
            setMealAdded({
                ...mealAdded,
                breakfast: true
            })
            setTableItems([])
        }
        
    }

    const handleDeleteBF=()=>{
        setTableBreakfast([])
        setMealAdded({
            ...mealAdded,
            breakfast: false
        })
    }

    const handleSetLunch=()=>{
        if(tableItems.length>0){
        
            setTableLunch(tableItems)
            setMealAdded({
                ...mealAdded,
                lunch: true
            })
            setTableItems([])
        }
        
    }

    const handleDeleteLunch=()=>{
        setTableLunch([])
        setMealAdded({
            ...mealAdded,
            lunch: false
        })
    }

    const handleSetDinner=()=>{
        if(tableItems.length>0){
        
            setTableDinner(tableItems)
            setMealAdded({
                ...mealAdded,
                dinner: true
            })
            setTableItems([])
        }
        
    }

    const handleDeleteDinner=()=>{
        setTableDinner([])
        setMealAdded({
            ...mealAdded,
            dinner: false
        })
    }

    const handlePlusItem=()=>{
        if(weight!==0 && isSelected){
            setTableItems([...tableItems, newItem])
            setWeight(100)
            setIsSelected(false)
        }
    }
    
    const handleDeleteItem = (num: string) => {
        const newTableItems = tableItems.filter(item => item.num !== num)
        const tableWithDecreaseNums=newTableItems.map((item, index) => ({
            ...item,
            num: (index + 1).toString()
        }))

        setTableItems(tableWithDecreaseNums)
    }

    

    useEffect(()=>{
        
        setNewItem({
            sign: '/assets/foodCalculator/minus-circle.svg',
            num: (tableItems.length + 1).toString(),
            name: stockItem.label,
            weight: weight,
            protein: stockItem.protein ,
            fat: stockItem.fat,
            carb: stockItem.carb ,
            kcal: stockItem.kcal
        })
        
    },[weight])

    useEffect(() => {
        const newTotals = tableItems.reduce((acc, item) => {
            acc.protein += (item.protein * item.weight / 100);
            acc.fat += (item.fat * item.weight / 100);
            acc.carb += (item.carb * item.weight / 100);
            acc.kcal += (item.kcal * item.weight / 100);
            return acc;
        }, { protein: 0, fat: 0, carb: 0, kcal: 0 });

        setTotals(newTotals);
    }, [tableItems])

    return(
        <div className="mt-[36px] mb-[50px]">
            <div className="flex justify-end">
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="border-0 p-0 w-[24px] h-[24px]"><Menu/></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[200px]">
                        <DropdownMenuLabel className="text-[12px]">
                            Добавить в рацион
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={handleSetBreakfast}>
                                <EggFried className="w-[16px] h-[16px]"/>
                                <span className="text-gray-500 font-semibold ml-1">Завтрак</span>
                                <DropdownMenuShortcut><CirclePlus className="cursor-pointer w-[20px] h-[20px]"/></DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleSetLunch}>
                                <Beef className="w-[16px] h-[16px]"/>
                                <span className="text-gray-500 font-semibold ml-1">Обед</span>
                                <DropdownMenuShortcut><CirclePlus className="cursor-pointer w-[20px] h-[20px]"/></DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleSetDinner}>
                                <Apple className="w-[16px] h-[16px]"/>
                                <span className="text-gray-500 font-semibold ml-1">Ужин</span>
                                <DropdownMenuShortcut><CirclePlus className="cursor-pointer w-[20px] h-[20px]"/></DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <Table className="border border-b-black border-l-0 border-r-0 border-t-0 border-opacity-[10px]">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[67px]"></TableHead>
                        <TableHead className="text-center">№</TableHead>
                        <TableHead className="text-center w-[250px]">Продукт</TableHead>
                        <TableHead className="text-center">Вес, гр</TableHead>
                        <TableHead className="text-center">Бел, гр</TableHead>
                        <TableHead className="text-center">Жир, гр</TableHead>
                        <TableHead className="text-center">Угл, гр</TableHead>
                        <TableHead className="text-center">Кал, ккал</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableItems.map((product)=>(
                        <TableRow key={product.num}>
                            <TableCell
                                className="cursor-pointer"
                                onClick={() => handleDeleteItem(product.num)}
                            >
                                {product.sign!=='' && <img src={product.sign} alt="sign" />}
                            </TableCell>
                            <TableCell>{product.num}</TableCell>
                            <TableCell className="text-center w-[250px]">{product.name}</TableCell>
                            <TableCell className="text-center">{product.weight}</TableCell>
                            <TableCell className="text-center">{(product.protein * product.weight/100).toFixed(1)}</TableCell>
                            <TableCell className="text-center">{(product.fat * product.weight/100).toFixed(1)}</TableCell>
                            <TableCell className="text-center">{(product.carb * product.weight/100).toFixed(1)}</TableCell>
                            <TableCell className="text-center">{(product.kcal * product.weight/100).toFixed(1)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex ml-[16px] w-[350px] justify-between mt-[10px]">
                <img className="cursor-pointer" onClick={handlePlusItem} src="/assets/foodCalculator/plus-circle.svg" alt="plus" />
                <div className="w-[170px] h-[30px]">
                    <SelectComponent onChange={setItemToAddTable} />
                </div>
                <Input
                    value={weight}
                    type="number"
                    placeholder="Вес"
                    className="w-[70px] text-end h-[38px]"
                    onChange={(e) => setWeight(Number(e.target.value))}
                />
            </div>{
            tableItems.length>0 &&
                <Table className="mt-[10px] text-[16px] font-bold border border-t-black border-l-0 border-r-0 border-b-0">
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-center w-[66px]"></TableCell>
                            <TableCell className="text-center w-[57px]"></TableCell>
                            <TableCell className="text-center w-[250px]">Итого:</TableCell>
                            <TableCell className="text-center w-[89px]"></TableCell>
                            <TableCell className="text-center">{totals.protein.toFixed(1)}</TableCell>
                            <TableCell className="text-center">{totals.fat.toFixed(1)}</TableCell>
                            <TableCell className="text-center">{totals.carb.toFixed(1)}</TableCell>
                            <TableCell className="text-center">{totals.kcal.toFixed(1)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            }
            <div className="mt-[56px]">
                
                    {mealAdded.breakfast &&
                        <MealTable label={'Завтрак'} meal={tableBreakfast} deleteTable={handleDeleteBF}/>
                    }
                    {mealAdded.lunch &&
                        <MealTable label={'Обед'} meal={tableLunch} deleteTable={handleDeleteLunch}/>
                    }
                    {mealAdded.dinner &&
                        <MealTable label={'Ужин'} meal={tableDinner} deleteTable={handleDeleteDinner}/>
                    }
                
            </div>
        </div>
        
    )
}