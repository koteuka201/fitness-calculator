import { Idata } from "@/pages/selfCalulationPage/selfForm";
import { INutric } from "@/pages/foodCalculationPage/mainTable/mainTable";

export function calculateCalories(data: Idata) : INutric {
    let nutrients: INutric={
        kcal: 0,
        protein: 0,
        fat: 0,
        carb: 0
    }
    if(data.gender==='male'){
        
        nutrients.kcal=(88.36 + (13.4 * data.weight) + (4.8 * data.height) - (5.7 * data.age))*(data.activity/100 +1)
        
        if(data.target==='loose'){
            nutrients.kcal*=0.83
        }
        if(data.target==='gain'){
            nutrients.kcal*=1.17
        }

        nutrients.protein= nutrients.kcal * 0.15/4
        nutrients.fat= nutrients.kcal *0.30/9
        nutrients.carb= nutrients.kcal *0.55/4
    }
    else{
        nutrients.kcal=(447.6 + (9.2 * data.weight) + (3.1 * data.height) - (4.3 * data.age))*(data.activity/100 +1)
        
        if(data.target==='loose'){
            nutrients.kcal*=0.83
        }
        if(data.target==='gain'){
            nutrients.kcal*=1.17
        }
        
        nutrients.protein= nutrients.kcal * 0.15/4.1
        nutrients.fat= nutrients.kcal *0.30/9.3
        nutrients.carb= nutrients.kcal *0.55/4.1
    }



    return {
        kcal: nutrients.kcal,
        protein: nutrients.protein,
        fat: nutrients.fat,
        carb: nutrients.carb
    }
}