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
    const [tableItems, setTableItems] = useState<ITableItem[]>([])

    const [totals, setTotals] = useState({
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

    const handlePlusItem=()=>{
        if(weight!==0 && isSelected){
            console.log(tableItems)
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
        <div className="mt-[36px]">
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
            {/* <div className="border border-b-black opacity-10"></div> */}
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
            {tableItems.length>0 &&
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
        </div>
        
    )
}