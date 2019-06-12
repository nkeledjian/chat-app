import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="container">
        <aside id="sidebar">Users</aside>
        <section id='main'>
          <section id='msgs-list'>Messages List</section>
          <section id='new-msg'>New Messages</section>
        </section>
      </div>
    );
  }
}

export default App;
