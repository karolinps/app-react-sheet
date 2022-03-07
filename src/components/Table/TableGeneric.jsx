import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function TableComponent(props) {
  const { dataTableHeader, dataTable, titleTable } = props;

  return (
    <>
      <HeaderContainer>
        <TitleStyled>{titleTable}</TitleStyled>
      </HeaderContainer>
      <Wrapper>
        <TableStyled>
          <thead>
            <tr>
              {dataTableHeader.map((el, i) => {
                return <th key={i}>{el.title}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {dataTable.map((el, i) => {
              return (
                <tr
                  key={i}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <td>{el.id}</td>
                  <td>{el.titulo_proy}</td>
                  <td>{el.status}</td>
                  <td>{el.ult_com}</td>
                </tr>
              );
            })}
          </tbody>
        </TableStyled>
      </Wrapper>
    </>
  );
}

TableComponent.propTypes = {
  dataTableHeader: PropTypes.array,
  dataTable: PropTypes.array,
  titleTable: PropTypes.string,
};
export default TableComponent;

const Wrapper = styled.div`
  :hover {
    overflow-y: auto;
  }
  overflow: hidden;
  display: block;
  height: 575px;
  @media (max-width: 647px) {
    width: 80vw;
    overflow: auto;
  }
`;
const TableStyled = styled.table`
  width: 47.5vw;
  border-collapse: separate;
  border-spacing: 0.5em 1em;
  // height: 100%;
  margin: -15px 0px;
  @media (min-width: 1223px) {
    border-spacing: 1em;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
    width: 100%;
  }
  th {
    background: var(--gray-medium);
    height: 70px;
    font-family: var(--font-opensans);
    font-style: normal;
    font-weight: bold;
    font-size: var(--subtitle);
    line-height: 27px;
    text-align: center;
    color: var(--blue-dark);
    padding: 0px 15px;
  }
  td {
    background: var(--gray-low);
    height: 70px;
    font-family: var(--font-opensans);
    font-style: normal;
    font-weight: normal;
    font-size: var(--body);
    line-height: 20px;
    text-align: center;
    color: var(--blue-dark);
  }
`;

const TitleStyled = styled.h2`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: var(--subtitle);
  line-height: 27px;
  color: var(--blue-dark);
  margin-left: 0.8em;
  @media (max-width: 991px) {
    margin-top: 1em;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
