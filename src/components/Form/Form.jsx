import React from "react";
import download_links from "../../download_links.json";
import { withStyles } from "@material-ui/core/styles";
import { MenuItem, TextField } from "@material-ui/core";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    console.log(download_links);

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          className={classes.textField}
          // value={this.state.currency}
          // onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          margin="normal"
        >
          {Object.keys(download_links).map((k, i) => {
            return (
              <MenuItem key={i} value={k}>
                {k}
              </MenuItem>
            );
          })}
        </TextField>

        <TextField
          label="Name"
          className={classes.textField}
          // value={this.state.name}
          // onChange={this.handleChange("name")}
          margin="normal"
        />
      </form>
    );
  }
}

export default withStyles(styles)(App);
