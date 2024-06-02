import React, { useState } from "react";
import { Card, CardContent} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Slider } from "@/components/ui/slider";
import { activityDescription } from "@/helpers/activityDescription";

export const SelfForm=()=>{

    const [sliderValue, setSliderValue]=useState<number[]>([50])
    const [gender, setGender]=useState<string>('')

    const handleSliderChange = (newValue: number[]) => {
        setSliderValue(newValue);
    };

    const handleGenderChange=(gender: string, e: React.FormEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        setGender(gender)
    }


    return(
        <form className="mt-[55px] text-start font-bold w-[536px]">
            <div>
                <span className="text-[30px]">&#8226;</span>
                <span className="text-xl ml-2">Общая информация:</span>
                <div className="text-[14px] ml-[26px]">Ваш пол:</div>
                <div className="flex ml-[26px]">
                    <Button 
                            className={`w-[150px] ${gender === 'female' ? 'bg-green-200 text-black border border-green-800 hover:bg-green-300' : 'bg-slate-500 text-white'}`}
                            onClick={(e)=>handleGenderChange('female',e)}
                    >Женщина</Button>
                    <Button 
                        className={`ml-[30px] w-[150px] ${gender === 'male' ? 'bg-green-200 text-black border border-green-800 hover:bg-green-300' : 'bg-slate-500 text-white'}`}
                        onClick={(e)=>handleGenderChange('male',e)}
                    >Мужчина</Button>
                </div>
                <div className=" ml-[26px] mt-[24px] flex justify-between">
                    <div>
                        <Label htmlFor="age" className="text-sm text-slate-400 font-normal">Возраст, лет</Label>
                        <Input id="age" type='number' placeholder="0" min='0' className="w-[150px]"></Input>
                    </div>
                    <div >
                        <Label htmlFor="h" className="text-sm text-slate-400 font-normal">Рост, см</Label>
                        <Input id="h" type='number' placeholder="0" min='0' className="w-[150px]"></Input>
                    </div>
                    <div >
                        <Label htmlFor="weight" className="text-sm text-slate-400 font-normal">Вес, кг</Label>
                        <Input id="weight" type='number' placeholder="0" min='0' className="w-[150px]"></Input>
                    </div>
                </div>
                <div>
                    <span className="text-[30px]">&#8226;</span>
                    <span className="text-xl ml-2">Дневная активность:</span>
                    <Slider 
                        className="ml-[20px] mt-[20px] w-[516px]"
                        value={sliderValue}
                        min={0}
                        max={100}
                        onValueChange={handleSliderChange}
                    ></Slider>
                    <div className="ml-[20px] mt-[20px] font-normal">
                        <div>
                            {activityDescription(sliderValue[0]).title}
                        </div>
                        <div>
                            {activityDescription(sliderValue[0]).description}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}