import React from "react";
import styled from "styled-components";

function Form() {
  return (
    <Wrapper>
      <TabStyled>
        <div>Detalle</div>
        <div>Priorización</div>
      </TabStyled>
    </Wrapper>
  );
}

export default Form;

const Wrapper = styled.div``;

const TabStyled = styled.div`
  display: flex;
`;
