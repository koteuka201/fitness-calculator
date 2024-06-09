import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuShortcut } from "@/components/ui/dropdown-menu";
import { Menu, CirclePlus, EggFried, Beef, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DropDownMenuProps {
    onSetBreakfast: () => void,
    onSetLunch: () => void,
    onSetDinner: () => void,
}

export const DropDownMenu: React.FC<DropDownMenuProps> = ({ onSetBreakfast, onSetLunch, onSetDinner }) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-0 p-0 w-[24px] h-[24px]"><Menu/></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px]">
            <DropdownMenuLabel className="text-[12px]">Добавить в рацион</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuGroup>
                <DropdownMenuItem onClick={onSetBreakfast}>
                    <EggFried className="w-[16px] h-[16px]"/>
                    <span className="text-gray-500 font-semibold ml-1">Завтрак</span>
                    <DropdownMenuShortcut><CirclePlus className="cursor-pointer w-[20px] h-[20px]"/></DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onSetLunch}>
                    <Beef className="w-[16px] h-[16px]"/>
                    <span className="text-gray-500 font-semibold ml-1">Обед</span>
                    <DropdownMenuShortcut><CirclePlus className="cursor-pointer w-[20px] h-[20px]"/></DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onSetDinner}>
                    <Apple className="w-[16px] h-[16px]"/>
                    <span className="text-gray-500 font-semibold ml-1">Ужин</span>
                    <DropdownMenuShortcut><CirclePlus className="cursor-pointer w-[20px] h-[20px]"/></DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
)

