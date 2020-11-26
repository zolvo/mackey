import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Project from "./pages/Projects";
import Home from "./pages/Home";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import ProjectAdd from "./pages/ProjectAdd";

function App() {
  const dispatch = useDispatch();

  // const sessionUser = useSelector((state) => state.session.user);

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = <Main user={sessionUser} />;
  // } else {
  //   sessionLinks = <Home />;
  // }

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Navigation isLoaded={isLoaded} />
        {isLoaded && (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/main" component={Main} />
            <Route path="/project/add" component={ProjectAdd} />
            <Route path="/project" component={Project} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="*" component={NotFound} />
          </Switch>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
