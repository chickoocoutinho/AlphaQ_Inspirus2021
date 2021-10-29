import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Courses from "./Pages/Courses";
import Lectures from "./Pages/Lectures";
import Editor from "./Pages/Editor";
import Notes from "./Pages/Notes";

import NavBar from "./component/NavBar"

function App() {
  return (
    <>
      <Router>
        {/* <nav>
          NAV Here
        </nav> */}
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route path="/course-name/lectures">
            <Lectures />
          </Route>
          <Route exact path="/courses/:title/:lectureId/:courseId">
            <Editor />
          </Route>
          <Route exact path="/notes">
            <Notes/>
          </Route>
        </Switch>
        {/* <footer>
          Footer Here
        </footer> */}
      </Router>
    </>
  );
}

export default App;
