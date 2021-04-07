import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function TableComponent(props) {
  const { titleHeader, dataTable } = props;

  return (
    <>
      <TitleStyled>Listado de iniciativas</TitleStyled>
      <Wrapper>
        <TableStyled>
          <thead>
            <tr>
              {titleHeader.map((el, i) => {
                return <th key={i}>{el.title}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {dataTable.map((el, i) => {
              return (
                <tr key={i}>
                  <td>{el.number}</td>
                  <td>{el.title}</td>
                  <td>{el.status}</td>
                  <td>{el.pending}</td>
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
  titleHeader: PropTypes.array,
  dataTable: PropTypes.array,
};
export default TableComponent;

const Wrapper = styled.div`
  :hover {
    overflow-y: auto;
  }
  @media (min-width: 768px) {
    top: 3em;
    bottom: 0em;
    overflow: hidden;
    left: 0em;
    right: 0em;
    position: absolute;
  }
`;
const TableStyled = styled.table`
  width: 47.5vw;
  border-collapse: separate;
  border-spacing: 1em;
  margin-top: -1em;
  height: 100%;
  th {
    background: var(--gray-medium);
    height: 70px;
    font-family: var(--font-opensans);
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
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
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    color: var(--blue-dark);
  }
`;

const TitleStyled = styled.h2`
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: var(--blue-dark);
`;
