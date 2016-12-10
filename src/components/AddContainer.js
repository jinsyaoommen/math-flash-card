import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { incrementAsync, incrementQuestionCount, refreshResult, refreshSumMap } from '../actions/index';
import AddComponent from './AddComponent'

const mapStateToProps = (state) => {
  return {
    timer: state.ui.timer,
    timerId: state.ui.timerId,
    disabled: state.ui.timerId ? true : false,
    operationSymbol: state.ui.operationSymbol,
    result: state.ui.result
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    asyncTimer: () => {
      dispatch(incrementAsync());
    },
    onBack: () => {
      dispatch(push('/'));
    },
    onSubmit: (e) => {
      e.preventDefault()
      dispatch(incrementQuestionCount());
      dispatch(refreshSumMap());
      dispatch(refreshResult(''));
    },
    onChangeResult: (e) => {
      dispatch(refreshResult(e.target.value));
    }
  }
};

class AddContainer extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="col-sm-12">
            <AddComponent {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContainer);
