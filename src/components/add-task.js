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
    console.log(props);

    return (
        <div>
            {props.values.Button ? <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="outlined-name"
                        label="Title"
                        className={classes.textField}
                        value={props.values.title}
                        onChange={props.handleChange('Title')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Task"
                        multiline
                        rowsMax="4"
                        value={props.values.description}
                        onChange={props.handleChange('Task')}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button className={classes.button} variant="contained" color="primary" >Add</Button>

                </form>
            </div>
                :
                <Button className={classes.button} variant="contained" onClick={props.onButtonClick} color="primary" >Add</Button>
            }
        </div>

    )

};

export default AddTask;