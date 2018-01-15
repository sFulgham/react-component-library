class State {
  constructor(){
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
    this.state = {
      route: ''
    };
  }

  subscribe(cb){
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  }

  unsubscribe(id){
    delete this.subscriptions[id];
  }

  notifySubscribers(){
    Object.values(this.subscriptions).forEach(cb => cb());
  }

  changeState(newState){
    this.data[newState.change] = newState.state;
    this.notifySubscribers();
  }

  getState(){
    return this.state;
  }
}

export default State;