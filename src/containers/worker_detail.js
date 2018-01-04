import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editWorkerLevel} from '../actions/index';
import {bindActionCreators} from 'redux';
import WorkerLevel from './worker_level';

class WorkerDetail extends Component {






  render() {
    if (!this.props.worker) {
      return <div>Select a worker to get started.</div>;
    }


    return (
      <div>
        <h3>Details for: </h3>
        <div className="workerName">Name: {this.props.worker.name}</div>
        <WorkerLevel worekerLevel={this.props.worker.level}/>
      </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    worker: state.activeWorker,
  };
}



export default connect(mapStateToProps)(WorkerDetail);
