import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
//import componentData from './componentData';

class Docs extends PureComponent {
  constructor(props){
    super(props);
    console.log(this.props);
    this.store = this.props.location.state.store;
    
    this.state = this.store.getState();
    this.onStoreChange = this.onStoreChange.bind(this);
  }

  onStoreChange(){
    this.setState(this.store.getState());
  }

  componentDidMount(){
    console.log('made it');
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