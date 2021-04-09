import React from "react";
import { Timeline } from "antd";
import styled from "styled-components";

function TimeLineComponennt() {
  const data = [
    {
      title: "LO",
      date: "22/10/2021",
      description: "Idea capturada",
      children: [
        {
          date: "22/10/2021",
          description: "Entregable #0 OK",
        },
      ],
    },
    {
      title: "L1",
      date: "22/10/2021",
      description: "Idea validada",
      children: [
        {
          date: "22/10/2021",
          description: "Entregable #1 OK",
        },
        {
          date: "22/10/2021",
          description: "Entregable #2 OK",
        },
        {
          date: "22/10/2021",
          description: "Entregable #1 OK",
        },
        {
          date: "22/10/2021",
          description: "Entregable #2 OK",
        },
      ],
    },
    {
      title: "L2",
      date: "22/10/2021",
      description: "Idea validada",
      children: [
        {
          date: "22/10/2021",
          description: "Entregable #2 OK",
        },
        {
          date: "22/10/2021",
          description: "Entregable #2 OK",
        },
      ],
    },
  ];
  return (
    <Wrapper>
      <Timeline mode={"alternate"}>
        {data.map((el, i) => {
          return (
            <Container key={i}>
              <Timeline.Item dot={<DotStyled>{el.title}</DotStyled>}>
                <BodyParent>
                  <DateStyled>{el.date}</DateStyled>
                  <DescriptionStyled>{el.description}</DescriptionStyled>
                </BodyParent>
              </Timeline.Item>
              {el.children.length > 0
                ? el.children.map((item, i) => {
                    return (
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

export default TimeLineComponennt;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  :hover {
    overflow-y: auto;
  }
  overflow: auto;
  height: var(--height-container);
  @media (max-width: 647px) {
    width: 80vw;
    overflow: auto;
  }
  .ant-timeline {
    margin: 4em 0px;
  }
  .ant-timeline-item-tail {
    border: 3px solid var(--blue);
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
