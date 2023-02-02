export function requiredCalories(user, date) {
    let rc = 0;
    if(user.gender){
        rc = 655.1 + 9.563 * (user.weight) + (1.85 * user.height * 100) - (4.676 * user.age);
    }
    else {
        rc = 66.47 + (13.75 * user.weight) + (5.003 * user.height * 100) - (6.75 * user.age);
    }
    rc = parseInt(rc);
    return rc;
}

export function totalAteCalories(user, date, foods){
    let D = user.id + "@" + date;
    let cal = 0;
    for(let i=0; i<user.days.length; i++){
        if(user.days[i].date ===  D){
            for(let m=0; m<4; m++){
                let meal = user.days[i].meals[m];
                for(let f=0; f<meal.amount.length; f++){
                    cal += meal.amount[f] * meal.foods[f];
                    const foodId = meal.foods[f];
                    const amount = meal.amount[f];
                    let calorie = 0;
                    for(let x=0; x<foods.length; x++){
                        if(foods[x].id === foodId){
                            calorie = foods[x].calories;
                            break;
                        }
                    }
                    calorie = calorie * amount;
                    cal += calorie;
                }
            }
            break;
        }
    }
    return parseInt(cal);
}

export function totalExercise(user, date, activities){
    let D = user.id + "@" + date;
    let cal = 0;
    for(let i=0; i<user.days.length; i++){
        if(user.days[i].date ===  D){
            let ex = user.days[i].exercises;
            for(let e=0; e<ex.length; e++){
                const activityId = ex[e].activity;
                const time = ex[e].time;
                for(let x=0; x<activities.length; x++){
                    if(activities[x].id === activityId){
                        const burn = (activities[x].calorieBurnPerHour * time) / 60;
                        cal += burn;
                        break;
                    }
                }
            }
            break;
        }
    }
    return parseInt(cal);
}