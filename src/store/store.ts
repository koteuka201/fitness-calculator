import { create } from 'zustand'
import { INutric } from '@/pages/foodCalculationPage/mainTable/mainTable'
import {persist } from 'zustand/middleware'

export interface ILogs{
    date: string
    height: number
    weight: number
    target: string
    log: INutric
}

interface IStore{
    totalNutricients: INutric
    addNutricients: (nutricients: INutric)=> void
    deleteNutricients: (nutricients: INutric)=> void
}

interface ILogsStore{
    Logs: ILogs[]
    addLog: (log:ILogs)=>void
    clearLogs: ()=>void
}

export const useStore = create<IStore>((set)=>({
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

export const useLogsStore = create<ILogsStore>()(
    persist(
        (set)=>({
            Logs: [],
            addLog: (log)=> set((state)=>({
                Logs: [...state.Logs, log]
            })),
            clearLogs: ()=> set(()=>({
                Logs: []
            }))
        }),
        {
            name: 'calcLogsStorage',
            getStorage: () => localStorage
        }
    )
)