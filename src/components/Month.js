import React, {useState} from 'react';

const Month = ({month, usersFilteredByMonth, monthColor}) => {
  const [isMonthHover, setIsMonthHover] = useState(false);
  
  const monthUsers = usersFilteredByMonth.map((usr) => {
    return (
      <li key={usr.id}>{usr.firstName} {usr.lastName}</li>
    )
  });
  
  return (
  <li 
    onMouseEnter={() => setIsMonthHover(!isMonthHover)}
    onMouseLeave={() => setIsMonthHover(!isMonthHover)}
    className="col-4"
  >
    <div className="month-list__item">
      <h2 style={{'color': monthColor}}>{month}</h2>
      { isMonthHover && 
        <ul>{monthUsers}</ul> 
      }
    </div>
  </li>
  )
}

export default Month;