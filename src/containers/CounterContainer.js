import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increaseAsync, decreaseAsync, setDiff } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainers = ({
  number,
  diff,
  increaseAsync,
  decreaseAsync,
  setDiff,
}) => {
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
      onSetDiff={setDiff}
    />
  );
};

const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      increaseAsync,
      decreaseAsync,
      setDiff,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainers);
