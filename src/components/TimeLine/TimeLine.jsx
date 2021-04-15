import React from "react";
import { Timeline } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";

function TimeLineComponennt(props) {
  const { data } = props;
  const isExisData = data.length > 0;
  const dataTimeLine = [
    {
      title: "LO",
      date: isExisData ? data[0].l0_idea : null,
      description: "Idea capturada",
      children: [
        {
          date: isExisData ? data[0].acta_1 : null,
          description: "Entregable #0 OK",
        },
      ],
    },
    {
      title: "L1",
      date: isExisData ? data[0].l1_Identificacion : null,
      description: "Idea validada",
      children: [
        {
          date: isExisData ? data[0].proc_criticos_2 : null,
          description: "Entregable #1 OK",
        },
        {
          date: isExisData ? data[0].bc_3 : null,
          description: "Entregable #2 OK",
        },
        {
          date: isExisData ? data[0].ppt_bc_4 : null,
          description: "Entregable #3 OK",
        },
      ],
    },
    {
      title: "L2",
      date: isExisData ? data[0].l2_validacion : null,
      description: "Idea validada",
      children: [
        {
          date: isExisData ? data[0].gantt_5 : null,
          description: "Entregable #1 OK",
        },
        {
          date: isExisData ? data[0].edt_6 : null,
          description: "Entregable #2 OK",
        },
        {
          date: isExisData ? data[0].raci_7 : null,
          description: "Entregable #3 OK",
        },
        {
          date: isExisData ? data[0].constitucion_8 : null,
          description: "Entregable #4 OK",
        },
      ],
    },
    {
      title: "L3",
      date: isExisData ? data[0].l3_planeacion : null,
      description: "Idea planeada",
      children: [
        {
          date: isExisData ? data[0].control_costos_9 : null,
          description: "Entregable #1 OK",
        },
        {
          date: isExisData ? data[0].cierre_proy_10 : null,
          description: "Entregable #2 OK",
        },
      ],
    },
    {
      title: "L4",
      date: isExisData ? data[0].l4_implementacion : null,
      description: "Idea implementada",
      children: [
        {
          date: isExisData ? data[0].act_bc_11 : null,
          description: "Entregable #2 OK",
        },
        {
          date: isExisData ? data[0].a3_12 : null,
          description: "Entregable #2 OK",
        },
      ],
    },
    {
      title: "L5",
      date: isExisData ? data[0].l5_capturada : null,
      description: "Idea capturada",
      children: [
        {
          date: isExisData ? data[0].traspaso_13 : null,
          description: "Entregable #2 OK",
        },
      ],
    },
  ];
  return (
    <Wrapper>
      <Timeline mode={"alternate"}>
        {dataTimeLine.map((el, i) => {
          return (
            <Container key={i}>
              {el.date === null || el.date === "" ? (
                <p></p>
              ) : (
                <Timeline.Item dot={<DotStyled>{el.title}</DotStyled>}>
                  <BodyParent>
                    <DateStyled>{el.date}</DateStyled>
                    <DescriptionStyled>{el.description}</DescriptionStyled>
                  </BodyParent>
                </Timeline.Item>
              )}
              {el.children.length > 0
                ? el.children.map((item, i) => {
                    return item.date === null || item.date === "" ? (
                      <p key={i}></p>
                    ) : (
                      <Timeline.Item key={i}>
                        <BodyChild>
                          <DateStyled>{item.date}</DateStyled>
                          <DescriptionStyled>
                            {item.description}
                          </DescriptionStyled>
                        </BodyChild>
                      </Timeline.Item>
                    );
                  })
                : null}
            </Container>
          );
        })}
      </Timeline>
    </Wrapper>
  );
}
TimeLineComponennt.propTypes = {
  data: PropTypes.any,
};
export default TimeLineComponennt;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  :hover {
    overflow-y: auto;
  }
  overflow: auto;
  height: 540px;
  @media (max-width: 647px) {
    width: 80vw;
    overflow: auto;
  }
  .ant-timeline {
    margin: 4em 0px;
  }
  .ant-timeline-item-tail {
    border: 3px solid var(--blue);
    background: var(--blue);
  }
  .ant-timeline-item-head-blue {
    width: 17px;
    height: 17px;
    background: var(--blue-dark);
    border: none;
    margin-left: -5px !important;
  }
  p {
    margin-bottom: 0px;
    font-family: var(--font-opensans);
    font-style: normal;
  }
  .ant-timeline.ant-timeline-alternate
    .ant-timeline-item-right
    .ant-timeline-item-content,
  .ant-timeline.ant-timeline-alternate
    .ant-timeline-item-left
    .ant-timeline-item-content {
    width: auto;
    left: 0;
    text-align: inherit;
  }
`;
const Container = styled.div``;
const DotStyled = styled.div`
  background: var(--gray-high);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--blue-dark);
  font-family: var(--font-opensans);
  font-style: normal;
  font-weight: bold;
  font-size: var(--subtitle);
  line-height: 2.2em;
  margin: -1em -5px;
`;

const DateStyled = styled.p`
  font-weight: 600;
  font-size: var(--body);
  color: var(--gray-dark);
`;

const DescriptionStyled = styled.p`
  font-weight: 400;
  font-size: var(--body);
  color: var(--blue-dark);
`;

const BodyParent = styled.div`
  text-align: right;
  position: relative;
  left: 5em;
`;

const BodyChild = styled.div`
  position: relative;
  left: -6em;
  top: 0.5em;
`;
