import { useNavigate } from 'react-router-dom';
import HttpPost from '../../API/HttpPost';
import { LoginCheck } from '../User Account/Login';

export function AddFood() {
    const navigate = useNavigate();
    LoginCheck().then(logged => {
        if (!logged) {
            navigate('/login', { replace: true });
        }
    })

    function addFood() {
        let name, calories, carbohydrateDietryFiber, carbohydrateSugar, protein, fatSaturated, fatTrans,
            cholesterol, iron, magnesium, calcium, sodium, potassium, cobalamin, vitamin, vitaminA, vitaminB, vitaminC,
            vitaminD, vitaminE, vitaminK;
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

        console.log(food);
        console.log(key);

        HttpPost("create_food?adminKey="+key, food).then((response) => {
            console.log(response);
        })
    }

    return (<>
        <form>

            <label for="name">Name</label> <br></br>
            <input type={"text"} id={"name"} /><br></br>

            <label for="calories">Calories</label> <br></br>
            <input type={"number"} id={"calories"} /><br></br>

            <label for="carbohydrateDietryFiber">Carb. DietryFiber</label> <br></br>
            <input type={"number"} id={"carbohydrateDietryFiber"} /><br></br>

            <label for="carbohydrateSugar">Car. Sugar</label> <br></br>
            <input type={"number"} id={"carbohydrateSugar"} /><br></br>

            <label for="protein">Protein</label> <br></br>
            <input type={"number"} id={"protein"} /><br></br>

            <label for="fatSaturated">Fat Saturated</label> <br></br>
            <input type={"number"} id={"fatSaturated"} /><br></br>

            <label for="fatTrans">Fat Trans</label> <br></br>
            <input type={"number"} id={"fatTrans"} /><br></br>

            <label for="cholesterol">Cholesterol</label> <br></br>
            <input type={"number"} id={"cholesterol"} /><br></br>

            <label for="iron">Iron</label> <br></br>
            <input type={"number"} id={"iron"} /><br></br>

            <label for="magnesium">Magnesium</label> <br></br>
            <input type={"number"} id={"magnesium"} /><br></br>

            <label for="calcium">Calcium</label> <br></br>
            <input type={"number"} id={"calcium"} /><br></br>

            <label for="sodium">Sodium</label> <br></br>
            <input type={"number"} id={"sodium"} /><br></br>

            <label for="potassium">Potassium</label> <br></br>
            <input type={"number"} id={"potassium"} /><br></br>

            <label for="cobalamin">Cobalamin</label> <br></br>
            <input type={"number"} id={"cobalamin"} /><br></br>

            <label for="vitaminA">VitaminA</label> <br></br>
            <input type={"number"} id={"vitaminA"} /><br></br>

            <label for="vitaminB">VitaminB</label> <br></br>
            <input type={"number"} id={"vitaminB"} /><br></br>

            <label for="vitaminC">VitaminC</label> <br></br>
            <input type={"number"} id={"vitaminC"} /><br></br>

            <label for="vitaminD">VitaminD</label> <br></br>
            <input type={"number"} id={"vitaminD"} /><br></br>

            <label for="vitaminE">VitaminE</label> <br></br>
            <input type={"number"} id={"vitaminE"} /><br></br>

            <label for="vitaminK">VitaminK</label> <br></br>
            <input type={"number"} id={"vitaminK"} /><br></br>

            <label for="key">Admin key</label> <br></br>
            <input type={"text"} id={"key"} placeholder="" /><br></br>

            <input type={"button"} value="Add food" onClick={addFood} />

        </form>
    </>)
}