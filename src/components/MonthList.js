import React from 'react';
import Month from './Month'

const MonthList = ({monthList, users}) => {
  
  return (
    <ul className="month-list row">
      {
        monthList.map((month) => {

          const usersFilteredByMonth = users.filter((user) => {
            if ( month.index == new Date(user.dob).getMonth()) {
              return user;
            }
          });
          const lengthusersFildByMnth = usersFilteredByMonth.length;
          const monthColor = (lengthusersFildByMnth >= 3 && lengthusersFildByMnth <= 6) ? 
            'blue' :
            (lengthusersFildByMnth >= 7 && lengthusersFildByMnth <= 10) ?
              'green' :
              (lengthusersFildByMnth >= 11) ?
                'red' : 'gray';

          return (
            <Month key={month.month} 
              month={month.month}
              usersFilteredByMonth={usersFilteredByMonth}
              monthColor={monthColor}
            ></Month>
          )
        })
      }
    </ul>
  )
}

export default MonthList;