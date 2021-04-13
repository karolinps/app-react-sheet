import React from "react";
import styled from "styled-components";

function Form() {
  return (
    <Wrapper>
      <TabStyled>
        <HeaderTab>Detalle</HeaderTab>
        <HeaderTab>Priorización</HeaderTab>
      </TabStyled>
    </Wrapper>
  );
}

export default Form;

const Wrapper = styled.div``;

const TabStyled = styled.div`
  display: flex;
`;

const HeaderTab = styled.div`
  margin: 0 0.5em;
  font-family: var(font-opensans);
  font-style: normal;
  font-weight: normal;
  font-size: var(--body);
  line-height: 20px;
  color: var(--blue-dark);
`;
