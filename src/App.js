import React, { useState, useEffect } from 'react'
import MonthList from './components/MonthList'

import userService from './services/users' 

const App = () => {
  const [users, setUsers] = useState([]);
  // const [users, setUsers] = useState([
  //   {'id': 1, 'firstName': 'abba', 'lastName': 'ab', 'dob': new Date('1.10.1991')},
  //   {'id': 2, 'firstName': 'dr', 'lastName': 'sleep', 'dob': new Date('1.10.1991')},
  //   {'id': 3, 'firstName': 'dr', 'lastName': 'sleep', 'dob': new Date('3.10.1991')},
  //   {'id': 4, 'firstName': 'dr', 'lastName': 'sleep', 'dob': new Date('3.10.1991')},
  //   {'id': 5, 'firstName': 'dr', 'lastName': 'sleep', 'dob': new Date('3.10.1991')},
  //   {'id': 6, 'firstName': 'dr', 'lastName': 'sleep', 'dob': new Date('3.10.1991')},
  //   {'id': 7, 'firstName': 'dr', 'lastName': 'sleep', 'dob': new Date('6.10.1991')},
  //   {'id': 8, 'firstName': 'dr', 'lastName': 'sleep', 'dob': new Date('6.10.1991')},
  //   {'id': 9, 'firstName': 'dr', 'lastName': 'sleep', 'dob': new Date('6.10.1991')},
  //   {'id': 10, 'firstName': 'dr', 'lastName': 'sleep', 'dob': new Date('6.10.1991')},
  //   {'id': 11, 'firstName': 'dr', 'lastName': 'sleep', 'dob': new Date('6.10.1991')},
  //   {'id': 12, 'firstName': 'dr', 'lastName': 'sleep', 'dob': new Date('6.10.1991')},
  //   {'id': 13, 'firstName': 'dr', 'lastName': 'sleep', 'dob': new Date('6.10.1991')},
  //   {'id': 14, 'firstName': 'dr', 'lastName': 'sleep', 'dob': new Date('6.10.1991')},
  //   {'id': 15, 'firstName': 'dr', 'lastName': 'sleep', 'dob': new Date('6.10.1991')},
  //   {'id': 16, 'firstName': 'dr', 'lastName': 'sleep', 'dob': new Date('6.10.1991')},
  //   {'id': 17, 'firstName': 'dr', 'lastName': 'sleep', 'dob': new Date('6.10.1991')},
  // ]);

  const [monthList, setMonthList] = useState([
    {'index': 0, 'month': 'January'},
    {'index': 1, 'month': 'February'},
    {'index': 2, 'month': 'March'},
    {'index': 3, 'month': 'April'},
    {'index': 4, 'month': 'May'},
    {'index': 5, 'month': 'June'},
    {'index': 6, 'month': 'July'},
    {'index': 7, 'month': 'August'},
    {'index': 8, 'month': 'September'},
    {'index': 9, 'month': 'October'},
    {'index': 10, 'month': 'November'},
    {'index': 11, 'month': 'December'},
  ]);

  useEffect(() => {
    userService.getAll()
      .then(initialUsers => setUsers(initialUsers))
  }, []);

  return (
    <div className="App container">
      <MonthList 
        monthList={monthList}
        users={users}
      ></MonthList>
    </div>
  );
}

export default App;
