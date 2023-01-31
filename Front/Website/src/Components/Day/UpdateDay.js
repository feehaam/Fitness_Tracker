import { useNavigate } from 'react-router-dom';
import { LoginCheck } from '../User Account/Login';
import { getUser } from "../Helper/UserInfo"
import HttpGet from '../../API/HttpGet';
import { useCallback, useEffect, useState } from 'react';
import Edit from './Edit';
import HttpPost from '../../API/HttpPost';
import { getActivities } from '../Helper/GetActivities';

function UpdateDay() {
    const navigate = useNavigate();
    LoginCheck().then(logged => {
        if (!logged) {
            navigate('/login', { replace: true });
        }
    })

    const [day, setDay] = useState({});
    const [exId, setExId] = useState([]);
    const [meal1Id, setMeal1Id] = useState([]);
    const [meal2Id, setMeal2Id] = useState([]);
    const [meal3Id, setMeal3Id] = useState([]);
    const [meal4Id, setMeal4Id] = useState([]);
    const [wat, setWat] = useState(-1);
    const [refreshPage, setRefreshPage] = useState(0);


    let date = '2023-01-31';
    const userInfo = getUser();

    const fetchDay = useCallback(async () => {
        HttpGet("get_userid/" + userInfo.username).then(userIdRes => {
            const userId = userIdRes.data;
            HttpGet("get_user/" + userId + "?userName=" + userInfo.username + "&password=" + userInfo.password).then(userRes => {
                const days = userRes.data.days;
                const dateWithId = userId + "@" + date;
                let day = null;
                for (let i = 0; i < days.length; i++) {
                    if (days[i].date === dateWithId)
                        day = days[i];
                }
                setDay(day);
                setWat(day.water.amount);
                for (let i = 0; i < day.exercises.length; i++) {
                    let newAr = exId;
                    newAr[i] = day.exercises[i];
                    setExId(newAr);
                    setRefreshPage(refreshPage + 1);
                }
                for (let m = 0; m < day.meals.length; m++) {
                    let newAr = [];
                    for (let i = 0; i < day.meals[m].foods.length; i++) {
                        if (day.meals[m].foods[i] == 0);
                        else newAr[i] = {
                            'food': day.meals[m].foods[i],
                            'amount': day.meals[m].amount[i]
                        }
                        if (m == 0 && newAr.length > 0) setMeal1Id(newAr);
                        else if (m == 1 && newAr.length > 0) setMeal2Id(newAr);
                        else if (m == 2 && newAr.length > 0) setMeal3Id(newAr);
                        else if (m == 3 && newAr.length > 0) setMeal4Id(newAr);
                        setRefreshPage(refreshPage + 1);
                    }
                }
            })
        })
    }, []);

    useEffect(() => {
        fetchDay();
    }, [fetchDay]);

    function addOrRemoveEx(add) {
        let idx = exId.length;
        if (add) {
            let newExAr = exId;
            newExAr[idx] = {
                'activity': 0,
                'time': 0
            }
            setExId(newExAr);
            setRefreshPage(refreshPage + 1);
        }
        else {
            if (exId.length === 1) setExId([]);
            let newExAr = [];
            let ptr = 0;
            for (let i = 0; i < exId.length - 1; i++) {
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
                newMealAr[newMealAr.length] = {
                    'food': 0,
                    'amount': 0
                }
                setMeal1Id(newMealAr);
                setRefreshPage(refreshPage + 1);
            }
            if (type === 'm2') {
                let newMealAr = meal2Id;
                newMealAr[newMealAr.length] = {
                    'food': 0,
                    'amount': 0
                }
                setMeal2Id(newMealAr);
                setRefreshPage(refreshPage + 1);
            }

            if (type === 'm3') {
                let newMealAr = meal3Id;
                newMealAr[newMealAr.length] = {
                    'food': 0,
                    'amount': 0
                }
                setMeal3Id(newMealAr);
                setRefreshPage(refreshPage + 1);
            }

            if (type === 'm4') {
                let newMealAr = meal4Id;
                newMealAr[newMealAr.length] = {
                    'food': 0,
                    'amount': 0
                }
                setMeal4Id(newMealAr);
                setRefreshPage(refreshPage + 1);
            }
        }
        else {
            if (type === 'm1') {
                if (meal1Id.length === 1) setMeal1Id([]);
                let newExAr = [];
                for (let i = 0; i < meal1Id.length - 1; i++) {
                    newExAr[i] = meal1Id[i];
                    setMeal1Id(newExAr);
                    setRefreshPage(refreshPage + 1);
                }
            }
            if (type === 'm2') {
                if (meal2Id.length === 1) setMeal2Id([]);
                let newExAr = [];
                for (let i = 0; i < meal2Id.length - 1; i++) {
                    newExAr[i] = meal2Id[i];
                }
                setMeal2Id(newExAr);
                setRefreshPage(refreshPage + 1);
            }

            if (type === 'm3') {
                if (meal3Id.length === 1) setMeal3Id([]);
                let newExAr = [];
                for (let i = 0; i < meal3Id.length - 1; i++) {
                    newExAr[i] = meal3Id[i];
                }
                setMeal3Id(newExAr);
                setRefreshPage(refreshPage + 1);
            }

            if (type === 'm4') {
                if (meal4Id.length === 1) setMeal4Id([]);
                let newExAr = [];
                for (let i = 0; i < meal4Id.length - 1; i++) {
                    newExAr[i] = meal4Id[i];
                }
                setMeal4Id(newExAr);
                setRefreshPage(refreshPage + 1);
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

        const w = document.getElementById("water").value;
        if (!isNaN(w) && w > 0) {
            let water = {
                "id": 0,
                "amount": document.getElementById("water").value,
            }
            dayData.water = water;
        }

        let exercise = [], exptr = 0;
        for (let i = 0; i < exId.length; i++) {
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
        for (let i = 0; i < meal1Id.length; i++) {
            const foInput = document.getElementById("meFom1" + i).value;
            const amInput = document.getElementById("meAmm1" + i).value;
            if (!isNaN(amInput) && parseFloat(amInput) > 0) {
                meal1.foods[exptr] = parseInt(foInput);
                meal1.amount[exptr++] = parseFloat(amInput);
            }
        }
        dayData.meals[mi++] = meal1;

        let meal2 = {
            "id": 0,
            "foods": [],
            "amount": []
        }
        exptr = 0;
        for (let i = 0; i < meal2Id.length; i++) {
            const foInput = document.getElementById("meFom2" + i).value;
            const amInput = document.getElementById("meAmm2" + i).value;
            if (!isNaN(amInput) && parseFloat(amInput) > 0) {
                meal2.foods[exptr] = parseInt(foInput);
                meal2.amount[exptr++] = parseFloat(amInput);
            }
        }
        dayData.meals[mi++] = meal2;

        let meal3 = {
            "id": 0,
            "foods": [],
            "amount": []
        }
        exptr = 0;
        for (let i = 0; i < meal3Id.length; i++) {
            const foInput = document.getElementById("meFom3" + i).value;
            const amInput = document.getElementById("meAmm3" + i).value;
            if (!isNaN(amInput) && parseFloat(amInput) > 0) {
                meal3.foods[exptr] = parseInt(foInput);
                meal3.amount[exptr++] = parseFloat(amInput);
            }
        }
        dayData.meals[mi++] = meal3;

        let meal4 = {
            "id": 0,
            "foods": [],
            "amount": []
        }
        exptr = 0;
        for (let i = 0; i < meal4Id.length; i++) {
            const foInput = document.getElementById("meFom4" + i).value;
            const amInput = document.getElementById("meAmm4" + i).value;
            if (!isNaN(amInput) && parseFloat(amInput) > 0) {
                meal4.foods[exptr] = parseInt(foInput);
                meal4.amount[exptr++] = parseFloat(amInput);
            }
        }
        dayData.meals[mi++] = meal4;
        
        dayData.date = userId + "@" + date;

        console.log(dayData);

        const updateResponse = await HttpPost("update_day?userId=" + userId + "&userName=" + user.username + "&password=" + user.password, dayData);
        console.log(updateResponse);
        
        const addResponse = await HttpPost("add_day?userId=" + userId + "&userName=" + user.username + "&password=" + user.password, dayData);
        console.log(addResponse);
        
    }

    return (<>
        <Edit wat={wat} date={date} exId={exId} addDay={addDay} addOrRemoveMeal={addOrRemoveMeal} day={day} meal1Id={meal1Id} meal2Id={meal2Id} meal3Id={meal3Id} meal4Id={meal4Id} addOrRemoveEx={addOrRemoveEx} />
    </>)
}

export default UpdateDay;