import Project from "components/Project";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as moment from "moment";
import XLSX from "xlsx";

const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
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

const Completion = ({ userObj }) => {
  const [completeProjects, setCompleteProjects] = useState([]);
  const [excelData, setExcelData] = useState([]);

  useEffect(() => {
    try {
      dbService
        .collection("projects")
        .where("creatorId", "==", userObj.uid)
        .where("completion", "==", true)
        .orderBy("createAt", "desc")
        .onSnapshot((snapshot) => {
          const completeProjectArr = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          const excelDataArr = snapshot.docs.map((doc) => ({
            클라이언트: doc.data().client,
            소재: doc.data().material,
            발주처: doc.data().orderCompany,
            콘텐츠: doc.data().contents,
            납품일: doc.data().deliveryDate,
            계약종류: doc.data().contract,
            계약금: doc.data().downPay,
            계약금세금계산서: doc.data().downPayTaxDate,
            잔금: doc.data().upPay,
            잔금세금계산서: doc.data().upPayTaxDate,
          }));
          setExcelData(excelDataArr);
          setCompleteProjects(completeProjectArr);
        });
    } catch (error) {
    } finally {
    }
  }, []);

  const onExportExcel = () => {
    if (window.confirm("엑셀로 파일을 내보내겠습니까?")) {
      const worksheet = XLSX.utils.json_to_sheet(excelData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "test");
      XLSX.writeFile(
        workbook,
        `프로젝트_${moment(Date.now()).format("YYYY/MM/DD")}.xlsx`
      );
    }
  };

  return (
    <Container>
      <Center>
        <Btn onClick={onExportExcel}>엑셀로 파일 내보내기</Btn>
      </Center>
      {completeProjects.map((project) => (
        <Project
          key={project.id}
          projectObj={project}
          userObj={userObj}
          isOwner={userObj.uid === project.creatorId}
        />
      ))}
    </Container>
  );
};

export default Completion;
