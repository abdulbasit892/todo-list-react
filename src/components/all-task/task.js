import React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import firebase from "firebase";


const useStyles = makeStyles(theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        padding: "5px 6px",
        background: "#3e51b5",
        color: " white",
        borderRadius: 25
    },
    card: {
        margin: 10
    }
}));
const clicker = (uid) => {
    console.log(uid);
    firebase.auth().onAuthStateChanged((user) => {
        firebase.database().ref('users/' + user.uid + "/task/" + uid).remove();
    });

};
function TodoList(props) {
    const classes = useStyles();
    const { uid } = props;
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <ExpansionPanel className={classes.card} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary
                expandIcon={<Icon onClick={() => { clicker(uid) }} className={classes.icon}>check</Icon>}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
            >
                <Typography className={classes.heading}>
                    {props.data.taskTitle}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                    {props.data.taskDate}
                </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    {props.data.taskDescription}
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>

    );
}


export default TodoList;