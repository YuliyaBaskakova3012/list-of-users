import { UsersType } from "../types";

const CHANGE_DATA='CHANGE_DATA';
const LOAD_DATA='LOAD_DATA';
const  START_LOAD_DATA=' START_LOAD_DATA';
let initialState = {
  data: [],
  isStartedLoading: false,
  isLoading: true
};
const usersReducer = (state = initialState, action: { type: any; data: any; }) => {
switch (action.type) {
 case CHANGE_DATA: {
    return {
      ...state,
      data: action.data
      }
     }
  case LOAD_DATA: {
    return {
       ...state,
       isLoading: false
       }
      }
  case  START_LOAD_DATA: {
    return {
        ...state,
        isStartedLoading: true
        }
      }
  default: return state
 }
}
export const changeData = (data: UsersType[]) => ({type: CHANGE_DATA, data });
export const loadData = () => ({type: LOAD_DATA});
export const startLoadData = () => ({type: START_LOAD_DATA});
export const changeDataThunk=(url: string)=>async(dispatch: (arg: { type: string}) => void)=>{
  dispatch(startLoadData());
  let res=await fetch(url);
  let data=await res.json();
  dispatch(changeData(data));
  dispatch(loadData());
}
export default usersReducer;