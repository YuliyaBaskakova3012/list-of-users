import * as React from 'react';
import "./SortPanel.scss";
import { useNavigate } from "react-router-dom";
import * as _ from 'lodash';
const SortPanel=(props: { data: string | any[]; changeData: (arg0: any) => void; })=>{
const navigate=useNavigate();
let url=window.location.href;
let urlPart=url.split("/")[3];
let dataCopy=props.data.concat();
let sortCompanyNameData=_.orderBy(dataCopy, [(user: { company: { name: string; }; }) => user.company.name.toLowerCase()], ['asc']);
let sortCityData=_.orderBy(dataCopy, [(user: { address: { city: string; }; }) => user.address.city.toLowerCase()], ['asc']); 
let sortCity=()=>{
    props.changeData(sortCityData);
    if(urlPart==="profile")  {
        navigate(-1);
      }
    }
let sortCompany=()=>{
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

  