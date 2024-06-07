import React from "react";
import { Route, Routes } from "react-router";
import { Header } from "../header/header";
import { SelfCalculationPage } from "@/pages/selfCalulationPage/selfCalulationPage";
import { FoodCalculation } from "@/pages/foodCalculationPage/foodCalculatorPage";

export const Router=()=>{
    return(
        <Routes>
            <Route path="/" element={
                <>
                    <Header/>
                </>
            }/>
            <Route path="/selfCalculation" element={
                <>
                    <Header/>
                    <SelfCalculationPage/>
                </>
            }/>
            <Route path="/foodCalculation" element={
                <>
                    <Header/>
                    <FoodCalculation/>
                </>
            }/>
        </Routes>
    )
}
