import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import scriptjs from "scriptjs";
import "./App.css";

import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Courses from "./Pages/Courses";
import Lectures from "./Pages/Lectures";
import Editor from "./Pages/Editor";

function App() {
  useEffect(() => {
    scriptjs("https://apis.google.com/js/api.js", () => {
      window.gapi.client
        .init({
          apiKey: "YOUR_API_KEY",
          discoveryDocs: ["https://people.googleapis.com/$discovery/rest"],
          clientId: "YOUR_WEB_CLIENT_ID.apps.googleusercontent.com",
          scope: "profile",
        })
        .then(function () {
          return window.gapi.client.people.people.get({
            resourceName: "people/me",
            "requestMask.includeField": "person.names",
          });
        })
        .then(
          function (response) {
            console.log(response.result);
          },
          function (reason) {
            console.log("Error: " + reason.result.error.message);
          }
        );
    });
  }, []);
  return (
    <Router>
      {/* <nav>
          NAV Here
        </nav> */}
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/course-name/lectures">
          <Lectures />
        </Route>
        <Route path="/course-name/lecture-name/editor">
          <Editor />
        </Route>
      </Switch>
      {/* <footer>
          Footer Here
        </footer> */}
    </Router>
  );
}

export default App;
