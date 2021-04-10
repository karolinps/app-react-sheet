import React, { useState } from "react";
import styled from "styled-components";
import DrawerComponent from "../Drawer/Drawer";
import PropTypes from "prop-types";
import ShowInitiatives from "../Initiative/Initiative";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getByIniatitive } from "../../redux/initiative/initiativeDucks";

function TableComponent(props) {
  const { titleHeader, dataTable } = props;
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState("");
  const [dataShow, setDataShow] = useState({});
  const dispatch = useDispatch();

  const showDrawer = (el) => {
    setDataShow(el);
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const handleHover = (i, action) => {
    if (action === 1) {
      setHover(i);
    } else {
      setHover();
    }
  };
  const viewDetail = () => {
    props.history.push(`/detail-initiative/${dataShow.id}`);
    dispatch(getByIniatitive(dataShow));
  };
  const drawer = (
    <DrawerComponent
      title={dataShow.titulo}
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
      width={400}
      titleButton={"Ir a la iniciativa"}
      handleAction={viewDetail}
    >
      <ShowInitiatives dataShow={dataShow}></ShowInitiatives>
    </DrawerComponent>
  );
  return (
    <>
      {drawer}
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
                <tr
                  key={i}
                  onClick={() => showDrawer(el)}
                  onMouseEnter={() => handleHover(i, 1)}
                  onMouseLeave={() => handleHover(i, 2)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <td
                    style={{
                      backgroundColor: hover === i ? "var(--blue-medium)" : "",
                      color: hover === i ? "#fff" : "",
                    }}
                  >
                    00{i + 1}
                  </td>
                  <td
                    style={{
                      backgroundColor: hover === i ? "var(--blue-medium)" : "",
                      color: hover === i ? "#fff" : "",
                    }}
                  >
                    {el.titulo}
                  </td>
                  <td
                    style={{
                      backgroundColor: hover === i ? "var(--blue-medium)" : "",
                      color: hover === i ? "#fff" : "",
                    }}
                  >
                    {el.estado_simplificado}
                  </td>
                  <td
                    style={{
                      backgroundColor: hover === i ? "var(--blue-medium)" : "",
                      color: hover === i ? "#fff" : "",
                    }}
                  >
                    {el.pending}
                  </td>
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
  history: PropTypes.object,
};
export default withRouter(TableComponent);

const Wrapper = styled.div`
  :hover {
    overflow-y: auto;
  }
  overflow: hidden;
  height: 80vh;
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
