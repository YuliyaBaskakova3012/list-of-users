import * as React from 'react';
import { connect } from 'react-redux';
import {changeData} from '../../../redux/users-reducer';
import Profile from './Profile';
const ProfileContainer=(props: {isLoading: boolean; data: any[] })=><>
<Profile {...props}/>
</>
const mapStateToProps=(state: { users: { data: any; isLoading: boolean; }; })=>({
data: state.users.data,
isLoading: state.users.isLoading
});
export default connect(mapStateToProps, {changeData})(ProfileContainer)
  