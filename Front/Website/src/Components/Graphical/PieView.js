import { Cell, Pie, PieChart } from "recharts"
import PieItem from "./PieItem"
import styles from './PieView.module.css'

export default function PieView({ title, data, colors, size }) {
    if (data === null || data.length === 0) return (<><div className={styles.container}><h3>Not enough data to make a Pie chart on <br></br> {title}</h3></div></>)
    return (<>
        <div className={styles.container}>
            <div className={styles.views}>
                <div className={styles.piebg}>
                    <PieChart width={25 * size} height={25 * size}>
                        <Pie data={data} cx="50%" cy="50%" outerRadius={8 * size} label>
                            {
                                data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={colors[index]}
                                    />
                                ))
                            }
                        </Pie>
                    </PieChart>
                </div>
                <div className={styles.sidebg}>
                    <ul>
                        {data.map((entry, index) => (
                            <PieItem
                                key={`cell-${index}`}
                                entry={entry}
                                color={colors[index]}
                            />
                        ))}
                    </ul>
                </div>
                <br></br>
            </div>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    </>)
}