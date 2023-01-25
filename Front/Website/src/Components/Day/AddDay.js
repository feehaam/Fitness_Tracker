import { useNavigate } from 'react-router-dom';
import HttpPost from '../../API/HttpPost';
import { LoginCheck } from '../User Account/Login';
import { getUser } from '../User Account/UserInfo';
import HttpGet from '../../API/HttpGet';
import { useState } from 'react';
import Exercise from './Exercise/Exercise';
import Food from './Meal/Food';

export function AddDay() {
    const navigate = useNavigate();
    LoginCheck().then(logged => {
        if (!logged) {
            navigate('/login', { replace: true });
        }
    })

    const [exId, setExId] = useState([]);
    const [meal1Id, setMeal1Id] = useState([]);
    const [meal2Id, setMeal2Id] = useState([]);
    const [meal3Id, setMeal3Id] = useState([]);
    const [meal4Id, setMeal4Id] = useState([]);
    const [refreshPage, setRefreshPage] = useState(0);

    let idx = 0;
    let m1idx = 0, m2idx = 0, m3idx = 0, m4idx = 0;
    const exerciseComps = exId.map((number) =>
        <Exercise index={idx++} />
    );
    const mealComps1 = meal1Id.map((number) =>
        <Food index={"m1" + m1idx++} />
    )
    const mealComps2 = meal2Id.map((number) =>
        <Food index={"m2" + m2idx++} />
    )
    const mealComps3 = meal3Id.map((number) =>
        <Food index={"m3" + m3idx++} />
    )
    const mealComps4 = meal4Id.map((number) =>
        <Food index={"m4" + m4idx++} />
    )

    function addOrRemoveEx(add) {
        if (add) {
            let newExAr = exId;
            newExAr[idx] = ++idx;
            setExId(newExAr);
            setRefreshPage(refreshPage + 1);
        }
        else {
            if (idx === 1) setExId([]);
            let newExAr = [];
            let ptr = 0;
            for (let i = 0; i < idx - 1; i++) {
                newExAr[ptr++] = exId[i];
                setExId(newExAr);
                setRefreshPage(refreshPage + 1);
            }
        }
    }

    function addOrRemoveMeal(add, type) {
        if (add) {
            if (type === 'm1') {
                let newMealAr = meal1Id;
                newMealAr[m1idx] = ++m1idx;
                setMeal1Id(newMealAr);
                setRefreshPage(refreshPage + 1);
            }
            if (type === 'm2') {
                let newMealAr = meal2Id;
                newMealAr[m2idx] = ++m2idx;
                setMeal2Id(newMealAr);
                setRefreshPage(refreshPage + 1);
            }
            if (type === 'm3') {
                let newMealAr = meal3Id;
                newMealAr[m3idx] = ++m3idx;
                setMeal3Id(newMealAr);
                setRefreshPage(refreshPage + 1);
            }
            if (type === 'm4') {
                let newMealAr = meal4Id;
                newMealAr[m4idx] = ++m4idx;
                setMeal4Id(newMealAr);
                setRefreshPage(refreshPage + 1);
            }
        }
        else {
            if (type === 'm1') {
                if (m1idx === 1) setMeal1Id([]);
                let newExAr = [];
                let ptr = 0;
                for (let i = 0; i < m1idx - 1; i++) {
                    newExAr[ptr++] = meal1Id[i];
                    setMeal1Id(newExAr);
                    setRefreshPage(refreshPage + 1);
                }
            }
            if (type === 'm2') {
                if (m2idx === 1) setMeal2Id([]);
                let newExAr = [];
                let ptr = 0;
                for (let i = 0; i < m2idx - 1; i++) {
                    newExAr[ptr++] = meal2Id[i];
                    setMeal2Id(newExAr);
                    setRefreshPage(refreshPage + 1);
                }
            }
            if (type === 'm3') {
                if (m3idx === 1) setMeal3Id([]);
                let newExAr = [];
                let ptr = 0;
                for (let i = 0; i < m3idx - 1; i++) {
                    newExAr[ptr++] = meal3Id[i];
                    setMeal3Id(newExAr);
                    setRefreshPage(refreshPage + 1);
                }
            }
            if (type === 'm4') {
                if (m4idx === 1) setMeal4Id([]);
                let newExAr = [];
                let ptr = 0;
                for (let i = 0; i < m4idx - 1; i++) {
                    newExAr[ptr++] = meal4Id[i];
                    setMeal4Id(newExAr);
                    setRefreshPage(refreshPage + 1);
                }
            }
        }
    }

    async function addDay() {
        const user = await getUser();
        const response = await HttpGet("get_userid/" + user.username);
        const userId = response.data;
        let dayData = {
            "id": 0,
            "date": "string",
            "meals": [
                {
                    "id": 0,
                    "foods": [
                        0
                    ],
                    "amount": [
                        0
                    ]
                }
            ],
            "water": {
                "id": 0,
                "amount": 0
            },
            "exercises": [
                {
                    "id": 0,
                    "activity": 0,
                    "time": 0
                }
            ]
        }

        let date = document.getElementById("date").value;

        const w = document.getElementById("water").value;
        if (!isNaN(w) && w > 0) {
            let water = {
                "id": 0,
                "amount": document.getElementById("water").value,
            }
            dayData.water = water;
        }

        let exercise = [], exptr = 0;
        for (let i = 0; i < idx; i++) {
            const acInput = document.getElementById("exAc" + i).value;
            const tiInput = document.getElementById("exTi" + i).value;
            if (!isNaN(tiInput) && parseFloat(tiInput) > 0) {
                exercise[exptr++] = {
                    "id": 0,
                    "activity": parseInt(acInput),
                    "time": parseFloat(tiInput)
                }
            }
        }
        dayData.exercises = exercise;
        console.log(exercise);

        let mi = 0;
        let meal1 = {
            "id": 0,
            "foods": [],
            "amount": []
        }
        exptr = 0;
        for (let i = 0; i < m1idx; i++) {
            const foInput = document.getElementById("meFom1" + i).value;
            const amInput = document.getElementById("meAmm1" + i).value;
            if (!isNaN(amInput) && parseFloat(amInput) > 0) {
                meal1.foods[exptr] = parseInt(foInput);
                meal1.amount[exptr++] = parseInt(amInput);
            }
        }
        if (meal1.foods.length > 0) {
            dayData.meals[mi++] = meal1;
        }

        let meal2 = {
            "id": 0,
            "foods": [],
            "amount": []
        }
        exptr = 0;
        for (let i = 0; i < m2idx; i++) {
            const foInput = document.getElementById("meFom2" + i).value;
            const amInput = document.getElementById("meAmm2" + i).value;
            if (!isNaN(amInput) && parseFloat(amInput) > 0) {
                meal2.foods[exptr] = parseInt(foInput);
                meal2.amount[exptr++] = parseInt(amInput);
            }
        }
        if (meal2.foods.length > 0) {
            dayData.meals[mi++] = meal2;
        }

        let meal3 = {
            "id": 0,
            "foods": [],
            "amount": []
        }
        exptr = 0;
        for (let i = 0; i < m3idx; i++) {
            const foInput = document.getElementById("meFom3" + i).value;
            const amInput = document.getElementById("meAmm3" + i).value;
            if (!isNaN(amInput) && parseFloat(amInput) > 0) {
                meal3.foods[exptr] = parseInt(foInput);
                meal3.amount[exptr++] = parseInt(amInput);
            }
        }
        if (meal3.foods.length > 0) {
            dayData.meals[mi++] = meal3;
        }

        let meal4 = {
            "id": 0,
            "foods": [],
            "amount": []
        }
        exptr = 0;
        for (let i = 0; i < m4idx; i++) {
            const foInput = document.getElementById("meFom4" + i).value;
            const amInput = document.getElementById("meAmm4" + i).value;
            if (!isNaN(amInput) && parseFloat(amInput) > 0) {
                meal4.foods[exptr] = parseInt(foInput);
                meal4.amount[exptr++] = parseInt(amInput);
            }
        }
        if (meal4.foods.length > 0) {
            dayData.meals[mi++] = meal4;
        }

        date = userId + "@" + date;
        dayData.date = date;

        const submitResponse = await HttpPost("add_day?userId=" + userId + "&userName=" + user.username + "&password=" + user.password, dayData);
        console.log(submitResponse);
    }

    return (<>
        <form>
            <input type={"date"} id="date" /><br></br>

            {mealComps1}
            <input type={'button'} onClick={() => addOrRemoveMeal(true, "m1")} value={"Add meal"} />
            <input type={'button'} onClick={() => addOrRemoveMeal(false, "m1")} value={"Remove meal"} /><hr></hr>
            {mealComps2}
            <input type={'button'} onClick={() => addOrRemoveMeal(true, "m2")} value={"Add meal"} />
            <input type={'button'} onClick={() => addOrRemoveMeal(false, "m2")} value={"Remove meal"} /><hr></hr>
            {mealComps3}
            <input type={'button'} onClick={() => addOrRemoveMeal(true, "m3")} value={"Add meal"} />
            <input type={'button'} onClick={() => addOrRemoveMeal(false, "m3")} value={"Remove meal"} /><hr></hr>
            {mealComps4}
            <input type={'button'} onClick={() => addOrRemoveMeal(true, "m4")} value={"Add meal"} />
            <input type={'button'} onClick={() => addOrRemoveMeal(false, "m4")} value={"Remove meal"} /><hr></hr>
            <input type={"number"} id="water" placeholder='Water' /><br></br>

            {exerciseComps}
            <input type={'button'} onClick={() => addOrRemoveEx(true)} value={"Add exercise"} />
            <input type={'button'} onClick={() => addOrRemoveEx(false)} value={"Remove exercise"} /><br></br><br></br>

            <input type={'button'} onClick={() => addDay()} value={"Add day"} />
        </form>
    </>)
}