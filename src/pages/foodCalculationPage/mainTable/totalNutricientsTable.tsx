import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { INutric } from "./mainTable";

interface TotalNutricientsTableProps {
    totals: INutric
}

export const TotalNutricientsTable: React.FC<TotalNutricientsTableProps> = ({ totals }) => (
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
)