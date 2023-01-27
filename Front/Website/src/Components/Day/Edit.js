import Exercise from './Exercise/Exercise';
import ExerciseUpdate from './Exercise/ExerciseUpdate';
import FoodUpdate from './Meal/FoodUpdate';
import styles from '../../Styles/Styles.module.css'
import { useCallback, useEffect, useState } from 'react';
import { getActivities } from '../Helper/GetActivities';
import { getFoods } from '../Helper/GetFoods';

function Edit({ date, exId, meal1Id, meal2Id, meal3Id, meal4Id, addOrRemoveEx, addOrRemoveMeal, addDay, day }) {

    const [activities, setActivities] = useState([]);
    const [foods, setFoods] = useState([]);

    const fetchActivities = useCallback(async () => {
        getActivities().then(act => {
            setActivities(act);
        })
        getFoods().then(fd => {
            setFoods(fd);
        })
    }, []);
    useEffect(() => {
        fetchActivities();
    }, [fetchActivities]);

    let idx = 0;
    const exerciseComps = exId.map((exercise) =>
        <ExerciseUpdate time={exercise.time} activity={exercise.activity} id={idx++} activities={activities} />
    );
    idx = 0;
    const mealComps1 = meal1Id.map((meal) =>
        <FoodUpdate foods={foods} id={"m1" + idx++} food={meal.food} amount={meal.amount} />
    );
    idx = 0;
    const mealComps2 = meal2Id.map((meal) =>
        <FoodUpdate foods={foods} id={"m2" + idx++} food={meal.food} amount={meal.amount} />
    );
    idx = 0;
    const mealComps3 = meal3Id.map((meal) =>
        <FoodUpdate foods={foods} id={"m3" + idx++} food={meal.food} amount={meal.amount} />
    );
    idx = 0;
    const mealComps4 = meal4Id.map((meal) =>
        <FoodUpdate foods={foods} id={"m4" + idx++} food={meal.food} amount={meal.amount} />
    );

    return (<div className={styles.containerCen}><br></br>
        <div className={styles.headline}>UPDATING {date}</div><br></br>
        <hr></hr><br></br>

        <div className={styles.title}>Breakfast</div><br></br>
        {mealComps1}
        {mealComps1.length == 0 ? <div className={styles.noFood}>No food has been added to breakfast. Click on add food to select some foods and enter how much you've ate.</div> : ""}
        <input className={styles.afbtn} type={'button'} onClick={() => addOrRemoveMeal(true, "m1")} value={"(+) Add meal"} />
        <input className={styles.afbtn2} type={'button'} onClick={() => addOrRemoveMeal(false, "m1")} value={"(-) Remove meal"} /><hr></hr>
        <div className={styles.title}>Lunch</div><br></br>
        {mealComps2}
        {mealComps2.length == 0 ? <div className={styles.noFood}>No food has been added to lunch. Click on add food to select some foods and enter how much you've ate.</div> : ""}
        <input className={styles.afbtn} type={'button'} onClick={() => addOrRemoveMeal(true, "m2")} value={"(+) Add meal"} />
        <input className={styles.afbtn2} type={'button'} onClick={() => addOrRemoveMeal(false, "m2")} value={"(-) Remove meal"} /><hr></hr>
        <div className={styles.title}>Dinner</div><br></br>
        {mealComps3}
        {mealComps3.length == 0 ? <div className={styles.noFood}>No food has been added to dinner. Click on add food to select some foods and enter how much you've ate.</div> : ""}
        <input className={styles.afbtn} type={'button'} onClick={() => addOrRemoveMeal(true, "m3")} value={"(+) Add meal"} />
        <input className={styles.afbtn2} type={'button'} onClick={() => addOrRemoveMeal(false, "m3")} value={"(-) Remove meal"} /><hr></hr>
        <div className={styles.title}>Snacks</div><br></br>
        {mealComps4}
        {mealComps4.length == 0 ? <div className={styles.noFood}>No food has been added to snacks. Click on add food to select some foods and enter how much you've ate.</div> : ""}
        <input className={styles.afbtn} type={'button'} onClick={() => addOrRemoveMeal(true, "m4")} value={"(+) Add meal"} />
        <input className={styles.afbtn2} type={'button'} onClick={() => addOrRemoveMeal(false, "m4")} value={"(-) Remove meal"} /><hr></hr>
        <div className={styles.title}>Water (liter)</div><br></br>
        <input type={"number"} className={styles.i} defaultValue={day} id="water" /><br></br>
        <hr></hr>
        <div className={styles.title}>Exercise & workouts</div><br></br>
        {exerciseComps}
        {exerciseComps.length == 0 ? <div className={styles.noFood}>No exercise has been added! Click on add exercise to select some exercise and enter how many minutes you've worked out.</div> : ""}
        <input className={styles.afbtn} type={'button'} onClick={() => addOrRemoveEx(true)} value={"(+) Add exercise"} />
        <input className={styles.afbtn2} type={'button'} onClick={() => addOrRemoveEx(false)} value={"(-) Remove exercise"} /><br></br><br></br>
        <hr></hr>



        <input type={'button'} className={styles.ibtn} onClick={() => addDay()} value={"Update day"} />
    </div>)
}
export default Edit;