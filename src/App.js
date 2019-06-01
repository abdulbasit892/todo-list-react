import React from 'react';

import Header from "./components/header";
import TodoList from "./components/todo-list";
import AddTask from "./components/add-task";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container:{
    width:"60%",
    margin :"5% auto"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

    <Header />

      <div className={classes.container}>
      <TodoList />
      <AddTask/>
    </div>
     
    </div>
 
 );
}

export default App;