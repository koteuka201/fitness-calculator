import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Slider } from "@/components/ui/slider";
import { activityDescription } from "@/helpers/activityDescription";
import { calculateCalories } from "@/helpers/calculateCalories";
import { CircleChart } from "./results/circleChart";
import { IMBCard } from "./results/IMBCard";
import { GetIMB } from "@/helpers/getIMB";

export interface Idata{
    activity: number,
    gender: string,
    target: string,
    age: number,
    height: number,
    weight: number
}

export interface ICalculate{
    calories: number,
    protein: number,
    fat: number,
    carb: number
}

interface IImb extends Pick <Idata,'height' | 'weight'>{}

export const SelfForm=()=>{

    const [sliderValue, setSliderValue]=useState<number[]>([50])
    const [gender, setGender]=useState<string>('')
    const [target, setTarget]=useState('loyal')
    const [isSubmit,setIsSubmit]=useState(false)
    const [isTapped, setIsTapped]=useState(false)

    const [age,setAge]=useState(0)
    const [height, setHeight]=useState(0)
    const [weight, setWeight]=useState(0)

    const [imb,setImb]=useState<IImb>({
        height: 0,
        weight: 0
    })
    const [result, setResult] = useState<ICalculate>({
        calories: 0,
        protein: 0,
        fat: 0,
        carb: 0
    });

    const handleSliderChange = (newValue: number[]) => {
        setSliderValue(newValue);
    };

    const handleGenderChange=(gender: string, e: React.FormEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        setGender(gender)
    }

    const handleTargetChange=(target: string, e: React.FormEvent<HTMLButtonElement>)=>{
        e.preventDefault()
        setTarget(target)
    }

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setIsTapped(true)
        if(gender!='' && (age && height && weight)!=0 && (!Number.isNaN(age) && !Number.isNaN(height)&& !Number.isNaN(weight))){
            setIsSubmit(true);

            let data: Idata = {
                activity: sliderValue[0],
                gender: gender,
                target: target,
                age: age,
                height: height,
                weight: weight,
                
            };

            let imbData: IImb={
                height: height,
                weight: weight
            }
            setResult(calculateCalories(data))
            setImb(imbData)

            setTimeout(() => {
                const element = document.getElementById('result')

                if(element){
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }, 1);
            
            
        }
        
        
    }
    return(
        <form className="mt-[55px] text-start font-bold w-[536px]" onSubmit={handleSubmit}>
            
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
                {isTapped && gender==='' &&
                    <div className="text-red-500 ml-[26px] mt-2">Выберите пол!</div>
                }
            </div>
            
            <div className=" ml-[26px] mt-[24px] flex justify-between">
                <div>
                    <Label htmlFor="age" className="text-sm text-slate-400 font-normal">Возраст, лет</Label>
                    <Input 
                        id="age" 
                        type='number' 
                        min='0' 
                        max='100'
                        className="w-[150px]" 
                        value={age} 
                        onChange={(e)=>setAge(parseInt(e.target.value))}
                    >
                    </Input>
                </div>
                <div >
                    <Label htmlFor="height" className="text-sm text-slate-400 font-normal">Рост, см</Label>
                    <Input 
                        id="height" 
                        type='number' 
                        min='0' 
                        className="w-[150px]" 
                        value={height} 
                        onChange={(e)=>setHeight(parseInt(e.target.value))}
                    >
                    </Input>
                </div>
                <div >
                    <Label htmlFor="weight" className="text-sm text-slate-400 font-normal">Вес, кг</Label>
                    <Input 
                        id="weight"
                        type='number' 
                        min='0' 
                        className="w-[150px]" 
                        value={weight} 
                        onChange={(e)=>setWeight(parseInt(e.target.value))}

                    >
                    </Input>
                </div>
            </div>
            {isTapped && ((age && height && weight)===0 || !(!Number.isNaN(age) && !Number.isNaN(height)&& !Number.isNaN(weight))) &&
                <div className="text-red-500 ml-[26px] mt-2">Проверьте правильность введенных полей!</div>
            }
            <div>
                <span className="text-[30px]">&#8226;</span>
                <span className="text-xl ml-2">Дневная активность:</span>
                <Slider 
                    className="ml-[20px] mt-[20px] w-[516px]"
                    value={sliderValue}
                    min={20}
                    max={90}
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
            <div>
                <span className="text-[30px]">&#8226;</span>
                <span className="text-xl ml-2">Ваша цель:</span>
                <div className="flex ml-[26px] mt-[15px]">
                    <Button 
                            className={`w-[150px] ${target === 'loose' ? 'bg-green-200 text-black border border-green-800 hover:bg-green-300' : 'bg-slate-500 text-white'}`}
                            onClick={(e)=>handleTargetChange('loose',e)}
                    >Сбросить вес</Button>
                    <Button 
                        className={`ml-[30px] w-[150px] ${target === 'loyal' ? 'bg-green-200 text-black border border-green-800 hover:bg-green-300' : 'bg-slate-500 text-white'}`}
                        onClick={(e)=>handleTargetChange('loyal',e)}
                    >Поддержать вес</Button>
                    <Button 
                        className={`ml-[30px] w-[150px] ${target === 'gain' ? 'bg-green-200 text-black border border-green-800 hover:bg-green-300' : 'bg-slate-500 text-white'}`}
                        onClick={(e)=>handleTargetChange('gain',e)}
                    >Набрать вес</Button>
                </div>
            </div>
            <Button type="submit" className="w-[540px] mt-[50px]">
                <img src="/assets/selfCalculator/calculator.svg" className="w-[22px] h-[22px]" alt="" />
                <span className="ml-[2px]">РАССЧИТАТЬ</span>
            </Button>
            {isSubmit && 
                <div id="result" className="mt-[30px]">  
                    <span className="text-[30px]">&#8226;</span>
                    <span className="text-xl ml-2">Ваш результат:</span>
                    <div className="">
                        <IMBCard IMB={GetIMB(imb.weight,imb.height)}/>
                        <CircleChart result={result}/>
                    </div>
                </div>
            }
            
        </form>
    )
}