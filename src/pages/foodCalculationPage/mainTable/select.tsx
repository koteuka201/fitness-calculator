import React from 'react';
import Select from 'react-select';
import products from '../../../service/products.json';

export interface IOption{
    label: string,
    protein: number,
    fat: number,
    carb: number,
    kcal: number
}
interface IProduct{
    id: string;
    name: string;
    bgu: string;
    kcal: string;
}

const formatProductOptions = (products: IProduct[]): IOption[] => {
    return products.map(product => ({
        label: product.name,
        protein: Number(product.bgu.split(',')[0]),
        fat: Number(product.bgu.split(',')[1]),
        carb: Number(product.bgu.split(',')[2]),
        kcal: Number(product.kcal)
    }))
}

interface SelectComponentProps {
    onChange: (selectedProduct: IOption | null) => void;
}

export const SelectComponent: React.FC<SelectComponentProps> = ({ onChange }) => {
    
    return (
        <Select
            options={formatProductOptions(products)}
            onChange={onChange}
            placeholder="Название"
            isClearable
            classNamePrefix='react-select'
        />
    );
};

