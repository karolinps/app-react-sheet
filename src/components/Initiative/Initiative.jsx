import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Initiative(props) {
  const { dataShow } = props;
  return (
    <Wrapper>
      <TitleStyled>Descripción</TitleStyled>
      <ContentStyled style={{ height: "12vh", overflowY: "auto" }}>
        {dataShow.descripcion}
      </ContentStyled>
      {/*Carpex */}
      <Container>
        <TitleStyled>Capex (USD)</TitleStyled>
        <Circle></Circle>
      </Container>
      <Container>
        <ContentStyled style={{ color: "var(--blue-dark)" }}>
          Comprometido
        </ContentStyled>
        <ContentStyled>200.00</ContentStyled>
      </Container>
      <Container>
        <ContentStyled style={{ color: "var(--blue-dark)" }}>
          Comprometido
        </ContentStyled>
        <ContentStyled>200.00</ContentStyled>
      </Container>
      {/*Plazo */}
      <Container>
        <TitleStyled>Plazo</TitleStyled>
        <Circle style={{ background: "var(--danger)" }}></Circle>
      </Container>
      <Container>
        <ContentStyled style={{ color: "var(--blue-dark)" }}>
          Comprometido
        </ContentStyled>
        <ContentStyled>{dataShow.fecha_inicio_implementacion_l3}</ContentStyled>
      </Container>
      <Container>
        <ContentStyled style={{ color: "var(--blue-dark)" }}>
          Comprometido
        </ContentStyled>
        <ContentStyled>{dataShow.fecha_inicio_implementacion_l3}</ContentStyled>
      </Container>
      {/**Beneficio USD */}
      <Container>
        <TitleStyled>Beneficio USD</TitleStyled>
        <Circle style={{ background: "var(--green)" }}></Circle>
      </Container>
      <Container>
        <ContentStyled style={{ color: "var(--blue-dark)" }}>
          Comprometido
        </ContentStyled>
        <ContentStyled>200.00</ContentStyled>
      </Container>
      <Container>
        <ContentStyled style={{ color: "var(--blue-dark)" }}>
          Comprometido
        </ContentStyled>
        <ContentStyled>200.00</ContentStyled>
      </Container>
      {/**Equipo */}
      <Container>
        <TitleStyled>Equipo</TitleStyled>
      </Container>
      <Container>
        <ContentStyled style={{ color: "var(--blue-dark)" }}>
          Cliente interno
        </ContentStyled>
        <ContentStyled>Roberto Parra</ContentStyled>
      </Container>
      <Container>
        <ContentStyled style={{ color: "var(--blue-dark)" }}>
          Ingeniero a cargo
        </ContentStyled>
        <ContentStyled>Diego Zamora</ContentStyled>
      </Container>
    </Wrapper>
  );
}

Initiative.propTypes = {
  dataShow: PropTypes.object,
};
export default Initiative;

const Wrapper = styled.div``;
const TitleStyled = styled.h2`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: var(--subtitle);
  line-height: 27px;
  color: var(--blue-dark);
`;

const ContentStyled = styled.p`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: normal;
  font-size: var(--body);
  line-height: 20px;
  color: var(--gray-dark);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Circle = styled.div`
  background: yellow;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
