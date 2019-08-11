import TextImage from "./TextImage";
import React, { Component } from "react";
import SearchComponent from "./SearchComponent";

class TrackingPage extends Component {
  state = {};
  render() {
    const { history } = this.props;

    return (
      <div className="container">
        <SearchComponent />
        <TextImage />
      </div>
    );
  }
}

export default TrackingPage;
