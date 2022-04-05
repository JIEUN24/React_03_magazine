import React, { cloneElement } from "react";
import styled from "styled-components";

const Text = (props) => {
  const { margin, bold, color, size, children, onClick } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
  };

  return (
    <P {...styles} onClick={onClick}>
      {children}
    </P>
  )
}

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
}

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  margin: ${(props) => props.margin};;
`

export default Text;