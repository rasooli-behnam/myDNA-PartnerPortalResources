import React from "react";
import download_links from "../../download_links.json";
import { withStyles } from "@material-ui/core/styles";
import { Button, MenuItem, Paper, TextField } from "@material-ui/core";

const styles = theme => ({
  paper: {
    backgroundColor: "#fffdf4",
    margin: 15
  },
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

    this.state = {
      category: "",
      subCategory: "",
      pdfName: "",
      pdfLink: "",
      pdfCurrentName: "",
      pdfNewName: "",
      pdfNewLink: ""
    };

    console.log(download_links);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleFormSubmit_create = event => {
    event.preventDefault();
    const { category, subCategory, pdfName, pdfLink } = this.state;

    download_links[category][subCategory].push([pdfName, pdfLink]);

    console.log(download_links);
  };

  handleFormSubmit_update = event => {
    event.preventDefault();
    const {
      category,
      subCategory,
      pdfCurrentName,
      pdfNewName,
      pdfNewLink
    } = this.state;

    let item = download_links[category][subCategory].forEach(e => {
      if (e[0] === pdfCurrentName) {
        if (pdfNewName) e[0] = pdfNewName;
        if (pdfNewLink) e[1] = pdfNewLink;
      }
    });

    console.log(download_links);
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Paper className={classes.paper}>
          <form
            className={classes.container}
            onSubmit={this.handleFormSubmit_create}
            noValidate
            autoComplete="off"
          >
            <TextField
              select
              label="Category"
              className={classes.textField}
              value={this.state.category}
              onChange={this.handleChange("category")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
              variant="outlined"
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
              select
              label="SubCategory"
              className={classes.textField}
              value={this.state.subCategory}
              onChange={this.handleChange("subCategory")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
              variant="outlined"
            >
              {Object.keys(download_links["Downloads_AU"]).map((k, i) => {
                return (
                  <MenuItem key={i} value={k}>
                    {k}
                  </MenuItem>
                );
              })}
            </TextField>

            <TextField
              label="PDF Name"
              className={classes.textField}
              value={this.state.pdfName}
              onChange={this.handleChange("pdfName")}
              margin="normal"
              variant="outlined"
            />

            <TextField
              label="PDF Link"
              className={classes.textField}
              value={this.state.pdfLink}
              onChange={this.handleChange("pdfLink")}
              margin="normal"
              variant="outlined"
            />

            <Button
              type="submit"
              className={classes.searchButton}
              variant="contained"
            >
              Create
            </Button>
          </form>
        </Paper>

        <Paper className={classes.paper}>
          <form
            className={classes.container}
            onSubmit={this.handleFormSubmit_update}
            noValidate
            autoComplete="off"
          >
            <TextField
              select
              label="Category"
              className={classes.textField}
              value={this.state.category}
              onChange={this.handleChange("category")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
              variant="outlined"
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
              select
              label="SubCategory"
              className={classes.textField}
              value={this.state.subCategory}
              onChange={this.handleChange("subCategory")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              margin="normal"
              variant="outlined"
            >
              {Object.keys(download_links["Downloads_AU"]).map((k, i) => {
                return (
                  <MenuItem key={i} value={k}>
                    {k}
                  </MenuItem>
                );
              })}
            </TextField>

            <TextField
              label="PDF Current Name"
              className={classes.textField}
              value={this.state.pdfCurrentName}
              onChange={this.handleChange("pdfCurrentName")}
              margin="normal"
              variant="outlined"
            />

            <TextField
              label="PDF New Name"
              className={classes.textField}
              value={this.state.pdfNewName}
              onChange={this.handleChange("pdfNewName")}
              margin="normal"
              variant="outlined"
            />

            <TextField
              label="PDF New Link"
              className={classes.textField}
              value={this.state.pdfNewLink}
              onChange={this.handleChange("pdfNewLink")}
              margin="normal"
              variant="outlined"
            />

            <Button
              type="submit"
              className={classes.searchButton}
              variant="contained"
            >
              Update
            </Button>
          </form>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
