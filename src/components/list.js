import React, { Component } from 'react'

class List extends Component {
  render() {
    const { listData, removeData } = this.props

    return(
      <ul className="form-lists">
        {
          listData.map((val, index) =>
            <li className="form-list" key={index}>
              {val}
              <button className="form-list-remove" onClick={() => removeData(index)}><i className="fas fa-times"></i></button>
            </li>  
          )
        }
      </ul>
    )
  }
}

export default List