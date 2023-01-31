import styles from '../../Styles/Styles.module.css'
export default function Attributes({ index }) {
    return (<>
        <input type={"text"} id={"opn" + index} placeholder={"Attribute name"} className={styles.selectItem} />
        <input type={"number"} id={"opv" + index} placeholder={"Atrtribute value/hour"} className={styles.itemVal} />
        <br></br>
    </>)
}
