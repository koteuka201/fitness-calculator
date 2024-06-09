import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ITableItem } from "./mainTable";

interface CentralTableProps {
    tableItems: ITableItem[],
    handleDeleteItem: (num: string) => void
}

export const CentralTable: React.FC<CentralTableProps> = ({ tableItems, handleDeleteItem }) => (
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
            {tableItems.map((product) => (
                <TableRow key={product.num}>
                    <TableCell
                        className="cursor-pointer"
                        onClick={() => handleDeleteItem(product.num)}
                    >
                        {product.sign !== '' && <img src={product.sign} alt="sign" />}
                    </TableCell>
                    <TableCell>{product.num}</TableCell>
                    <TableCell className="text-center w-[250px]">{product.name}</TableCell>
                    <TableCell className="text-center">{product.weight}</TableCell>
                    <TableCell className="text-center">{(product.protein * product.weight / 100).toFixed(1)}</TableCell>
                    <TableCell className="text-center">{(product.fat * product.weight / 100).toFixed(1)}</TableCell>
                    <TableCell className="text-center">{(product.carb * product.weight / 100).toFixed(1)}</TableCell>
                    <TableCell className="text-center">{(product.kcal * product.weight / 100).toFixed(1)}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
)