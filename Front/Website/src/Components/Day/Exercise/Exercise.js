import styles from '../../../Styles/Styles.module.css'
export default function Exercise({index}) {
    return (<>
        <select id={"exAc"+index} className={styles.selectItem}>
            <option value={1}>Item 1</option>
            <option value={2}>Item 2</option>
            <option value={3}>Item 3</option>
        </select>
        <input type={"number"}  id={"exTi"+index} placeholder={"Enter time (min)"} className={styles.itemVal} />
        <br></br> 
    </>)
}
