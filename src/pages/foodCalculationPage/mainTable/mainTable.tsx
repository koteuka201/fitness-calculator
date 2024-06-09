import React,{useEffect, useState} from "react";
import { SelectComponent, IOption } from "./select";
import { MealTable } from "./mealTable";
import { DropDownMenu } from "./dropDownMenu";
import { CentralTable } from "./centralTable";
import { AddNewProduct } from "./addNewProduct";
import { TotalNutricientsTable } from "./totalNutricientsTable";

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
                <DropDownMenu onSetBreakfast={handleSetBreakfast} onSetLunch={handleSetLunch} onSetDinner={handleSetDinner} />
            </div>
            <CentralTable tableItems={tableItems} handleDeleteItem={handleDeleteItem}/> 
            <AddNewProduct weight={weight} setWeight={setWeight} handlePlusItem={handlePlusItem} setItemToAddTable={setItemToAddTable}/>
            {tableItems.length>0 &&
                <TotalNutricientsTable totals={totals} />
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