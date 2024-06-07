import React,{useEffect, useState} from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SelectComponent, IOption } from "./select";
import { Input } from "@/components/ui/input";



 

interface ITableItem {
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

export const MainTable=()=>{

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
    const [tableItems, setTableItems] = useState<ITableItem[]>([
        
    ])

    const setItemToAddTable = (selectedProduct: IOption | null) => {
        
        if (selectedProduct) {
            setIsSelected(true)
            setNewItem({
                sign: '/assets/foodCalculator/minus-circle.svg',
                num: (tableItems.length + 1).toString(),
                name: selectedProduct.label,
                weight: weight,
                protein: selectedProduct.protein * weight/100,
                fat: selectedProduct.fat * weight/100,
                carb: selectedProduct.carb * weight/100,
                kcal: selectedProduct.kcal * weight/100
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
            protein: stockItem.protein * weight/100,
            fat: stockItem.fat * weight/100,
            carb: stockItem.carb * weight/100,
            kcal: stockItem.kcal * weight/100
        })
    },[weight])

    return(
        <div className="mt-[36px]">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead> </TableHead>
                        <TableHead className="text-center">№</TableHead>
                        <TableHead className="text-center">Продукт</TableHead>
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
                            <TableCell className="text-center">{product.name}</TableCell>
                            <TableCell className="text-center">{product.weight}</TableCell>
                            <TableCell className="text-center">{(product.protein * product.weight/100).toFixed(1)}</TableCell>
                            <TableCell className="text-center">{(product.fat * product.weight/100).toFixed(1)}</TableCell>
                            <TableCell className="text-center">{(product.carb * product.weight/100).toFixed(1)}</TableCell>
                            <TableCell className="text-center">{(product.kcal * product.weight/100).toFixed(1)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="border border-b-black opacity-10"></div>
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
            </div>
        </div>
        
    )
}