import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

// 컴포넌트
import PostList from "../pages/PostList";
import PostWrite from "../pages/PostWrite";
import Header from "../components/Header";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostDtail from "../pages/PostDetail";
import Notification from "../pages/Notification";
import Permit from "./Permit";
import { Grid, Button } from "../elements";

// 리덕스
import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user"
import { apiKey } from "./firebase"


function App() {
  const dispatch = useDispatch();
  const session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(session_key) ? true : false;

  React.useEffect(() => {
    if(is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  return (
    <React.Fragment>
      <Header/>
      {/* <Grid margin="85px"/> */}
      <Grid>
        <ConnectedRouter history={history}>
          <Route path='/' exact component={PostList}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/signup' exact component={Signup}/>
          <Route path='/write' exact component={PostWrite}/>
          <Route path='/write/:id' exact component={PostWrite}/>
          <Route path='post/:id' exact component={PostDtail}/>
          <Route path='/noti' exact component={Notification}/>
        </ConnectedRouter>
      </Grid>
      <Permit>
        <Button position="right" text="+" onClick={() => {history.push("/write")}}></Button>
      </Permit>
    </React.Fragment>
  );
}

export default App;
