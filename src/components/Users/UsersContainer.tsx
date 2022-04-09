import * as React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {changeDataThunk} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { UsersType } from '../../types';
interface UsersTypes{
  data: UsersType[], 
  isLoading: boolean,
  isStartedLoading: boolean,
}
interface UsersTypeProps extends UsersTypes {
  changeDataThunk: (arg: string)=>void
}
const url='http://jsonplaceholder.typicode.com/users';
const UsersContainer=(props:UsersTypeProps)=>{
if(!props.isStartedLoading){
  props.changeDataThunk(url);
}
 return (
<>
{props.isLoading?
<Preloader/>
:
<Users {...props as UsersTypeProps}/>
}
</>
       )
}
const mapStateToProps=(state: {users: UsersTypes})=>({
  data: state.users.data,
  isLoading: state.users.isLoading,
  isStartedLoading: state.users.isStartedLoading
});
export default connect(mapStateToProps, {changeDataThunk})(UsersContainer)

  

 