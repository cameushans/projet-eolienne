import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


// Import function
import Stop_Btn from './Stop_Btn';
import Check_Btn from './Check_Btn';
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

// const { width, height } = useWindowSize()

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
      
      <div id="btn_commande">
        <Button variant="contained" color="primary" onClick={Check_Btn}>
          Check !
          {/* <Confetti></Confetti>*/}
        </Button>
        <Button variant="contained" color="secondary" onClick={Stop_Btn}>
          Stop !
        </Button>
      </div>
    </div>
    
  );
}
