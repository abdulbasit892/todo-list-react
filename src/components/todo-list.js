import React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

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
      icon : {
        padding :"5px 6px",
        background : "#3e51b5",
        color : " white",
        borderRadius : 25
      }
}));
function TodoList (){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
        return ( 
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary
                      expandIcon={<Icon className={classes.icon}>check</Icon>}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.heading}>Advanced settings</Typography>
              <Typography className={classes.secondaryHeading}>
                Filtering has been entirely disabled for whole web server       
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                vitae egestas augue. Duis vel est augue.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        
         );
    }

 
export default TodoList;