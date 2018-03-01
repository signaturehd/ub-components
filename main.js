var ReactDOM = require('react-dom');
var React = require('react');

import { GenericButton } from './UButton';

class App extends React.Component {
  render() {
    return (
      <div>
        UB Components
        <br />
        <GenericButton></GenericButton>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
