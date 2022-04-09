import * as React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import SortPanelContainer from "./components/SortPanel/SortPanelContainer";
import UsersContainer from "./components/Users/UsersContainer";
class App extends React.Component {
    render() {
        return (
            <div className="App">
               <Router>
                     <SortPanelContainer/>
                     <Routes>
                        <Route path="/" element={<UsersContainer/>}/>
                        <Route path="/profile/:id" element={<ProfileContainer/>}/>
                        <Route path="*" element={<UsersContainer/>}/>
                     </Routes>
                </Router>
            </div>           
               );
             }
           }
export default App;