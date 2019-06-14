import React from 'react';

import Header from "../components/header";
import TodoList from "../components/all-task/task-list";
import AddTask from "../components/add-task";
import { withStyles } from "@material-ui/core/styles";

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
    data: [
      {
        taskTitle: "parhlo",
        taskDate: "11 may 2019 12:12:00 AM",
        taskDescription: "parhle bhai parhle"
      },
      {
        taskTitle: "parhlo",
        taskDate: "11 may 2019 12:12:00 AM",
        taskDescription: "parhle bhai parhle"
      },
      {
        taskTitle: "parhlo",
        taskDate: "11 may 2019 12:12:00 AM",
        taskDescription: "parhle bhai parhle"
      }],
    value: {
      title: "title",
      description: "description",
      Button: false
    }
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  onButtonClick = () => {
    let value = {...this.state.value}
value.Button = true;
this.setState({value});
    // this.setState({ value.Button: true });
  };
  render() {
    console.log(this.state);
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header />
        <div className={classes.container}>
          <TodoList data={this.state.data} />
          <AddTask handleChange={this.handleChange} onButtonClick={this.onButtonClick} values={this.state.value} />
        </div>

      </div>
    )
  }

}

export default withStyles(styles)(App);