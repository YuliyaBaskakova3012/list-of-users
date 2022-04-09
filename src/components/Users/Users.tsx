import * as React from 'react';
import { NavLink } from 'react-router-dom';
import "./Users.scss";
import { UsersType } from '../../types';
type UsersTypeProps={
  data: UsersType[]
}
const Users=(props: UsersTypeProps)=>{
return (
    <div className="Users">   
      <div className="Users__list-header">Список пользователей</div>  
{props.data.map((item) =>(
      <div className="Users__user"  key={item.id}>
        <div><div >ФИО:</div><div>{item.name}</div></div>
        <div><div>город:</div><div>{item.address.city}</div></div>
        <div>
          <div>компания:</div>
          <div>{item.company.name}</div>
          <div><NavLink to={`/profile/${item.id}`}> Подробнее</NavLink></div>
        </div>
      </div>    
))} 
      <div  className="Users__number-of-users"><span>Найдено 10 пользователей</span></div>
    </div> 
)
}
export default Users;

  