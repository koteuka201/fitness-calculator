import React from "react";
import { Input } from "@/components/ui/input";
import { SelectComponent, IOption } from "./select";

interface IAddNewProductProps {
    weight: number,
    setWeight: (weight: number) => void,
    handlePlusItem: () => void,
    setItemToAddTable: (selectedProduct: IOption | null) => void
}

export const AddNewProduct: React.FC<IAddNewProductProps> = ({ weight, setWeight, handlePlusItem, setItemToAddTable }) => (
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
)