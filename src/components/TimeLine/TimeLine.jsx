import React from "react";
import { Timeline } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";

function TimeLineComponennt(props) {
  const { data } = props;
  const dataTimeLine = [
    {
      title: "LO",
      date: data.l0_idea,
      description: "Idea capturada",
      children: [
        {
          date: data.acta_1,
          description: "Entregable #0 OK",
        },
      ],
    },
    {
      title: "L1",
      date: data.l1_Identificacion,
      description: "Idea validada",
      children: [
        {
          date: data.proc_criticos_2,
          description: "Entregable #1 OK",
        },
        {
          date: data.bc_3,
          description: "Entregable #2 OK",
        },
        {
          date: data.ppt_bc_4,
          description: "Entregable #3 OK",
        },
      ],
    },
    {
      title: "L2",
      date: data.l2_validacion,
      description: "Idea validada",
      children: [
        {
          date: data.gantt_5,
          description: "Entregable #1 OK",
        },
        {
          date: data.edt_6,
          description: "Entregable #2 OK",
        },
        {
          date: data.raci_7,
          description: "Entregable #3 OK",
        },
        {
          date: data.constitucion_8,
          description: "Entregable #4 OK",
        },
      ],
    },
    {
      title: "L3",
      date: data.l3_planeacion,
      description: "Idea planeada",
      children: [
        {
          date: data.control_costos_9,
          description: "Entregable #1 OK",
        },
        {
          date: data.cierre_proy_10,
          description: "Entregable #2 OK",
        },
      ],
    },
    {
      title: "L4",
      date: data.l4_implementacion,
      description: "Idea implementada",
      children: [
        {
          date: data.act_bc_11,
          description: "Entregable #2 OK",
        },
        {
          date: data.a3_12,
          description: "Entregable #2 OK",
        },
      ],
    },
    {
      title: "L5",
      date: data.l5_capturada,
      description: "Idea capturada",
      children: [
        {
          date: data.traspaso_13,
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
  data: PropTypes.object,
};
export default TimeLineComponennt;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  :hover {
    overflow-y: auto;
  }
  overflow: auto;
  height: 80vh;
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
