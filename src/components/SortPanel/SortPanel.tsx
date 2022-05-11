import * as React from 'react';
import "./SortPanel.scss";
import { useNavigate } from "react-router-dom";
import * as _ from 'lodash';
import { UsersType } from '../../types';

type SortPanelType={
  data: UsersType[],
  changeData: (arg: UsersType[])=>void
}
const SortPanel=(props:SortPanelType)=>{
const navigate=useNavigate();
const url=window.location.href;
const urlPartSplit=url.split("/");
const urlPart=urlPartSplit[urlPartSplit.length-2];
const dataCopy=props.data.concat();
const sortCompanyNameData=_.orderBy(dataCopy, [user=> user.company.name.toLowerCase()], ['asc']);
const sortCityData=_.orderBy(dataCopy, [user => user.address.city.toLowerCase()], ['asc']); 
const sortCity=()=>{
    props.changeData(sortCityData);
    if(urlPart==="profile")  {
        navigate(-1);
      }
    }
const sortCompany=()=>{
    props.changeData(sortCompanyNameData);
    if(urlPart==="profile"){
        navigate(-1);
      }
    }
return (
    <div className="SortPanel">
      <div className="SortPanel__sorting-header">Сортировка</div>
      <button className="SortPanel__sorting-city-button" onClick={()=>sortCity()}><span>по городу</span></button>
      <button className="SortPanel__sorting-company-button" onClick={()=>sortCompany()}>по компании</button>
    </div>
)
}
export default SortPanel;

  