import React from 'react';
import Task from "./task";

const taskList = props => {
    return (
        props.data.map((task, index) => {
            return <Task data={task} key={index} />

        })
    )
};

export default taskList;