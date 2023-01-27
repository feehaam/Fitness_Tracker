import { useNavigate } from 'react-router-dom';
import HttpPost from '../../API/HttpPost';
import { LoginCheck } from '../User Account/Login';
import styles from '../../Styles/Styles.module.css'

export function AddFood() {
    const navigate = useNavigate();
    LoginCheck().then(logged => {
        if (!logged) {
            navigate('/login', { replace: true });
        }
    })

    function addFood() {
        let name, calories, carbohydrateDietryFiber, carbohydrateSugar, protein, fatSaturated, fatTrans,
            cholesterol, iron, magnesium, calcium, sodium, potassium, cobalamin, vitamin, vitaminA, vitaminB,
            vitaminC, vitaminD, vitaminE, vitaminK;
        let key = document.getElementById("key").value;

        let val = parseFloat(document.getElementById("iron").value);
        iron = isNaN(val) ? 0.0 : val;
        val = document.getElementById("name").value;
        name = val;
        val = parseFloat(document.getElementById("carbohydrateDietryFiber").value);
        carbohydrateDietryFiber = isNaN(val) ? 0.0 : val;
        val = parseFloat(document.getElementById("calories").value);
        calories = isNaN(val) ? 0.0 : val;
        val = parseFloat(document.getElementById("carbohydrateSugar").value);
        carbohydrateSugar = isNaN(val) ? 0.0 : val;
        val = parseFloat(document.getElementById("protein").value);
        protein = isNaN(val) ? 0.0 : val;
        val = parseFloat(document.getElementById("fatSaturated").value);
        fatSaturated = isNaN(val) ? 0.0 : val;
        val = parseFloat(document.getElementById("fatTrans").value);
        fatTrans = isNaN(val) ? 0.0 : val;
        val = parseFloat(document.getElementById("cholesterol").value);
        cholesterol = isNaN(val) ? 0.0 : val;
        val = parseFloat(document.getElementById("magnesium").value);
        magnesium = isNaN(val) ? 0.0 : val;
        val = parseFloat(document.getElementById("calcium").value);
        calcium = isNaN(val) ? 0.0 : val;
        val = parseFloat(document.getElementById("sodium").value);
        sodium = isNaN(val) ? 0.0 : val;
        val = parseFloat(document.getElementById("potassium").value);
        potassium = isNaN(val) ? 0.0 : val;
        val = parseFloat(document.getElementById("cobalamin").value);
        cobalamin = isNaN(val) ? 0.0 : val;
        val = parseFloat(document.getElementById("vitaminA").value);
        vitaminA = isNaN(val) ? 0.0 : val;
        val = parseFloat(document.getElementById("vitaminB").value);
        vitaminB = isNaN(val) ? 0.0 : val;
        val = parseFloat(document.getElementById("vitaminC").value);
        vitaminC = isNaN(val) ? 0.0 : val;
        val = parseFloat(document.getElementById("vitaminD").value);
        vitaminD = isNaN(val) ? 0.0 : val;
        val = parseFloat(document.getElementById("vitaminE").value);
        vitaminE = isNaN(val) ? 0.0 : val;
        val = parseFloat(document.getElementById("vitaminK").value);
        vitaminK = isNaN(val) ? 0.0 : val;

        vitamin = vitaminA + vitaminB + vitaminC + vitaminD + vitaminE + vitaminK;

        const food = {
            "id": 0,
            "name": name,
            "calories": calories,
            "iron": iron,
            "carbohydrateDietryFiber": carbohydrateDietryFiber,
            "carbohydrateSugar": carbohydrateSugar,
            "protein": protein,
            "fatSaturated": fatSaturated,
            "fatTrans": fatTrans,
            "cholesterol": cholesterol,
            "magnesium": magnesium,
            "calcium": calcium,
            "sodium": sodium,
            "potassium": potassium,
            "cobalamin": cobalamin,
            "vitamin": vitamin,
            "vitaminA": vitaminA,
            "vitaminB": vitaminB,
            "vitaminC": vitaminC,
            "vitaminD": vitaminD,
            "vitaminE": vitaminE,
            "vitaminK": vitaminK
        }

        HttpPost("create_food?adminKey=" + key, food).then((response) => {
            console.log(response);
        })
    }

    return (<>
        <form className={styles.container}>

            <label for="name" className={styles.label}>Name</label> <br></br>
            <input type={"text"} id={"name"} className={styles.i} /><br></br>

            <label for="calories" className={styles.label}>Calories</label> <br></br>
            <input type={"number"} id={"calories"} className={styles.i} /><br></br>

            <label for="carbohydrateDietryFiber" className={styles.label}>Carb. DietryFiber</label> <br></br>
            <input type={"number"} id={"carbohydrateDietryFiber"} className={styles.i} /><br></br>

            <label for="carbohydrateSugar" className={styles.label}>Car. Sugar</label> <br></br>
            <input type={"number"} id={"carbohydrateSugar"} className={styles.i} /><br></br>

            <label for="protein" className={styles.label}>Protein</label> <br></br>
            <input type={"number"} id={"protein"} className={styles.i} /><br></br>

            <label for="fatSaturated" className={styles.label}>Fat Saturated</label> <br></br>
            <input type={"number"} id={"fatSaturated"} className={styles.i} /><br></br>

            <label for="fatTrans" className={styles.label}>Fat Trans</label> <br></br>
            <input type={"number"} id={"fatTrans"} className={styles.i} /><br></br>

            <label for="cholesterol" className={styles.label}>Cholesterol</label> <br></br>
            <input type={"number"} id={"cholesterol"} className={styles.i} /><br></br>

            <label for="iron" className={styles.label}>Iron</label> <br></br>
            <input type={"number"} id={"iron"} className={styles.i} /><br></br>

            <label for="magnesium" className={styles.label}>Magnesium</label> <br></br>
            <input type={"number"} id={"magnesium"} className={styles.i} /><br></br>

            <label for="calcium" className={styles.label}>Calcium</label> <br></br>
            <input type={"number"} id={"calcium"} className={styles.i} /><br></br>

            <label for="sodium" className={styles.label}>Sodium</label> <br></br>
            <input type={"number"} id={"sodium"} className={styles.i} /><br></br>

            <label for="potassium" className={styles.label}>Potassium</label> <br></br>
            <input type={"number"} id={"potassium"} className={styles.i} /><br></br>

            <label for="cobalamin" className={styles.label}>Cobalamin</label> <br></br>
            <input className={styles.i} type={"number"} id={"cobalamin"} /><br></br>

            <label className={styles.label} for="vitaminA">VitaminA</label> <br></br>
            <input className={styles.i} type={"number"} id={"vitaminA"} /><br></br>

            <label className={styles.label} for="vitaminB">VitaminB</label> <br></br>
            <input className={styles.i} type={"number"} id={"vitaminB"} /><br></br>

            <label className={styles.label} for="vitaminC">VitaminC</label> <br></br>
            <input className={styles.i} type={"number"} id={"vitaminC"} /><br></br>

            <label className={styles.label} for="vitaminD">VitaminD</label> <br></br>
            <input className={styles.i} type={"number"} id={"vitaminD"} /><br></br>

            <label className={styles.label} for="vitaminE">VitaminE</label> <br></br>
            <input className={styles.i} type={"number"} id={"vitaminE"} /><br></br>

            <label className={styles.label} for="vitaminK">VitaminK</label> <br></br>
            <input className={styles.i} type={"number"} id={"vitaminK"} /><br></br>

            <label className={styles.label} for="key">Admin key</label> <br></br>
            <input className={styles.i} type={"text"} id={"key"} placeholder="" /><br></br>

            <hr></hr>

            <div className={styles.enter}>
                <input type={"button"} className={styles.ibtn} value="Add food" onClick={addFood} />
            </div>

        </form>
    </>)
}