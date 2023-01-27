import styles from '../../../Styles/Styles.module.css'
export default function Food({index}) {
    return (<>
        <select id={"meFo"+index} className={styles.selectItem}>
            <option value={1}>Item 1</option>
            <option value={2}>Item 2</option>
            <option value={3}>Item 3</option>
        </select>
        <input type={"number"}  id={"meAm"+index} placeholder={"Enter amount (g)"} className={styles.itemVal} />
        <br></br> 
    </>)
}
