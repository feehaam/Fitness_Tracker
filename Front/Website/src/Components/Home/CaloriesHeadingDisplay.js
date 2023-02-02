import { Link } from "react-router-dom";

export function CaloriesHeadingDisplay({recCal, conCal, burCal, date}) {
    const dif = recCal - conCal + burCal;
    return <>
        <div>
            Required calories: {recCal} cal<br></br>
            Cosumed from food: {conCal} cal<br></br>
            Burned from food: {recCal-conCal} cal<br></br>
            Burned from exercises: {burCal} cal<br></br>
            {dif > 0 ? "Total Burned: " + dif : "Total gained: " + -dif} cal<br></br>
            Expected loss: {parseInt(dif/7.7)} g<br></br>
            <Link to="/update_day" state={{ from: date }}>
                <input type={'button'} value={'Update meals & exercise'} />
            </Link>
        </div>
    </>
} 