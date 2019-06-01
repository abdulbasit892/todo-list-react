import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    button:{
      marginTop : 20,
      float : "right" 
    },
    textField:{
        width : "100%",
        marginLeft:5
    }
  }));

function AddTask(){

    const classes = useStyles();
    const [values,setValues] = React.useState({
      Task: '',
    Title: '',
    Button: false
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
        };
    const onButtonClick=()=> {
        setValues({ ...values, Button: true });
        console.log(values);
    };
    return (
        <div>
            {values.Button? <div> 
                <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="Title"
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange('Title')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Task"
                    multiline
                    rowsMax="4"
                    value={values.multiline}
                    onChange={handleChange('Task')}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                    <Button className={classes.button} variant="contained" color="primary" >Add</Button>

                </form>
            </div>
     :
            <Button className={classes.button} variant="contained" onClick={onButtonClick} color="primary" >Add</Button>
}
                 </div>
  
    )

};

export default AddTask;