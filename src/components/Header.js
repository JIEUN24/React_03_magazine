import React from "react";
import styled from "styled-components";

// 컴포넌트
import { Text, Button } from "../elements";

// 리덕스 관련
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";
import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";

const Header = (props) => {
  const is_login = useSelector((state) => state.user.is_login);

  const session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(session_key) ? true : false;
  
  console.log(is_session);

  const dispatch = useDispatch();

  if(is_login && is_session){
    return(
      <React.Fragment>
      <HeaderSt>
        <div>
          <Text
            bold size="24px"
            onClick={() => {
              history.push('/')
            }}>Hello, magazine</Text>
        </div>
        <div>
          <Button position="myheader" text="🙍‍♀️"/>
          <Button position="header" text="알림" onClick={() => {history.push("/noti")}}/>
          <Button position="header" text="로그아웃" onClick={() => {dispatch(userAction.logoutFB())}}/>
        </div>
      </HeaderSt>
    </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <HeaderSt>
        <div>
          <Text
            bold size="24px"
            onClick={() => {
              history.push('/')
            }}>Hello, magazine</Text>
        </div>
        <div>
          <Button
            position="header"
            text="로그인"
            onClick={() => {
              history.push('/login')
            }}
          />
          <Button
            position="header"
            text="회원가입"
            onClick={() => {
              history.push('/signup')
            }}
          />
        </div>
      </HeaderSt>
    </React.Fragment>
  )
}

const HeaderSt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-bottom: 1px solid black;

  div {
    padding-right: 20px;
    padding-left: 20px;
  }
`

export default Header;