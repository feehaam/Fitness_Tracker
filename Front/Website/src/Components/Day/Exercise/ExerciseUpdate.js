import { useState } from "react"
import styles from '../../../Styles/Styles.module.css'

export default function ExerciseUpdate({ time, activity, id, activities }) {
    const [editA, setEditA] = useState(false);
    const [editT, setEditT] = useState(false);
    return (<>
        <select id={"exAc" + id} className={styles.selectItem}>
            <option value={-1}>Select</option>
            {activities.map((act) => {
                return <>
                    {act.id === activity ? <option value={act.id} selected>{act.name}</option> : <option value={act.id}>{act.name}</option>}
                </>
            })}
        </select>
        <input className={styles.itemVal}  type={'number'} id={"exTi" + id} defaultValue={time} /><br></br>
    </>)
}
