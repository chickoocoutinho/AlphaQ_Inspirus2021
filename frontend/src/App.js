import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import GoogleLogin from './component/GoogleLoginComponents';

import Landing from "./Pages/Landing"
import Login from "./Pages/Login";
import Courses from './Pages/Courses';
import Lectures from "./Pages/Lectures";
import Editor from "./Pages/Editor"


function App() {
  return (
    <>
      <Router>
        {/* <nav>
          NAV Here
        </nav> */}
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/courses'>
            <Courses />
          </Route>
          <Route path='/course-name/lectures'>
            <Lectures/>
          </Route>
          <Route path='/course-name/lecture-name/editor'>
            <Editor />
          </Route>
        </Switch>
        {/* <footer>
          Footer Here
        </footer> */}
    </Router>
    <div className="App">
      <GoogleLogin/>
    </div>
    </>
  );
}

export default App;
