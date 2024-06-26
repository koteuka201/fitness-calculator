import { Card, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { IMBModal } from "../modals/imbModal";

interface IProps{
    IMB: string
}

interface IStyles{
    borderColor: string,
    textColor: string,
    description: string
}

export const IMBCard: React.FC<IProps>=({IMB})=>{
    const [isOpen, setIsOpen] = useState(false);

    
    const [styles, setStyles]=useState<IStyles>({
        borderColor: '',
        textColor: '',
        description: ''
    })
    useEffect(()=>{
        
        if(Number(IMB)<=18){
            setStyles({
                borderColor: 'border-blue-400',
                textColor: 'text-blue-400',
                description: 'Недостаточный вес'
            })
        } else if (Number(IMB)>18 && Number(IMB)<=25) {
            setStyles({
                borderColor: 'border-green-400',
                textColor: 'text-green-400',
                description: 'Норма'
            })
        } else if (Number(IMB)>25 && Number(IMB)<=30){
            setStyles({
                borderColor: 'border-yellow-400',
                textColor: 'text-yellow-700',
                description: 'Избыточный вес'
            })
        }
        else{
            setStyles({
                borderColor: 'border-red-400',
                textColor: 'text-red-400',
                description: 'Ожирение'
            })
        }    
    },[IMB])
    
    
    return(
        <Card className='p-5 shadow-md border-0 mt-[15px]'>
            
            <CardTitle className="text-[18px] mb-2 flex justify-between items-center">
                <span className="flex-grow text-center ml-6">Ваш ИМТ</span>
                <img
                    className="cursor-pointer"
                    src="/assets/selfCalculator/info.svg"
                    onClick={()=>setIsOpen(true)}
                    alt="info"
                />
            </CardTitle>
            <div className="flex justify-center">
                <div 
                    className={`border-[5px] ${styles.borderColor} w-[75px] h-[75px] flex items-center justify-center text-[20px]`}
                    style={{
                        borderRadius: '50%',
                    }}    
                >
                    {IMB}
                </div>
            </div>
            <div className={`${styles.textColor} text-[15px] text-center font-bold mt-2`}>
                {styles.description}
            </div>
            <IMBModal isOpen={isOpen} onClose={()=>setIsOpen(false)}/>
        </Card>
    )
}