import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


const styles = theme => ({
  flex: {
    flexGrow: 1
  },
  footer: {
    padding: 5,
    height:30,
    position: "absolute",
    textAlign: "center",
    left: 0,
    bottom: 0,
    right: 0
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.footer}>
        <Grid container spacing={4}>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="caption"
                color="inherit"
                className={classes.flex}
              >
                © Copyright 2021 - Design by Antonio Aparicio
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </Paper>
    );
  }
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);