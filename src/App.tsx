import * as React from "react";
import "./App.scss";
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import SortPanelContainer from "./components/SortPanel/SortPanelContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Profile from "./components/Profile/Profile";
const App =()=> (
            <div className="App">
               <Router>
                     <SortPanelContainer/>
                     <Routes>
                        <Route path ="/profile/:id" element={<Profile/>}/>
                        <Route path="/" element={<UsersContainer/>}/>
                        <Route path="*" element={<UsersContainer/>}/>
                     </Routes>
                </Router>
            </div>           
)   
             
export default App;