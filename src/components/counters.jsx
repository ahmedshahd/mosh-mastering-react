import React, { Component } from "react";
import counter from "./counter";

class Counters extends Component {
  state = {};
  render() {
    return(<counter />
        <counter />
        <counter />
        <counter />)
    
  }
}

export default Counters;
