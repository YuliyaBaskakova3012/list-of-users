import * as React from 'react';
import { connect } from 'react-redux';
import {changeData} from '../../../redux/users-reducer';
import SortPanel from './SortPanel';
const SortPanelContainer=(props: {changeDataThunk: (arg0: any[]) => void; isLoading: boolean; })=><>
  <SortPanel data={[]} changeData={function (arg0: any): void {
  } } {...props}/>
</>
const mapStateToProps=(state: { users: { data: any[]; isLoading: boolean; }; })=>({
  data: state.users.data,
  isLoading: state.users.isLoading
});
export default connect(mapStateToProps, {changeData})(SortPanelContainer)