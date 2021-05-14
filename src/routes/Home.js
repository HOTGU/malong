import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import Project from "components/Project";
import ProjectForm from "components/ProjectForm";
import styled from "styled-components";
import * as moment from "moment";

const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Btn = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #00b894;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
`;
const Home = ({ userObj }) => {
  const [addProject, setAddProject] = useState(false);
  const [projects, setProjects] = useState([]);

  const initValues = {
    client: "",
    material: "FRP",
    contents: "",
    deliveryDate: moment(Date.now()).format("YYYY-MM-DD"),
    orderDeliveryDate: moment(Date.now()).format("YYYY-MM-DD"),
    contract: "실물서류(등기)",
    orderCompany: "",
    downPay: "",
    upPay: "",
    downPayTaxDate: "",
    upPayTaxDate: "",
  };

  const initCheckValues = {
    downPayCheck: false,
    downPayTaxCheck: false,
    orderCheck: false,
    deliveryCheck: false,
    upPayCheck: false,
    upPayTaxCheck: false,
  };

  const toggeleAddProject = () => setAddProject((prev) => !prev);

  useEffect(() => {
    try {
      dbService
        .collection("projects")
        .where("creatorId", "==", userObj.uid)
        .where("completion", "==", false)
        .orderBy("createAt", "desc")
        .onSnapshot((snapshot) => {
          const projectArray = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProjects(projectArray);
        });
    } catch (error) {
    } finally {
    }
  }, []);

  return (
    <Container>
      <>
        {addProject ? (
          <>
            <ProjectForm
              CreateProject={true}
              initValues={initValues}
              initCheckValues={initCheckValues}
              userObj={userObj}
              setAddProject={setAddProject}
            />
          </>
        ) : (
          <Center>
            <Btn onClick={toggeleAddProject}>프로젝트 추가</Btn>
          </Center>
        )}
        <div style={{ marginTop: "20px" }}>
          {projects.map((project) => (
            <Project
              key={project.id}
              projectObj={project}
              userObj={userObj}
              isOwner={userObj.uid === project.creatorId}
            />
          ))}
        </div>
      </>
    </Container>
  );
};

export default Home;
