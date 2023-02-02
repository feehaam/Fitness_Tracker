import { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import styles from '../../Styles/Styles.module.css'
import { requiredCalories, totalAteCalories, totalExercise } from '../Helper/CalorieCalc';
import { CaloriesHeadingDisplay } from './CaloriesHeadingDisplay';

export default function CaloriesHeading({ user, foods, activities }) {
    const loading = "Loading...";

    let dateToSet = new Date().toJSON().slice(0, 10);
    const todaysDate = new Date().toJSON().slice(0, 10);
    try {
        let savedDate = window.localStorage.getItem('currentDate');
        var d = new Date(savedDate);
        const pdate = d.toJSON().slice(0, 10);
        dateToSet = pdate;
    }
    catch (error) {

    }

    const [date, setDate] = useState(dateToSet)
    const [today, setToday] = useState(new Date());

    function changeDate(add) {
        let d = today;
        if (add) d.setDate(d.getDate() + 1);
        else d.setDate(d.getDate() - 1);
        setToday(d);
        setDate(d.toJSON().slice(0, 10));
        window.localStorage.setItem('currentDate', d);
    }

    function updateTheme(color) {
        window.localStorage.setItem('color', color);
        window.location.reload();
    }

    function backToToday() {
        let d = new Date();
        setToday(d);
        setDate(d.toJSON().slice(0, 10));
        window.localStorage.setItem('currentDate', d);
    }

    function pickDate() {
        const pdate = document.getElementById('pickDate').value;
        setDate(pdate)
    }

    if (user == null) return (loading);
    else return (<>
        <table>
            <tr>
                <td>
                    {user.gender ? <img src='../../../Icons/femaleavatar.png' className={styles.profile}>
                    </img> : <img src='../../../Icons/maleavatar.png' className={styles.profile}>
                    </img>}
                </td>
                <td>
                    <div className={styles.CHName}>
                        {user.name}
                    </div>
                    <div className={styles.CHWeight}>
                        Current weight: {user.weight} kg
                    </div>
                    <div className={styles.bubbleRow}>
                        <div style={{
                            backgroundColor: '#333333',
                            width: '20px', height: '20px', padding: '10px', borderRadius: '50%', marginRight: '10px', boxShadow: '2px 2px 5px #555'
                        }} onClick={() => { updateTheme('#333333') }}></div>
                        <div style={{
                            backgroundColor: '#47DA6C',
                            width: '20px', height: '20px', padding: '10px', borderRadius: '50%', marginRight: '10px', boxShadow: '2px 2px 5px #555'
                        }} onClick={() => { updateTheme('#47DA6C') }}></div>
                        <div style={{
                            backgroundColor: '#00B6DA',
                            width: '20px', height: '20px', padding: '10px', borderRadius: '50%', marginRight: '10px', boxShadow: '2px 2px 5px #555'
                        }} onClick={() => { updateTheme('#00B6DA') }}></div>
                        <div style={{
                            backgroundColor: '#FF6347',
                            width: '20px', height: '20px', padding: '10px', borderRadius: '50%', marginRight: '10px', boxShadow: '2px 2px 5px #555'
                        }} onClick={() => { updateTheme('#FF6347') }}></div>
                        <div style={{
                            backgroundColor: '#f8f8f8',
                            width: '20px', height: '20px', padding: '10px', borderRadius: '50%', marginRight: '10px', boxShadow: '2px 2px 5px #555'
                        }} onClick={() => { updateTheme('#f8f8f8') }}></div>
                    </div>
                </td>
            </tr>
        </table>
        <hr></hr>
        <a onClick={() => { changeDate(false) }}>----</a>
        {date} <input type={"date"} id={'pickDate'} className={styles.datePick} defaultValue={date} onChange={() => pickDate()} />
        <a onClick={() => changeDate(true)}>++++</a><br></br>
        {totalAteCalories(user, date, foods) == 0 ? <div>
            <Link to="/add_day" state={{ from: date }}>
                <input type={'button'} value={'Add meals & exercise'} />
            </Link>
        </div> : <CaloriesHeadingDisplay recCal={requiredCalories(user, date)} conCal={totalAteCalories(user, date, foods)} burCal={totalExercise(user, date, activities)} date={date} />}<br></br>
        {dateToSet !== todaysDate ? <div onClick={() => backToToday()}>Back to today</div> : ""}
    </>)
}