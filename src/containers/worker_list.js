import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectWorker} from '../actions/index';
import {bindActionCreators} from 'redux';

class WorkerList extends Component {
  renderList() {
    return this.props.workers.map((worker) => {
      var class1 = `list-group-item ${worker.id}`;
      return (
          <li
            key={worker.id}
            onClick={() => this.props.selectWorker(worker)}
            className= {class1}>
            {worker.name}
          </li>
        );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up in props
  // inside book list
  return {
    workers: state.workers,
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToPorps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({selectWorker: selectWorker}, dispatch);
}

// Promote BookList from a component to a container - it needs to
// know about this new disptch method, selectBook. Make it
// availible as a prop.
export default connect(mapStateToProps, mapDispatchToPorps)(WorkerList);
