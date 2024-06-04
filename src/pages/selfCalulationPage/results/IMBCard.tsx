import { Card } from "@/components/ui/card";
import React, { useEffect, useState } from "react";

interface IProps{
    IMB: string
}

interface IIMBStyles{
    style: string,
    description: string
}

export function IMBStyles(IBM:string){
    const [style, setBorderColor]=useState<string>('')
    const [description, setDesc]=useState<string>('')
    if(Number(IMB)<=18){
        setBorderColor('blue-400')
        setDesc('Недостаточный вес')
    } else if (Number(IMB)>18 && Number(IMB)<=25) {
        setBorderColor('green-400')
        setDesc('Норма')
    } else if (Number(IMB)>25 && Number(IMB)<=30){
        setBorderColor('yellow-400')
        setDesc('Избыточный вес')
    }
    else{
        setBorderColor('red-500')
        setDesc('Ожирение')
    }
    return {
        style,
        description
    }
}

export const IMB: React.FC<IProps>=({IMB})=>{

    const [style, setBorderColor]=useState<string>('')
    const [description, setDesc]=useState<string>('')
    
    // const [data, setData]=useState<IIMBStyles>({
    //     style: '',
    //     description: ''
    // })
    useEffect(()=>{
        if(Number(IMB)<=18){
            setBorderColor('blue-400')
            setDesc('Недостаточный вес')
        } else if (Number(IMB)>18 && Number(IMB)<=25) {
            setBorderColor('green-400')
            setDesc('Норма')
        } else if (Number(IMB)>25 && Number(IMB)<=30){
            setBorderColor('yellow-400')
            setDesc('Избыточный вес')
        }
        else{
            setBorderColor('red-500')
            setDesc('Ожирение')
        }    
    })
    

    return(
        <Card className='p-5 shadow-md border-0'>
            
            <div className="text-[18px] text-center">
                Ваш ИМТ
            </div>
            <div className="flex justify-center">
                <div 
                    className={`text-[18px] border border-[5px] border-${style} w-[75px] h-[75px] flex items-center justify-center text-[20px]`}
                    style={{
                        borderRadius: '50%',
                    }}    
                >
                    {IMB}
                </div>
            </div>
            <div className="text-[15px] text-center font-normal">
                Норма
            </div>
        </Card>
    )
}