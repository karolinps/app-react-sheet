import React from "react";
import styled from "styled-components";
import Select from "../Default/Select";

function Form() {
  const [tab, setTab] = React.useState(1);

  const handlerTab = (action) => {
    if (action === 1) {
      setTab(1);
    } else {
      setTab(2);
    }
  };
  return (
    <Wrapper>
      <TabStyled>
        <HeaderTab onClick={() => handlerTab(1)}>Detalle</HeaderTab>
        <HeaderTab onClick={() => handlerTab(2)}>Priorización</HeaderTab>
      </TabStyled>

      {tab === 1 ? (
        <TabFirstComponent>
          <input placeholder={"Título"} />
          <textarea placeholder={"Descripción"} />
          <input placeholder={"Objetivo"} />
          <Grid>
            <input placeholder={"País"} />
            <input placeholder={"Estación"} />
          </Grid>
          <Grid>
            <input placeholder={"Gerencia"} />
            <input placeholder={"Área"} />
          </Grid>
          <input placeholder={"Capex comprometido"} />
          <input placeholder={"Fecha"} />
          <Grid>
            <input placeholder={"Cliente interno"} />
            <input placeholder={"Sponsor"} />
          </Grid>
        </TabFirstComponent>
      ) : (
        <TabSecondComponent>
          <Select
            //   options={size}
            placeholder={"¿Requerimiento de cliente?"}
            //   useRef={selectSizeRef}
            //   handleChange={handleChange}
          />
          <Select
            //   options={size}
            placeholder={"¿Potencial pérdida de cliente?"}
            //   useRef={selectSizeRef}
            //   handleChange={handleChange}
          />
          <Select
            //   options={size}
            placeholder={"¿Impacto en HSSEQ?"}
            //   useRef={selectSizeRef}
            //   handleChange={handleChange}
          />
          <Select
            //   options={size}
            placeholder={"Impacto Económico"}
            //   useRef={selectSizeRef}
            //   handleChange={handleChange}
          />
          <Select
            //   options={size}
            placeholder={"¿Impacto en productividad?"}
            //   useRef={selectSizeRef}
            //   handleChange={handleChange}
          />
          <Select
            //   options={size}
            placeholder={"¿Plazo de implementación?"}
            //   useRef={selectSizeRef}
            //   handleChange={handleChange}
          />
          <Select
            //   options={size}
            placeholder={"¿Requiere IT?"}
            //   useRef={selectSizeRef}
            //   handleChange={handleChange}
          />
        </TabSecondComponent>
      )}
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
  cursor: pointer;
`;

const TabFirstComponent = styled.div`
  input,
  textarea {
    width: 100%;
    height: 52px;
    background: var(--gray-low);
    border-radius: 5px;
    border: none;
    margin: 0.5em 0;
    padding: 0.5em;
    outline: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: var(--subtitle);
    letter-spacing: 0.05em;
    color: var(--gray);
  }
  textarea {
    resize: none;
    height: 8em;
  }
`;
const TabSecondComponent = styled.div`
  margin: 0.5em 0;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
`;
