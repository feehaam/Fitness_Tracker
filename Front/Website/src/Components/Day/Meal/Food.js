import styles from '../../../Styles/Styles.module.css'
export default function Food({ index, foods }) {
    return (<>
        <select id={"meFo" + index} className={styles.selectItem}>
            <option value={-1}>Select</option>
            {foods.map((food) => {
                return <option value={food.id}>{food.name}</option>
            })}
        </select>
        <input type={"number"} id={"meAm" + index} placeholder={"Enter amount (g)"} className={styles.itemVal} />
        <br></br>
    </>)
}
