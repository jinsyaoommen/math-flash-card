import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { refreshOperationSymbol } from '../actions/index';
import HomeComponent from './HomeComponent'

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
    },
    onSub: () => {
      console.log('subtraction');
    },
    onMult: () => {
      console.log('multiplication');
    },
    onDiv: () => {
      console.log('division');
    }
  }
};

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <h2>Facts</h2>
        <div className="row col-md-12">
          <div className="pad-bottom pad-top pad-left col-sm-12">
            <HomeComponent {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
