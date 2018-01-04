import {combineReducers} from 'redux';
import WorkersReducer from './reducer_workers';
import ActiveWorker from './reducer_active_worker';
// import EditWorkerLevel from './reducer_level_edit';

const rootReducer = combineReducers({
  workers: WorkersReducer,
  activeWorker: ActiveWorker,
  // editWorkerLevel: EditWorkerLevel
});

export default rootReducer;
