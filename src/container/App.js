import React from 'react';

import Header from "../components/header";
import TodoList from "../components/all-task/task-list";
import AddTask from "../components/add-task";
import SignUp from "../components/sigup";

import { withStyles } from "@material-ui/core/styles";

import firebase from "firebase";


const styles = {
  root: {
    flexGrow: 1,
  },
  container: {
    width: "50%",
    margin: "5% auto"
  }
};

class App extends React.Component {

  state = {
    data: [],
    value: {
      taskTitle: "",
      taskDescription: ""
    },
    user: {
      email: "",
      password: ""
    },
    open: true,
    Button: false

  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      const starCountRef = firebase.database().ref('users/' + user.uid + '/task');
      starCountRef.on('value', (snapshot) => {
        const entries = Object.entries(snapshot.val())
        console.log(entries);
        this.setState({ data: entries });
        // console.log(this.state);
      })

    });

  }
  handleChange = name => event => {

    const value = { ...this.state.value };
    value[name] = event.target.value;
    this.setState({ value });


  };
  handleUserChange = event => {

    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };
  onButtonClick = () => {
    this.setState({ Button: true });
  };
  taskSubmitHandler = e => {
    e.preventDefault();
    const time = new Date();
    const task = { ...this.state.value, taskDate: time.toString().slice(0, 24) };
    // this.setState({ data: [...this.state.data, task] })
    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .database()
        .ref('users/' + user.uid + "/task/")
        .push({ ...task });
    });
    this.setState({
      value: {
        taskTitle: "",
        taskDescription: ""
      }
    });

  };
  userLoginHandler = e => {
    e.preventDefault();
    firebase.auth()
      .signInWithEmailAndPassword(this.state.user.email, this.state.user.password)
      .then(() => { this.handleClose() })
      .catch(function (error) {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };
  userSignupHandler = e => {
    e.preventDefault();
    firebase.auth()
      .createUserWithEmailAndPassword(this.state.user.email, this.state.user.password)
      .then(() => { this.handleClose() })
      .catch(function (error) {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header handleOpen={this.handleOpen} />
        <div className={classes.container}>
          <TodoList data={this.state.data} />
          <AddTask handleChange={this.handleChange}
            taskSubmitHandler={this.taskSubmitHandler}
            onButtonClick={this.onButtonClick}
            values={this.state.value}
            Button={this.state.Button}
          />
        </div>
        {
          firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
              return <SignUp
                handleClose={this.handleClose}
                userLoginHandler={this.userLoginHandler}
                userSignupHandler={this.userSignupHandler}
                open={this.state.open}
                payload={this.state.user}
                handleChange={this.handleUserChange}
              />

            }
          })}

      </div>
    )
  }

}

export default withStyles(styles)(App);