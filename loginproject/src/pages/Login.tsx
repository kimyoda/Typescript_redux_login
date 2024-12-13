import styled from "styled-components";
import Button from "../component/button/Button";
import Inputbox from "../component/inputbox/Inputbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginBoxContainer = styled.div``;

const LoginContainer = styled.div``;

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const navigate = useNavigate();

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleLogin = () => {
    if (id === "admin" && pw === "admin") {
      navigate("/admin/main");
    } else {
      alert("fail");
    }
  };

  return (
    <LoginContainer>
      <LoginBoxContainer>
        <Inputbox type="text" onChange={handleId} />
        <Inputbox type="password" onChange={handlePw} />
        <Button text="Login" onClick={handleLogin} />
      </LoginBoxContainer>
    </LoginContainer>
  );
};

export default Login;
