import { authService } from "fbase";
import React, { useState } from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 40px;
`;
const Title = styled.div`
  width: 250px;
  height: 250px;
  border: 10px solid #00b894;
  border-radius: 100%;
  font-size: 65px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InputText = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 15px 25px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 25px;
  background-color: #00b894;
  color: white;
`;
const InputSubmit = styled.input`
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 25px;
  border: 2px solid #00b894;
  color: #00b894;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: white;
  }
`;
const Btn = styled.div`
  color: #00b894;
  font-size: 18px;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
`;
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        const newUser = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
        await newUser.user.sendEmailVerification();
      } else {
        await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <>
      <TitleContainer>
        <Title>마롱이</Title>
      </TitleContainer>
      <form onSubmit={onSubmit}>
        <FormContainer>
          <InputText
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={onChange}
            required
          />
          <InputText
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            required
          />
          <InputSubmit
            type="submit"
            value={newAccount ? "회원가입" : "로그인"}
            required
          />
          <Btn onClick={toggleAccount}>
            {newAccount ? "로그인하러 가기" : "회원가입하러 가기"}
          </Btn>
          {error}
        </FormContainer>
      </form>
    </>
  );
};

export default Auth;
