import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as reduxActions from "../../actions/index";

const About = ({ counter, actions }) => {
  return (
    <div>
      <p>About Route</p>
      Counter: {counter}
      <button onClick={() => actions.addCounter()}>Increment Counter</button>
      <button onClick={() => actions.subtractCounter()}>
        Decrement Counter
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  const props = {
    counter: state.counter
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(reduxActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
