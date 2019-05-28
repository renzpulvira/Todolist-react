import React from 'react';
import './App.css';
import Form from './components/form'

export default class App extends React.Component {
  render() {
    return(
      <div className="form-wrapper">
        <Form />
      </div>
    )
  }
}
