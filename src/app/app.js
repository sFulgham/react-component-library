import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';


class App extends PureComponent {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Main App</h1>
        <h3><Link to={{pathname: '/component-library', state: {store: this.props.docsStore}}}>Component Library</Link></h3>
      </div>
    );
  }
  
}

export default App;