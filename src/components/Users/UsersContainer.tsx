import * as React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {changeDataThunk} from '../../../redux/users-reducer';
import Loader from '../../components/Loader/Loader';
const url='http://jsonplaceholder.typicode.com/users';
const UsersContainer=(props: { isStartedLoading: boolean; changeDataThunk: (arg0: string) => void; isLoading: boolean; })=>{
if(!props.isStartedLoading){
  props.changeDataThunk(url);
}
 return (
 <>
 {props.isLoading?
 <Loader/>
 :
 <Users data={[]} {...props}/>}
 </>
       )
}
const mapStateToProps=(state: { users: { data: any[]; isLoading: boolean; isStartedLoading: boolean; }; })=>({
  data: state.users.data,
  isLoading: state.users.isLoading,
  isStartedLoading: state.users.isStartedLoading
});
export default connect(mapStateToProps, {changeDataThunk})(UsersContainer)

  

 