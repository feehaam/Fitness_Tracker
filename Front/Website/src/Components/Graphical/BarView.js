import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from '../Graphical/PieView.module.css'

export default function BarView({ title, data, colors, sizeX, sizeY, required }) {
    const para1 = 'required'
    const para2 = 'value'
    for (let i = 0; i < data.length; i++) {
        data[i] = {
            name: data[i].name,
            value: data[i].value,
            required: required[i] - data[i].value > 0 ? required[i] - data[i].value : 0
        }
    }
    if(data === null || data.length === 0) return (<><div className={styles.container}><h3>Not enough data to make a Bar chart on <br></br> {title}</h3></div></>)
    return (<>
        <div className={styles.container}>
            <ResponsiveContainer width={sizeX * 36.5} height={sizeY * 30}>
                <BarChart
                    width={100}
                    height={30}
                    data={data}
                    margin={{
                        right: 10,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={para2} stackId="a" fill={colors[0]} />
                    {required != null && required.length > 0 ?
                        <Bar dataKey={para1} stackId="a" fill="#8884d8" /> :
                        ""}
                </BarChart>
            </ResponsiveContainer>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    </>)


}