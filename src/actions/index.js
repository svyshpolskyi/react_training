export function selectWorker(worker) {
  // selectBook is an ActionCreateor, it needs to return an
  // action, an object with a type property.
  return {
    type: 'WORKER_SELECTED',
    payload: worker,
  };
}

export function editWorkerLevel(activeWorker) {
  	

  return {
    type: 'WORKER_LEVEL_EDITED',
    activeWorker: activeWorker,
  };
}
