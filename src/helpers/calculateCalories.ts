import { Typedata } from "@/pages/selfCalulationPage/selfForm";
import { TypeCalculate } from "@/pages/selfCalulationPage/selfForm";

export function calculateCalories(data: Typedata) : TypeCalculate {
    let nutrients: TypeCalculate={
        calories: 0,
        protein: 0,
        fat: 0,
        carb: 0
    }
    console.log('asd')
    if(data.gender==='male'){
        nutrients.calories=(88.36 + (13.4 * data.weight) + (4.8 * data.height) - (5.7 * data.age))*(data.activity/100 +1)
        // debugger
        if(data.target==='loose'){
            nutrients.calories*=0.83
        }
        if(data.target==='gain'){
            nutrients.calories*=1.17
        }

        nutrients.protein= nutrients.calories * 0.16/4
        nutrients.fat= nutrients.calories *0.29/9
        nutrients.carb= nutrients.calories *0.55/4
    }
    else{
        nutrients.calories=(447.6 + (9.2 * data.weight) + (3.1 * data.height) - (4.3 * data.age))*(data.activity/100 +1)
        
        if(data.target==='loose'){
            nutrients.calories*=0.83
        }
        if(data.target==='gain'){
            nutrients.calories*=1.17
        }
        
        nutrients.protein= nutrients.calories * 0.25/4.1
        nutrients.fat= nutrients.calories *0.25/9.3
        nutrients.carb= nutrients.calories *0.5/4.1
    }



    return {
        calories: nutrients.calories,
        protein: nutrients.protein,
        fat: nutrients.fat,
        carb: nutrients.carb
    }
}