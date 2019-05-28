import React, { Component } from 'react'
import List from './list'

export default class Form extends Component {

  // Handling state
  state = {
    userInput: '',
    list: []
  }

  recordUserInput(input) {
    this.setState({userInput: input})
  }

  addListData(data){
    let tempList = [...this.state.list]
    data === '' ? console.log('no data') : tempList.push(data)
    this.setState({
      userInput: '',
      list: tempList
    }, () => console.log(this.state.list))
  }

  removeData = index => {
    let getList = [...this.state.list]
    let targetVal = getList.splice(index, 1)
    let newArr = getList.filter(target => target !== targetVal)
    this.setState({
      list: newArr
    }, console.log(newArr))
  }

  render() {
    return(
      <div className="form-container">
        <input 
          className="form-input"
          required="required"
          onChange={(e) => this.recordUserInput(e.target.value)}
          value={this.state.userInput}
          type="text"
        />

        <button
          // On click will run something
          className="form-button"
          onClick={(e) => this.addListData(this.state.userInput)}
        >
          Add your list
        </button>
        <br/>
          <p>{this.state.list != '' ? `Current Lists: ${this.state.list.length}` : `No lists found`}</p>
          <List listData={this.state.list} removeData={this.removeData}/>
      </div>
    )
  }
}