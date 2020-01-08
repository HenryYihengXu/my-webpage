import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { withStyles } from "@material-ui/core/styles";

export const ExpansionPanel = withStyles({
  root: {
    //border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    // "&:not(:last-child)": {
    //   borderBottom: 0
    // },
    "&:before": {
      margin: 0,
      display: "none"
    },
    "&$expanded": {
      margin: 0
    },
    padding: 0
  },

  border: 0,
  margin: 0,
  expanded: {}
})(MuiExpansionPanel);

export const ExpansionPanelSummary = withStyles({
  root: {
    //backgroundColor: "rgba(0, 0, 0, .03)",
    //borderBottom: "1px solid rgba(0, 0, 0, .125)",
    margin: 0,
    //marginBottom: -1,
    padding: 0,
    border: "none",
    minHeight: 56,
    //maxHeight: 0,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    padding: 0,
    "&$expanded": {
      margin: "0px 0"
    },
    margin: "0px 0"
  },

  expanded: {}
})(MuiExpansionPanelSummary);

export const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  content: {
    padding: 0,
    margin: "0px 0"
  },
  padding: 0,
  margin: 0
}))(MuiExpansionPanelDetails);
