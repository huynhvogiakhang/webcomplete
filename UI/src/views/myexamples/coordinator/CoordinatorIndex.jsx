import React from "react";
// node.js library that concatenates classes (strings)
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
// reactstrap components
import {
  Container
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,

} from "variables/charts.jsx";
import CoordinatorHeader from "../../../components/Headers/CoordinatorHeader";

class CoordinatorIndex extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1"
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <CoordinatorHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          
        </Container>
      </>
    );
  }
}

export default CoordinatorIndex;
