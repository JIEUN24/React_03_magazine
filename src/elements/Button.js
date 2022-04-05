import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, position, onClick } = props;

  // position에 따라 return 값을 다르게 주어 각각 다른 모양의 버튼이 붙게 된다.

  if (position === "bottom") {
    return (
      <ButtonSt text={text} position={position} onClick={onClick}> {text} </ButtonSt>
    )
  }

  if (position === "header") {
    return (
      <ButtonSt2 position={position} onClick={onClick}> {text} </ButtonSt2>
    )
  }

  if(position === "right") {
    return (
      <FloatButton position={position} onClick={onClick}> {text} </FloatButton>
    )
  }

  if(position === "myheader") {
    return (
      <ButtonSt3 position={position} onClick={onClick}> {text} </ButtonSt3>
    )
  }

  return (
    <React.Fragment></React.Fragment>
  )
}

Button.defaultProps = {
  text: "로그인하기",
  position: "bottom",
}

const ButtonSt = styled.button`
    height: 40px;
    margin-top: 20px;
    background-color: black;
    border: none;
    border-radius: 3px;
    color: white;
`

const ButtonSt2 = styled.button`
    width: 65px;
    height: 28px;
    margin-left: 5px;
    background-color: black;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 13px;
`

const ButtonSt3 = styled.button`
  width: 20px;
  height: 28px;

  text-align: center;
  border: none;
  background-color: white;
  font-size: 21px;
  margin-right: 9px;
`

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212121;
  color: #ffffff;
  padding: 5px;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: bold;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
`




export default Button;