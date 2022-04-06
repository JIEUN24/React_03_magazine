import React from "react";
import styled from "styled-components";
import { Text } from "../elements"

const Input = (props) => {
  const { label, type, placeholder, onChange, write, value } = props;

  if ( write === "write" ) {
    return (
      <React.Fragment>
      <Wrap>
        <Text size="16px" bold> {label} </Text>
        <TextaraSt
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={onChange}/>
      </Wrap>
    </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Wrap>
        <Label> {label} </Label>
        <InputSt type={type} placeholder={placeholder} onChange={onChange}/>
      </Wrap>
    </React.Fragment>
  )
}

Input.defaultProps = {
  label: null,
  type: "text",
  placeholder: null,
  wirte: false,
  value: "",
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  margin-bottom: 5px;
`

const InputSt = styled.input`
  border: 1px solid gray;
  width: 100%;
  height: 30px;
  padding: 12px 4px;
  box-sizing: border-box;
  margin-bottom: 20px;
`

const TextaraSt = styled.textarea`
  resize:none;
  border: 1px solid #212121;
  width: 100%;
  min-height: 100px;
  padding: 12px 4px;
  box-sizing: border-box;
`

export default Input;