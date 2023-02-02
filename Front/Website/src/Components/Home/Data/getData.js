import { requiredCalories, totalAteCalories, totalExercise } from "../../Helper/CalorieCalc";

export function caloriesOnEachPie(user, dates, foods, activities) {
    let consumed = 0, bfd = 0, bfe = 0;
    if (user != null && dates != null) {
        const reqC = requiredCalories(user);
        for (let i = 0; i < dates.length; i++) {
            let date = dates[i];
            for (let j = 0; j < user.days.length; j++) {
                if (user.days[j].date.includes(date)) {
                    const tac = totalAteCalories(user, date, foods);
                    if (tac === 0) continue;
                    consumed += tac;
                    bfd += reqC - tac;
                    bfe += totalExercise(user, date, activities);
                }
            }
        }
    }

    if(consumed === 0) return [];

    return [
        {
            "name": "Burned from diet",
            "value": bfd
        },
        {
            "name": "Consumed",
            "value": consumed
        },
        {
            "name": "Burned from exercise",
            "value": bfe
        }
    ];
}

export function dailyWeightLossPie(user, dates, foods, activities) {
    let ret = [];
    let retp = 0;
    if (user != null && dates != null) {
        const recCal = requiredCalories(user);
        for (let i = 0; i < dates.length; i++) {
            let date = dates[i];
            for (let j = 0; j < user.days.length; j++) {
                if (user.days[j].date.includes(date)) {
                    const conCal = totalAteCalories(user, date, foods);
                    if (conCal === 0) continue;
                    const burCal = totalExercise(user, date, activities);
                    const dif = recCal - conCal + burCal;
                    const wl = parseInt(dif / 7.7);
                    const data = {
                        "name": date,
                        "value": wl
                    }
                    ret[retp++] = data;
                }
            }
        }
    }
    return ret;
}