import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { UsersType } from '../../types';
import "./Profile.scss";
const Profile=(props: {data: UsersType[]})=>{
let url=window.location.href;
let urlPart=url.split("/")[4];
let urlPartNumber=Number(urlPart);
let users=props.data.filter(i=>i.id===urlPartNumber);
let user=users[0];
const navigate=useNavigate();
let formSubmit=(event: { preventDefault: () => void; target: any; })=>{
   event.preventDefault();
   const form=event.target.elements;
   const name=form["name"].value;
   const username=form["username"].value;
   const email=form["email"].value;
   const street=form["street"].value;
   const city=form["city"].value;
   const zipcode=form["zipcode"].value;
   const phone=form["phone"].value;
   const website=form["website"].value;
   const comment=form["comment"].value;
   const obj={
      name, 
      username, 
      email,
      address: {
street, city, zipcode
      },
      phone,
      website,
      comment
   }
   let json=JSON.stringify(obj);
   console.log(json);
   navigate(-1);
}
const [isReadOnly, changeIsReadOnly]=useState(true);
const [isDisabled, changeIsDisabled]=useState(true);
const [nameValue, changeNameValue]=useState(user.name);
const [usernameValue, changeUserNameValue]=useState(user.username);
const [emailValue, changeEmailValue]=useState(user.email);
const [streetValue, changeStreetValue]=useState(user.address.street);
const [cityValue, changeCityValue]=useState(user.address.city);
const [zipCodeValue, changeZipcodeValue]=useState(user.address.zipcode);
const [phoneValue, changePhoneValue]=useState(user.phone);
const [websiteValue, changeWebsiteValue]=useState(user.website);
const [commentValue, changeCommentValue]=useState("");
let edit=()=>{
   changeIsReadOnly(false);
   changeIsDisabled(false);
}

const changeValue=( event: { target: { value: any; id: string; }; })=>{
   let value=event.target.value;
   let id=event.target.id;
   switch(id){
      case "name": changeNameValue(value);
      break;
      case "username": changeUserNameValue(value);
      break;
      case "email": changeEmailValue(value);
      break;
      case "street": changeStreetValue(value);
      break;
      case "city": changeCityValue(value);
      break;
      case "zipcode": changeZipcodeValue(value);
      break;
      case "phone": changePhoneValue(value);
      break;
      case "website": changeWebsiteValue(value);
      break;
      case "comment": changeCommentValue(value);
      break;
   }
}
return (
   <div className='Profile'>
       <div className="Profile__user-header">Профиль пользователя</div>  
       <button className="Profile__edit-button" onClick={()=>edit()}>Редактировать</button>
       <form className="Profile__form" onSubmit={ formSubmit}>
          <div>Name</div>
          <input id="name" value={nameValue} readOnly={isReadOnly} onChange={changeValue} required/>
          <div>User name</div>
          <input id="username" value={usernameValue}  readOnly={isReadOnly} onChange={changeValue}  required/>
          <div>E-mail</div>
          <input id="email" value={emailValue} onChange={changeValue} type="email" readOnly={isReadOnly} required/>
          <div>Street</div>
          <input id="street" value={streetValue} onChange={changeValue} readOnly={isReadOnly} required/>
          <div>City</div>
          <input id="city" value={cityValue} onChange={changeValue} readOnly={isReadOnly} required/>
          <div>Zip code</div>
          <input id="zipcode" value={zipCodeValue} onChange={changeValue} readOnly={isReadOnly} required/>
          <div>Phone</div>
          <input id="phone" value={phoneValue} onChange={changeValue} readOnly={isReadOnly} required/>
          <div>Website</div>
          <input id="website" value={websiteValue} onChange={changeValue} readOnly={isReadOnly} required/>
          <div>Comment</div>
          <input id="comment" value={commentValue} onChange={changeValue} readOnly={isReadOnly}/>
          <div><button className="Profile__form-submit-button"  type="submit" disabled={isDisabled}>Отправить</button></div>
       </form>
</div> 
)
}
export default Profile;

  