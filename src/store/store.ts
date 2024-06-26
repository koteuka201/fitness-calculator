import { create } from 'zustand'
import { INutric } from '@/pages/foodCalculationPage/mainTable/mainTable'

interface Store{
    totalNutricients: INutric
    addNutricients: (nutricients: INutric)=> void
    deleteNutricients: (nutricients: INutric)=> void
}

export const useStore = create<Store>((set)=>({
    totalNutricients: {
        protein: 0,
        fat: 0,
        carb: 0,
        kcal: 0
    },
    addNutricients: (nutric) => set((state) => ({
        totalNutricients: {
            protein: state.totalNutricients.protein + nutric.protein,
            fat: state.totalNutricients.fat + nutric.fat,
            carb: state.totalNutricients.carb + nutric.carb,
            kcal: state.totalNutricients.kcal + nutric.kcal
        }
    })),
    deleteNutricients: (nutric) => set((state) => ({
        totalNutricients: {
            protein: state.totalNutricients.protein - nutric.protein,
            fat: state.totalNutricients.fat - nutric.fat,
            carb: state.totalNutricients.carb - nutric.carb,
            kcal: state.totalNutricients.kcal - nutric.kcal
        }
    }))
}))