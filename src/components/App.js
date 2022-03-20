import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProfileContainer from "./Profile/ProfileContainer";
import SortPanelContainer from "./SortPanel/SortPanelContainer";
import UsersContainer from "./Users/UsersContainer";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                     <SortPanelContainer/>
                     <Routes>
                        <Route path="/" element={<UsersContainer/>}/>
                        <Route path="/profile/:id" element={<ProfileContainer/>}/>
                     </Routes>
                </Router>
            </div>
               );
             }
           }

export default App;