import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as reduxActions from "../../actions/index";

const Home = ({ test, counter, actions }) => {
  console.log("test prop from react router", test);
  return (
    <div>
      <p>Home Route</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
