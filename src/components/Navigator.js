import { authService } from "fbase";
import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  font-size: 18px;
`;
const Container = styled.ul`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Item = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Li = styled.li`
  height: 50px;
  border-bottom: 4px solid
    ${(prop) => (prop.current ? "#00b894" : "transparent")};
  &:first-child {
    margin-right: 20px;
  }
  transition: border-bottom 0.4s ease-in-out;
`;

const SLink = styled(Link)`
  font-weight: 700;
  height: 50px;
  display: flex;
  align-items: center;
`;

const Btn = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 20px;
  transition: all 0.2s linear;
  &:hover {
    background-color: #00b894;
  }
`;

const Navigator = ({ location: { pathname } }) => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <Header>
      <Container>
        <Item>
          <Li current={pathname === "/"}>
            <SLink to="/">프로젝트추가</SLink>
          </Li>
          <Li current={pathname === "/completion"}>
            <SLink to="/completion">프로젝트완료</SLink>
          </Li>
        </Item>
        <Li>
          <Btn onClick={onLogOutClick}>로그아웃</Btn>
        </Li>
      </Container>
    </Header>
  );
};

export default withRouter(Navigator);
