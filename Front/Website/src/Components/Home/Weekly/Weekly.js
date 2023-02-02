import { useState } from "react";
import BarView from "../../Graphical/BarView";
import PieView from "../../Graphical/PieView";
import { randomColorArray } from "../../Graphical/RandomColor";
import { getWeekDates } from "../../Helper/GetDates";
import { caloriesOnEachPie, dailyWeightLossPie } from "../Data/getData";

export function Weekly({user, foods, activities}){
    
    const [wmNo, setWmNo] = useState(0);
    const dates = getWeekDates(wmNo, user);

    function changeWMno(add){
        if(add) {
            const nw = wmNo + 1;
            setWmNo(nw);
        }
        else{
            if(wmNo === 0) return;
            let nw = wmNo - 1;
            setWmNo(nw);
        }
    }

    const caloriesOnEachData = caloriesOnEachPie(user, dates, foods, activities);
    const dailyWeightLossData = dailyWeightLossPie(user, dates, foods, activities);

    return(<>
        <input type={'button'} value={'+++'} onClick={(() => changeWMno(true))} /> {wmNo === 0 ? 'Current week ' : "Previus week "+wmNo+' '}
        <input type={'button'} value={'---'} onClick={(() => changeWMno(false))} /><hr></hr>
        <PieView title={'Calories on each aspect'} data={caloriesOnEachData} colors={randomColorArray(caloriesOnEachData.length, 'any')} size={10} />
        <PieView title={'Daily weight loss (g)'} data={dailyWeightLossData} colors={randomColorArray(dailyWeightLossData.length, 'any')} size={10} />
        <BarView title={'Daily weight loss (g)'} data={dailyWeightLossData} colors={randomColorArray(10, 'any')} sizeX={10} sizeY={10} required={[]} />
    </>)
}