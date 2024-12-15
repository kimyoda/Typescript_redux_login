import styled from "styled-components";
import Button from "../component/button/Button";
import Inputbox from "../component/inputbox/Inputbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../reducres/loginSlice";

const LoginBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  gap: 10px;
`;

const LoginContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleLogin = () => {
    if (id === "admin" && pw === "admin") {
      dispatch(setLogin({ id, name: "yohan" }));
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
