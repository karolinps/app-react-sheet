import React from "react";
import styled from "styled-components";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
// import moment from "moment";
import PropTypes from "prop-types";

function DatePickerComponet(props) {
  const { onChangeDate } = props;
  // const [dates, setDates] = useState([]);
  // const [hackValue, setHackValue] = useState();

  // const disabledDate = (current) => {
  //   if (!dates || dates.length === 0) {
  //     return false;
  //   }
  //   const tooLate = dates[0] && current.diff(dates[0], "days") > 7;
  //   const tooEarly = dates[1] && dates[1].diff(current, "days") > 7;
  //   return tooEarly || tooLate;
  // };

  // const onOpenChange = (open) => {
  //   if (open) {
  //     setHackValue([]);
  //     setDates([]);
  //   } else {
  //     setHackValue(undefined);
  //   }
  // };

  return (
    <Wrapper>
      <Space direction="vertical">
        <RangePicker
          bordered={false}
          allowClear={true}
          placeholder={["Desde", "Hasta"]}
          // value={hackValue || value}
          // disabledDate={disabledDate}
          // onCalendarChange={(val) => setDates(val)}
          onChange={onChangeDate}
          // onOpenChange={onOpenChange}
        />
      </Space>
    </Wrapper>
  );
}

DatePickerComponet.propTypes = {
  onChangeDate: PropTypes.func,
};
export default DatePickerComponet;

const Wrapper = styled.div`
  .ant-space-vertical {
    background: var(--gray-low);
    width: 100%;
    height: 50px;
    border-radius: 5px;
  }
  .ant-picker.ant-picker-borderless {
    width: 100%;
    margin: 0.5em 0px;
  }
  .ant-picker-input > input {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: var(--subtitle);
    line-height: 23px;
    letter-spacing: 0.05em;
  }
  .ant-picker-input > input::placeholder {
    color: #8a8a8a;
  }
  .ant-select-selection__placeholder {
    color: blue;
  }
`;
