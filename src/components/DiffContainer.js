import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {
  incrementAsync, incrementQuestionCount, refreshResult, refreshDiffMap,
  refreshOperandLeft, refreshOperandRight, resetDiffMap
} from '../actions/index';
import DiffComponent from './DiffComponent'

const mapStateToProps = (state) => {
  return {
    timer: state.ui.timer,
    timerId: state.ui.timerId,
    disabled: state.ui.timerId ? true : false,
    operationSymbol: state.ui.operationSymbol,
    result: state.ui.result,
    operandLeft: state.ui.operandLeft,
    operandRight: state.ui.operandRight,
    diffMap: state.diffMap
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    asyncTimer: () => {
      dispatch(incrementAsync());
      dispatch(resetDiffMap());
    },
    onBack: () => {
      dispatch(push('/'));
    },
    onSubmit: (e) => {
      e.preventDefault()
      dispatch(incrementQuestionCount());
      dispatch(refreshDiffMap());
      dispatch(refreshResult(''));
      dispatch(refreshOperandLeft());
      dispatch(refreshOperandRight());
    },
    onChangeResult: (e) => {
      dispatch(refreshResult(e.target.value));
    }
  }
};

class DiffContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="col-sm-12">
            <DiffComponent {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiffContainer);
