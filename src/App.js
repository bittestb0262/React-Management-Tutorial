import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customer = {
  'name': '홍기길',
  'birthday': '1992-01-03',
  'num': '010-4220-0030',
  'job': '대학생',
  'addr':'부산'
}


class App extends Component {

  render(){
    return (
      <Customer
      name={customer.name}
      birthday={customer.birthday}
      num={customer.num}
      job={customer.job}
      addr={customer.addr}
      />
    );
  }  

}

export default App;
