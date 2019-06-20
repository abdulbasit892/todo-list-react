import React from 'react';
import Task from "./task";

const taskList = props => {
    return (
        <div>
            {props.data ? props.data.map((task, index) => {
                return <Task data={task[1]} uid={task[0]} key={index} />

            }) : <h1> No Tasks To Show</h1>}
        </div>




    )
};

export default taskList;