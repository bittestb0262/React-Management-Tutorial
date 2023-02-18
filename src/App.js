import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
  'id': 1,
  'image':'https://placeimg.com/64/64/1',
  'name': '홍기길',
  'birthday': '1992-01-03',
  'num': '010-4220-0030',
  'job': '대학생',
  'addr':'부산'
},
{
  'id': 2,
  'image':'https://placeimg.com/64/64/2',
  'name': '정우식',
  'birthday': '1990-01-03',
  'num': '010-4490-0030',
  'job': '군인',
  'addr':'창원'
},
{
  'id': 3,
  'image':'https://placeimg.com/64/64/3',
  'name': '장찬식',
  'birthday': '1989-11-03',
  'num': '010-4490-1130',
  'job': '개발자',
  'addr':'창원'
}
]


class App extends Component {

  render(){
    return (
      <div>
        {
          customers.map(c =>{
            return(
              <Customer
              key={c.id}
              id={c.id}
              name={c.name}
              image={c.image}
              birthday={c.birthday}
              num={c.num}
              job={c.job}
              />
            )
          }
            )
        }
      </div>
      
    );
  }  

}

export default App;
