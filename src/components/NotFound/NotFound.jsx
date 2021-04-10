import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();

  const back = () => {
    if (localStorage.getItem("user")) {
      history.push("/dashboard");
    } else {
      history.push("/login");
    }
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={back}>
          Back Home
        </Button>
      }
    />
  );
}

export default NotFound;
