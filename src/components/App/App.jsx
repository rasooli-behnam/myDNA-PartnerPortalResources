import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Form from "../Form";

const styles = {};

class App extends React.Component {
  render() {
    return <Form />;
  }
}

export default withStyles(styles)(App);
