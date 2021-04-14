import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function Initiative(props) {
  const { dataShow } = props;

  const statusCapex =
    dataShow.aux_capex === "r"
      ? "var(--danger)"
      : dataShow.aux_capex === "a"
      ? "yellow"
      : dataShow.aux_capex === "v"
      ? "var(--green)"
      : "var(--gray)";

  const statusPlazo =
    dataShow.aux_plazo === "r"
      ? "var(--danger)"
      : dataShow.aux_plazo === "a"
      ? "yellow"
      : dataShow.aux_plazo === "v"
      ? "var(--green)"
      : "var(--gray)";

  const statusBeneficio =
    dataShow.aux_benef === "r"
      ? "var(--danger)"
      : dataShow.aux_benef === "a"
      ? "yellow"
      : dataShow.aux_benef === "v"
      ? "var(--green)"
      : "var(--gray)";

  return (
    <Wrapper>
      <TitleStyled>Descripción</TitleStyled>
      <ContentStyled style={{ height: "12vh", overflowY: "auto" }}>
        {dataShow.descr}
      </ContentStyled>
      {/*Carpex */}
      <Container>
        <TitleStyled>Capex (USD)</TitleStyled>
        <Circle
          style={{
            backgroundColor: statusCapex,
          }}
        ></Circle>
      </Container>
      <Container>
        <ContentStyled style={{ color: "var(--blue-dark)" }}>
          Comprometido
        </ContentStyled>
        <ContentStyled>{dataShow.capex_compr}</ContentStyled>
      </Container>
      <Container>
        <ContentStyled style={{ color: "var(--blue-dark)" }}>
          Proyectado
        </ContentStyled>
        <ContentStyled>{dataShow.capex_proy}</ContentStyled>
      </Container>
      {/*Plazo */}
      <Container>
        <TitleStyled>Plazo</TitleStyled>
        <Circle style={{ background: statusPlazo }}></Circle>
      </Container>
      <Container>
        <ContentStyled style={{ color: "var(--blue-dark)" }}>
          Comprometido
        </ContentStyled>
        <ContentStyled>{dataShow.fecha_fin_compr}</ContentStyled>
      </Container>
      <Container>
        <ContentStyled style={{ color: "var(--blue-dark)" }}>
          Proyectado
        </ContentStyled>
        <ContentStyled>{dataShow.fecha_fin_proy}</ContentStyled>
      </Container>
      {/**Beneficio USD */}
      <Container>
        <TitleStyled>Beneficio USD</TitleStyled>
        <Circle style={{ background: statusBeneficio }}></Circle>
      </Container>
      <Container>
        <ContentStyled style={{ color: "var(--blue-dark)" }}>
          Comprometido
        </ContentStyled>
        <ContentStyled>{dataShow.benef_compr}</ContentStyled>
      </Container>
      <Container>
        <ContentStyled style={{ color: "var(--blue-dark)" }}>
          Proyectado
        </ContentStyled>
        <ContentStyled>{dataShow.benef_proy}</ContentStyled>
      </Container>
      {/**Equipo */}
      <Container>
        <TitleStyled>Equipo</TitleStyled>
      </Container>
      <Container>
        <ContentStyled style={{ color: "var(--blue-dark)" }}>
          Cliente interno
        </ContentStyled>
        <ContentStyled>{dataShow.cliente_int}</ContentStyled>
      </Container>
      <Container>
        <ContentStyled style={{ color: "var(--blue-dark)" }}>
          Ingeniero a cargo
        </ContentStyled>
        <ContentStyled>{dataShow.ingeniero_exop}</ContentStyled>
      </Container>
      <Container>
        <ContentStyled style={{ color: "var(--blue-dark)" }}>
          Ingeniero backup
        </ContentStyled>
        <ContentStyled>{dataShow.ing_exop_b}</ContentStyled>
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
