import * as React from 'react';
import { connect } from 'react-redux';
import { UsersType } from '../../types';
import Profile from './Profile';

type ProfileProps={
    data: UsersType[],
    isLoading: boolean
}
const ProfileContainer=(props:ProfileProps)=><>
<Profile {...props as ProfileProps}/>
</>
const mapStateToProps=(state: { users:ProfileProps})=>({
data: state.users.data,
isLoading: state.users.isLoading
});
export default connect(mapStateToProps)(ProfileContainer)
  