import { useCallback, useEffect, useState } from 'react';
import styles from '../../../Styles/Styles.module.css'
import { getActivities } from '../../Helper/GetActivities';
export default function Exercise({ index, activities }) {
    return (<>
        <select id={"exAc" + index} className={styles.selectItem}>
            <option value={-1}>Select</option>
            {activities.map((activity) => {
                return <option value={activity.id}>{activity.name}</option>
            })}
        </select>
        <input type={"number"} id={"exTi" + index} placeholder={"Enter time (min)"} className={styles.itemVal} />
        <br></br>
    </>)
}
