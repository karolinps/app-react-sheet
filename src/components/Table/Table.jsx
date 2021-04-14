import React, { useState } from "react";
import styled from "styled-components";
import DrawerComponent from "../Drawer/Drawer";
import PropTypes from "prop-types";
import ShowInitiatives from "../Initiative/Initiative";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  clearFilterAll,
  getByIniatitive,
  filterByFirstTrimester,
  filterBySecondTrimester,
  filterByThirdTrimester,
  filterByFourthTrimester,
} from "../../redux/initiative/initiativeDucks";
import Filter from "./Filter";

function TableComponent(props) {
  const { titleHeader, dataTable, urlApi } = props;
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState("");
  const [dataShow, setDataShow] = useState({});
  const dispatch = useDispatch();

  console.log(dataTable)
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
      title={dataShow.titulo_proy}
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

  const clearFilter = () => {
    dispatch(clearFilterAll());
  };

  const filter = async (action) => {
    let resData = await axios.get(urlApi).then((res) => {
      return res.data;
    });
    if (action === 1) {
      dispatch(filterByFirstTrimester(resData));
    } else if (action === 2) {
      dispatch(filterBySecondTrimester(resData));
    } else if (action === 3) {
      dispatch(filterByThirdTrimester(resData));
    } else if (action === 4) {
      dispatch(filterByFourthTrimester(resData));
    }
  };

  return (
    <>
      {drawer}
      <HeaderContainer>
        <TitleStyled>Listado de iniciativas</TitleStyled>
        <Filter
          clear={clearFilter}
          filterByT1={() => filter(1)}
          filterByT2={() => filter(2)}
          filterByT3={() => filter(3)}
          filterByT4={() => filter(4)}
        />
      </HeaderContainer>
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
                    {el.id}
                  </td>
                  <td
                    style={{
                      backgroundColor: hover === i ? "var(--blue-medium)" : "",
                      color: hover === i ? "#fff" : "",
                    }}
                  >
                    {el.titulo_proy}
                  </td>
                  <td
                    style={{
                      backgroundColor: hover === i ? "var(--blue-medium)" : "",
                      color: hover === i ? "#fff" : "",
                    }}
                  >
                    {el.status}
                  </td>
                  <td
                    style={{
                      backgroundColor: hover === i ? "var(--blue-medium)" : "",
                      color: hover === i ? "#fff" : "",
                    }}
                  >
                    {el.ult_com}
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
  urlApi: PropTypes.string,
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

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
