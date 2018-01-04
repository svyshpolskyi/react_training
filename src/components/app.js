import React from 'react';
import {Component} from 'react';

import WorkerList from '../containers/worker_list';
import WorkerDetail from '../containers/worker_detail';
import './app.less';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid row">
        <WorkerList />
        <WorkerDetail />
      </div>
    );
  }
}
