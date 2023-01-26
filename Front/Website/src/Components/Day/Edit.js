import Exercise from './Exercise/Exercise';
import ExerciseUpdate from './Exercise/ExerciseUpdate';
import FoodUpdate from './Meal/FoodUpdate';

function Edit({ date, exId, meal1Id, meal2Id, meal3Id, meal4Id, addOrRemoveEx, addOrRemoveMeal, addDay }) {
    let idx = 0;
    const exerciseComps = exId.map((exercise) =>
        <ExerciseUpdate time={exercise.time} activity={exercise.activity} id={idx++} />
    );
    idx = 0;
    const meal1Comps = meal1Id.map((meal) =>
        <FoodUpdate id={"m1" + idx++} food={meal.food} amount={meal.amount} />
    );
    idx = 0;
    const meal2Comps = meal2Id.map((meal) =>
        <FoodUpdate id={"m2" + idx++} food={meal.food} amount={meal.amount} />
    );
    idx = 0;
    const meal3Comps = meal3Id.map((meal) =>
        <FoodUpdate id={"m3" + idx++} food={meal.food} amount={meal.amount} />
    );
    idx = 0;
    const meal4Comps = meal4Id.map((meal) =>
        <FoodUpdate id={"m4" + idx++} food={meal.food} amount={meal.amount} />
    );

    return (<>
        Date: {date} <br></br>

        Water <input type='number' id='water' /><br></br>

        Exercise<br></br>
        {exerciseComps}<br></br>
        <input type={'button'} value='Add activity' onClick={() => addOrRemoveEx(true)} />
        <input type={'button'} value='Remove activity' onClick={() => addOrRemoveEx(false)} /><br></br>

        Breakfast<br></br>
        {meal1Comps}<br></br>
        <input type={'button'} onClick={() => addOrRemoveMeal(true, "m1")} value={"Add meal"} />
        <input type={'button'} onClick={() => addOrRemoveMeal(false, "m1")} value={"Remove meal"} /><hr></hr>
        Lunch<br></br>
        {meal2Comps}<br></br>
        <input type={'button'} onClick={() => addOrRemoveMeal(true, "m2")} value={"Add meal"} />
        <input type={'button'} onClick={() => addOrRemoveMeal(false, "m2")} value={"Remove meal"} /><hr></hr>
        Dinner<br></br>
        {meal3Comps}<br></br>
        <input type={'button'} onClick={() => addOrRemoveMeal(true, "m3")} value={"Add meal"} />
        <input type={'button'} onClick={() => addOrRemoveMeal(false, "m3")} value={"Remove meal"} /><hr></hr>
        Snacks<br></br>
        {meal4Comps}<br></br>
        <input type={'button'} onClick={() => addOrRemoveMeal(true, "m4")} value={"Add meal"} />
        <input type={'button'} onClick={() => addOrRemoveMeal(false, "m4")} value={"Remove meal"} /><hr></hr>

        <input type={'button'} onClick={() => addDay()} value={"Add day"} />
    </>)
}
export default Edit;