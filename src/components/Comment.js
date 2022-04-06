import React from "react";
import styled from "styled-components";
import { Grid, Image, Button, Text } from "../elements";

const Comment = (props) => {
  return (
    <React.Fragment>
      <Grid width="auto" margin="0px 16px" bg="#F5F5F5">
        <Grid width="auto" is_flex padding="20px 20px">
          <Image shape="circle" src={props.src}/>
          <Input style={{width: "300px"}} type="text"></Input>
          <button>댓글</button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const Input = styled.input`
  width: 300px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid darkgray;
  background: none;
`

export default Comment;