import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editWorkerLevel} from '../actions/index';
import {bindActionCreators} from 'redux';

class WorkerLevel extends Component {

  render() {
    if (!this.props.worker) {
      return <div>Select a worker to get started.</div>;
    }


    return (
        <div className="workerLevel" onClick={() => this.props.editWorkerLevel(this.props.worker)}>Level: {this.props.worker.level}</div>
      );
  }
}

function mapStateToProps(state) {
  return {
    worker: state.activeWorker,
  };
}

function mapDispatchToPorps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({editWorkerLevel: editWorkerLevel}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToPorps)(WorkerLevel);
