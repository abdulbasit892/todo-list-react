import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function getModalStyle() {
    return {
        transform: `translate(40%, 25%)`
    };
}

const styles = theme => ({
    paper: {
        position: "absolute",
        width: "30%",
        height: "30%",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: "none",
        left: "20%"
    },
    container: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column"
    },
    textField: {
        width: "80%",
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: 10
    },
    button: {
        margin: theme.spacing.unit
    },
    input: {
        display: "none"
    }
});

class SimpleModal extends React.Component {

    render() {

        const { classes } = this.props;
        let data = { email: " ", password: " " }
        if (this.props.payload) {
            data = this.props.payload;
        }
        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.open}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <form className={classes.container} autoComplete="off">
                            <TextField
                                id="outline"
                                placeholder="email"
                                className={classes.textField}
                                value={data.email}
                                name="email"
                                onChange={(e) => this.props.handleChange(e)}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                type="password"
                                id="outlined"
                                label="password"
                                name="password"
                                className={classes.textField}
                                value={data.password}
                                onChange={(e) => this.props.handleChange(e)}
                                margin="normal"
                                variant="outlined"
                            />


                        </form>
                        <div>

                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={e => this.props.userSignupHandler(e)}

                            >SignUp</Button>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={e => this.props.userLoginHandler(e)}
                            >Login</Button>
                            <Button
                                variant="contained"
                                color="default"
                                className={classes.button}
                                onClick={this.props.handleClose}

                            >cancel</Button>
                        </div>
                        <SimpleModalWrapped />
                    </div>
                </Modal>
            </div>
        );
    }
}

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired
};

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
