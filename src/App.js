import { Component } from 'react';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dynamic Dashboard</h1>
        <Dashboard />
      </div>
    );
  }
}

export default App;
