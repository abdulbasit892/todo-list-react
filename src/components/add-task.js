import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    button: {
        marginTop: 20,
        float: "right"
    },
    textField: {
        width: "100%",
        marginLeft: 5
    }
}));

function AddTask(props) {

    const classes = useStyles();

    return (
        <div>
            {props.Button ? <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="outlined-name"
                        label="Title"
                        className={classes.textField}
                        value={props.values.taskTitle}
                        onChange={props.handleChange('taskTitle')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="description"
                        multiline
                        rowsMax="4"
                        value={props.values.taskDescription}
                        onChange={props.handleChange('taskDescription')}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button className={classes.button} variant="contained" onClick={props.taskSubmitHandler} color="primary" >Add</Button>

                </form>
            </div>
                :
                <Button className={classes.button} variant="contained" onClick={props.onButtonClick} color="primary" >Add</Button>
            }
        </div>

    )

};

export default AddTask;