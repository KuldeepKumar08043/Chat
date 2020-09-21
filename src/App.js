import React, { Component } from 'react';
import './App.css';

import  { Sidebar }  from "./containers/sidebar"
import  { MessagesList }  from "./containers/messagesList"
import  { AddMessage }  from "./containers/AddMessage"

class App extends Component {
  constructor() {
    super();
  }


  render(){
    return (
      <div className="content">
      <div id="container">
        <Sidebar />
        <section id="main">
            <MessagesList />
            <AddMessage />
        </section>
      </div>
      </div>
    );
  }

}

export default App;
