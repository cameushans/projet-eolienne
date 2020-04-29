import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


// Import function
import Stop_Btn from './Stop_Btn';
import Check_Btn from './Check_Btn';
import Confetti from './Confetti';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Button variant="contained">Default</Button> */}
      <div id="buttons_right">
        <Button variant="contained" color="primary" onClick={Check_Btn}>
          Check !
        </Button>
        <Button variant="contained" color="secondary" onClick={Stop_Btn}>
          Stop !
        </Button>
      </div>
      <Button id="achat" variant="contained" color="primary" onClick={Confetti}>Acheter</Button>
      
      {/* <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button> */}
    </div>
  );
}
