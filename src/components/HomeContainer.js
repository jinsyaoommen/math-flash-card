import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { refreshOperationSymbol, resetTimer, resetSumMap, resetDiffMap } from '../actions/index';
import HomeComponent from './HomeComponent';

const mapStateToProps = (state) => {
  return {
    timer: state.ui.timer,
    timerId: state.ui.timerId,
    disabled: state.ui.timerId ? true : false
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => {
      dispatch(push('/add'));
      dispatch(refreshOperationSymbol('+'));
      dispatch(resetTimer());
      dispatch(resetSumMap());
    },
    onSub: () => {
      dispatch(push('/sub'));
      dispatch(refreshOperationSymbol('-'));
      dispatch(resetTimer());
      dispatch(resetDiffMap());
    },
    onMult: () => {
      console.log('multiplication');
      dispatch(resetTimer());
    },
    onDiv: () => {
      console.log('division');
      dispatch(resetTimer());
    }
  }
};

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <div className="row col-md-12 pad-top">
          <div className="pad-bottom pad-top pad-left col-sm-12">
            <HomeComponent {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
