import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = { lat: null, errorMessage: "" }; // bu yozgan kodni babel ozgartirib beradi constructor function qoshadi
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => (this.state.lat = position.coords.latitude),
      (err) => (this.state.errorMessage = err.message)
    );
  }
  render() {
    console.log(this.state.lat);
    if (this.state.lat !== null) {
      return (
        <div>
          <div>Latitude: {this.state.lat}</div>
        </div>
      );
    }
    if (this.state.errorMessage !== "") {
      return (
        <div>
          <div>Error:{this.state.errorMessage}</div>
        </div>
      );
    }
    return <div>Loading....</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
