import React, { useState } from "react";
import styled from "styled-components";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";

// 컴포넌트
import { Grid, Text, Button, Input } from "../elements";

// 리덕스 관련
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

// 이메일 형식 체크
import { emailCheck } from "../shared/Email";

const Login = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [pwd, setPwd] = useState();

  const login = () => {
    if( id === "" || pwd === "" ) {
      window.alert('아이디와 비밀번호를 모두 입력하세요.')
      return;
    }

    if(!emailCheck(id)) {
      alert("올바른 이메일 형식을 입력하세요.")
      return;
    }

    dispatch(userActions.loginFB(id, pwd));
  }

  return(
    <React.Fragment>
      <Grid margin="60px"/>
      <Grid padding="16px">
        <LoginSt>
          <Text size="32px" bold>로그인</Text>
          <Input
            label="아이디"
            type="text"
            placeholder="아이디를 입력하세요."
            onChange={(e) => {
              setId(e.target.value)
            }}
          />

          <Input
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력하세요."
            onChange={(e) => {
              setPwd(e.target.value)
            }}
          />

          <Button position="bottom" text="로그인하기" onClick={login}></Button>
        </LoginSt>
      </Grid>
    </React.Fragment>
  )

}

const LoginSt = styled.div`
  display: flex;
  flex-direction: column;
`

export default Login;