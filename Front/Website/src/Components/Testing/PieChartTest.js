import { Cell, Pie, PieChart } from "recharts"
import { randomColor, randomColorArray } from "../Graphical/RandomColor"

export default function PieChartTest() {

    const data = [
        {
            "name": "Group A",
            "value": 400
        },
        {
            "name": "Group B",
            "value": 300
        },
        {
            "name": "Group C",
            "value": 500
        },
        {
            "name": "Group D",
            "value": 200
        },
        {
            "name": "Group E",
            "value": 278
        },
        {
            "name": "Group F",
            "value": 189
        }
    ]

    const color = randomColorArray(data.length, 'lighter');

    return (<>
        <h1>Pie chart</h1>
        <PieChart width={250} height={250}>
            <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
                {
                    data.map((entry, index) => (
                        <Cell 
                        key={`cell-${index}`} 
                        fill={color[index]}
                         />
                    ))
                }
            </Pie>
        </PieChart>
    </>)
}