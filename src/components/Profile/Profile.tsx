import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Profile.scss";
const Profile=(props: { data: any[]; })=>{
let url=window.location.href;
let urlPart=url.split("/")[4];
let urlPartNumber=Number(urlPart);
let users=props.data.filter((i: { id: number; })=>i.id===urlPartNumber);
let user=users[0];
const navigate=useNavigate();
let formSubmit=(event: { preventDefault: () => void; target: any; })=>{
   event.preventDefault();
   const form=event.target;
   const name=form.elements["name"].value;
   const username=form.elements["username"].value;
   const email=form.elements["email"].value;
   const street=form.elements["street"].value;
   const city=form.elements["city"].value;
   const zipcode=form.elements["zipcode"].value;
   const phone=form.elements["phone"].value;
   const website=form.elements["website"].value;
   const comment=form.elements["comment"].value;
   let obj={
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
const [zipCodeValue, changeZipCodeValue]=useState(user.address.zipcode);
const [phoneValue, changePhoneValue]=useState(user.phone);
const [websiteValue, changeWebsiteValue]=useState(user.website);
const [commentValue, changeCommentValue]=useState("");
let edit=()=>{
   changeIsReadOnly(false);
   changeIsDisabled(false);
}
let changeName=(event: { target: { value: any; }; })=>{
   let value=event.target.value;
   changeNameValue(value)
  }
let changeUserName=(event: { target: { value: any; }; })=>{
   let value=event.target.value;
   changeUserNameValue(value)
  }
let changeEmail=(event: { target: { value: any; }; })=>{
   let value=event.target.value;
   changeEmailValue(value)
  }
let changeStreet=(event: { target: { value: any; }; })=>{
   let value=event.target.value;
   changeStreetValue(value)
  }
let changeCity=(event: { target: { value: any; }; })=>{
   let value=event.target.value;
   changeCityValue(value)
  }
let changeZipCode=(event: { target: { value: any; }; })=>{
   let value=event.target.value;
   changeZipCodeValue(value)
  }
let changePhone=(event: { target: { value: any; }; })=>{
   let value=event.target.value;
   changePhoneValue(value)
  }
let changeWebsite=(event: { target: { value: any; }; })=>{
   let value=event.target.value;
   changeWebsiteValue(value)
  }
let changeComment=(event: { target: { value: any; }; })=>{
   let value=event.target.value;
   changeCommentValue(value)
  } 
return (
   <div className='Profile'>
       <div className="Profile__user-header">Профиль пользователя</div>  
       <button className="Profile__edit-button" onClick={()=>edit()}>Редактировать</button>
       <form className="Profile__form" onSubmit={ formSubmit}>
          <div>Name</div>
          <input id="name" value={nameValue} readOnly={isReadOnly} onChange={changeName} required/>
          <div>User name</div>
          <input id="username" value={usernameValue}  readOnly={isReadOnly} onChange={changeUserName}  required/>
          <div>E-mail</div>
          <input id="email" value={emailValue} onChange={changeEmail} type="email" readOnly={isReadOnly} required/>
          <div>Street</div>
          <input id="street" value={streetValue} onChange={changeStreet} readOnly={isReadOnly} required/>
          <div>City</div>
          <input id="city" value={cityValue} onChange={changeCity} readOnly={isReadOnly} required/>
          <div>Zip code</div>
          <input id="zipcode" value={zipCodeValue} onChange={changeZipCode} readOnly={isReadOnly} required/>
          <div>Phone</div>
          <input id="phone" value={phoneValue} onChange={changePhone} readOnly={isReadOnly} required/>
          <div>Website</div>
          <input id="website" value={websiteValue} onChange={changeWebsite} readOnly={isReadOnly} required/>
          <div>Comment</div>
          <input id="comment" value={commentValue} onChange={changeComment} readOnly={isReadOnly}/>
          <div><button className="Profile__form-submit-button"  type="submit" disabled={isDisabled}>Отправить</button></div>
       </form>
</div> 
)
}
export default Profile;

  