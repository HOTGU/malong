import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faEye,
  faEyeSlash,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import { dbService } from "fbase";

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: white;
  color: black;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 700;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
`;
const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;
const Head = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Client = styled.div`
  font-size: 24px;
`;
const Info = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
  color: #7f8c8d;
`;
const InfoItem = styled.div`
  font-size: 13px;
`;
const Line = styled.div`
  padding: 0 10px;
`;
const ProjectList = styled.div`
  width: fit-content;
  background-color: ${(props) => (props.check ? "#1abc9c" : "#ff7675")};
  color: white;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 10px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListChild = styled.div`
  margin-top: ${(props) => (props.check ? "5px" : 0)};
`;

const BtnContainer = styled.div`
  position: absolute;
  top: 2px;
  right: 0;
  margin-right: 20px;
  display: flex;
`;
const Btn = styled.button`
  background-color: inherit;
  color: white;
  border: none;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: 16px;
  transition: all 0.1s linear;
  color: #00b894;
  &:not(:first-child) {
    margin-left: 5px;
  }
  &:hover {
    background-color: white;
    color: white;
    background-color: #00b894;
    cursor: pointer;
  }
`;

const Project = ({ projectObj, isOwner, userObj }) => {
  const [edit, setEdit] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const onToggleEdit = () => setEdit((prev) => !prev);
  const onToggleDetail = () => setShowDetail((prev) => !prev);
  const onToggleCompletion = async () => {
    if (!projectObj.downPayCheck) {
      alert("???????????? ?????? ??????????????????~");
      setEdit(true);
      return;
    }
    if (!projectObj.downPay) {
      alert("???????????? ???????????? ??????????????????~");
      setEdit(true);
      return;
    }
    if (!projectObj.downPayTaxCheck) {
      alert("????????? ?????????????????? ?????? ????????????~");
      setEdit(true);
      return;
    }
    if (!projectObj.downPayTaxDate) {
      alert("????????? ??????????????? ????????? ???????????? ???????????????~");
      setEdit(true);
      return;
    }
    if (!projectObj.orderCheck) {
      alert("????????? ?????? ????????????~");
      setEdit(true);
      return;
    }
    if (!projectObj.orderCompany) {
      alert("???????????? ????????? ???????????????~");
      setEdit(true);
      return;
    }
    if (!projectObj.deliveryCheck) {
      alert("?????? ????????? ????????????~");
      setEdit(true);
      return;
    }
    if (!projectObj.upPayCheck) {
      alert("????????? ?????? ??????????????????~");
      setEdit(true);
      return;
    }
    if (!projectObj.upPay) {
      alert("????????? ???????????? ???????????????~");
      setEdit(true);
      return;
    }
    if (!projectObj.upPayTaxCheck) {
      alert("?????? ?????????????????? ?????? ????????????~");
      setEdit(true);
      return;
    }
    if (!projectObj.upPayTaxDate) {
      alert("?????? ??????????????? ????????? ???????????? ???????????????~");
      setEdit(true);
      return;
    }
    await dbService.doc(`projects/${projectObj.id}`).update({
      completion: true,
    });
  };
  const initValues = {
    client: projectObj.client,
    material: projectObj.material,
    contents: projectObj.contents,
    deliveryDate: projectObj.deliveryDate,
    orderDeliveryDate: projectObj.orderDeliveryDate,
    contract: projectObj.contract,
    orderCompany: projectObj.orderCompany,
    downPay: projectObj.downPay,
    upPay: projectObj.upPay,
    downPayTaxDate: projectObj.downPayTaxDate,
    upPayTaxDate: projectObj.upPayTaxDate,
  };
  const initCheckValues = {
    downPayCheck: projectObj.downPayCheck,
    downPayTaxCheck: projectObj.downPayTaxCheck,
    orderCheck: projectObj.orderCheck,
    deliveryCheck: projectObj.deliveryCheck,
    upPayCheck: projectObj.upPayCheck,
    upPayTaxCheck: projectObj.upPayTaxCheck,
  };
  return (
    <div>
      {edit ? (
        <div style={{ marginBottom: "10px" }}>
          <ProjectForm
            CreateProject={false}
            initValues={initValues}
            initCheckValues={initCheckValues}
            userObj={userObj}
            projectObj={projectObj}
            setEdit={setEdit}
          />
        </div>
      ) : (
        <Container>
          <ContainerItem>
            <Client>{projectObj.client}</Client>
            <Info>
              <InfoItem>{projectObj.material}</InfoItem>
              <Line>???</Line>
              <InfoItem>{projectObj.contents}</InfoItem>
              <Line>???</Line>
              <InfoItem>{`??????:${projectObj.deliveryDate}`}</InfoItem>
              <Line>???</Line>
              <InfoItem>{`?????????:${projectObj.orderDeliveryDate}`}</InfoItem>
            </Info>
          </ContainerItem>
          <Head>
            <ProjectList check={projectObj.downPayCheck}>
              <ListChild>?????????</ListChild>
              {showDetail && (
                <ListChild check={projectObj.downPay}>
                  {projectObj.downPay ? `${projectObj.downPay}???` : ""}
                </ListChild>
              )}
            </ProjectList>
            <ProjectList check={projectObj.downPayTaxCheck}>
              <ListChild>????????? ???????????????</ListChild>
              {showDetail && (
                <ListChild check={projectObj.downPayTaxDate}>
                  {projectObj.downPayTaxDate}
                </ListChild>
              )}
            </ProjectList>
            <ProjectList check={projectObj.orderCheck}>
              <ListChild>??????</ListChild>
              {showDetail && (
                <ListChild check={projectObj.orderCompany}>
                  {projectObj.orderCompany}
                </ListChild>
              )}
            </ProjectList>
            <ProjectList check={projectObj.deliveryCheck}>
              <ListChild>??????</ListChild>
            </ProjectList>
            <ProjectList check={projectObj.upPayCheck}>
              <ListChild>??????</ListChild>
              {showDetail && (
                <ListChild check={projectObj.upPay}>
                  {projectObj.upPay ? `${projectObj.upPay}???` : ""}
                </ListChild>
              )}
            </ProjectList>
            <ProjectList check={projectObj.upPayTaxCheck}>
              <ListChild>?????? ???????????????</ListChild>
              {showDetail && (
                <ListChild check={projectObj.upPayTaxDate}>
                  {projectObj.upPayTaxDate}
                </ListChild>
              )}
            </ProjectList>
          </Head>
          {isOwner && (
            <BtnContainer>
              <Btn onClick={onToggleDetail}>
                {showDetail ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </Btn>
              {!projectObj.completion && (
                <>
                  <Btn onClick={onToggleEdit}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </Btn>
                  <Btn onClick={onToggleCompletion}>
                    <FontAwesomeIcon icon={faCheck} />
                  </Btn>
                </>
              )}
            </BtnContainer>
          )}
        </Container>
      )}
    </div>
  );
};
export default Project;
