import React from "react";
import ReactDOM from "react-dom";
import DisplaySeason from "./DisplaySeason.js";

class App extends React.Component {
  // state = { lat: null, errorMessage: "" }; // bu yozgan kodni babel ozgartirib beradi constructor function qoshadi

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  getLocation() {
    if (this.state.lat) {
      return (
        <div>
          <div>Latitude: {this.state.lat}</div>
        </div>
      );
    }
    if (this.state.errorMessage) {
      return (
        <div>
          <div>Error:{this.state.errorMessage}</div>
        </div>
      );
    }
    return <div>Loading....</div>;
  }
  render() {
    if (this.state.errorMessage) {
      return (
        <div>
          <h1 className="text">Error:{this.state.errorMessage}</h1>
        </div>
      );
    } else {
      return (
        <DisplaySeason lat={this.state.lat} error={this.state.errorMessage} />
      );
    }
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
