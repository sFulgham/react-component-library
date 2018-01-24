import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import DocsStore from '../api/docs/state/state';
//import componentData from './componentData';

class Docs extends PureComponent {
  constructor(props){
    super(props);
    
    try {
      this.store = this.props.location.state.store;
    } catch (error) {
      this.store = new DocsStore();
    }
    console.log('docs store:', this.store);
    this.state = this.store.getState();
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  onStoreChange(){
    this.setState(this.store.getState());
  }

  componentDidMount(){
    this.subscriptionId = this.store.subscribe(this.onStoreChange);
  }

  componentWillUnmount(){
    this.store.unsubscribe(this.subscriptionId);
  }

  render(){
    return(
      <h1>Docs Main Page</h1>
    );
  }
}

export default Docs;