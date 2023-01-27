import { useState } from "react";
import styles from '../../../Styles/Styles.module.css'

export default function FoodUpdate({ id, food, amount, foods }) {
    const [editA, setEditA] = useState(false);
    const [editT, setEditT] = useState(false);
    return (<>
        <select id={"meFo" + id} className={styles.selectItem}>
            <option value={-1}>Select</option>
            {foods.map((act) => {
                return <>
                    {act.id === food ? <option value={act.id} selected>{act.name}</option> : <option value={act.id}>{act.name}</option>}
                </>
            })}
        </select>
        <input className={styles.itemVal} type={'number'} id={"meAm" + id} defaultValue={amount} /><br></br>
    </>)
}