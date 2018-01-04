
const initialState = [
  {name: 'Worker1', level: 12, id: 1},
  {name: 'Worker2', level: 11, id: 2},
  {name: 'Worker3', level: 9, id: 3},
  {name: 'Worker4', level: 10, id: 4},
 ]


export default function(state = initialState, action) {
  switch (action.type) {
  case 'WORKER_LEVEL_EDITED':
  	console.log(action.activeWorker.level);
  	let workers = state;
  	workers.map(worker => {
  		worker.level = (worker.id === action.activeWorker.id) ? (action.activeWorker.level + 1) : worker.level;
  		return worker;
  	});
  	console.log (workers);

    return workers;
  }

  return state;
}
