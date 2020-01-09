import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { purple, grey, yellow } from "@material-ui/core/colors";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const LanguageSwitch = (props) => {
  return (
    <Typography>
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>Eng</Grid>
        <Grid item>
          <MySwitch onChange={props.onChange} />
        </Grid>
        <Grid item>中</Grid>
      </Grid>
    </Typography>
  );
};

const MySwitch = withStyles({
  switchBase: {
    color: yellow[300],
    "&$checked": {
      color: yellow[300]
    },
    "&$checked + $track": {
      backgroundColor: grey[300]
    },
    "& + $track": {
      backgroundColor: grey[100]
    }
  },
  checked: {},
  track: {}
})(Switch);

export default LanguageSwitch;
