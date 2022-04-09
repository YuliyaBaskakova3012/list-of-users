import * as React from 'react';
import { connect } from 'react-redux';
import { UsersType } from '../../types';
import {changeData} from '../../redux/users-reducer';
import SortPanel from './SortPanel';
type SortPanelType={
  data: UsersType[],
  changeData: (arg: UsersType[])=>void
}
const SortPanelContainer=(props:SortPanelType)=><>
  <SortPanel {...props as SortPanelType}/>
</>
const mapStateToProps=(state: {users:{data: UsersType[]}})=>({
  data: state.users.data
});
export default connect(mapStateToProps, {changeData})(SortPanelContainer)