import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { dbService } from "fbase";
import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
`;
const FlexBox = styled.div`
  width: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const FlexItem = styled.div`
  min-width: 200px;
  min-width: 100px;
  padding: 10px 15px;
  flex: 0 0 auto;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const CheckboxContainer = styled.div`
  max-width: 200px;
  font-size: 14px;
`;
const CheckboxLabel = styled.label`
  display: inline-block;
  width: auto;
  padding: 8px;
  border-radius: 20px;
  font-weight: 500;
  margin-bottom: 5px;
  border: 0.5px solid #636e72;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;
const Checkbox = styled.input`
  display: none;
  &:checked + ${CheckboxLabel} {
    font-weight: 700;
    border: 3px solid #00b894;
    color: #2d3436;
  }
`;
const TextInput = styled.input`
  width: 160px;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  background-color: rgba(245, 245, 245, 1);
  border-width: 0 0 3px;
  border-color: #00b894;
  color: #2d3436;
`;
const RelativeContainer = styled.div`
  position: relative;
`;
const AbsoluteItem = styled.div`
  position: absolute;
  bottom: 15px;
  right: 0;
`;
const Calendar = styled.input`
  width: 160px;
  height: 40px;
  padding: 0px 5px;
  background-color: white;
  border: 3px solid #00b894;
  color: black;
  outline: none;
  font-weight: 700;
  font-size: 16px;
  border-radius: 10px;
`;
const ToggleBtn = styled.div`
  cursor: pointer;
  text-align: center;
`;
const OnBtn = styled.div`
  padding: 8px 10px;
  border: 3px solid #0984e3;
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: #0984e3;
  color: white;
`;
const OffBtn = styled.div`
  padding: 8px 10px;
  border: 3px solid #d63031;
  border-radius: 5px;
  margin-bottom: 5px;
  color: white;
  background-color: #d63031;
`;
const SubmitInput = styled.input`
  background-color: #00b894;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  height: 40px;
  width: 100px;
  font-weight: 700;
  color: white;
  border-radius: 5px;
`;
const Cancel = styled.div`
  margin-left: 5px;
  display: inline-block;
  color: red;
  height: 40px;
  width: 80px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s linear;
  &:hover {
    background-color: red;
    color: white;
    border-radius: 5px;
  }
`;
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
`;

const ProjectForm = ({
  CreateProject,
  initValues,
  initCheckValues,
  userObj,
  projectObj,
  setEdit,
  setAddProject,
}) => {
  const [inputs, setInputs] = useState(initValues);
  const [downPayCheck, setDownPayCheck] = useState(
    initCheckValues.downPayCheck
  );
  const [downPayTaxCheck, setDownTaxPayCehck] = useState(
    initCheckValues.downPayTaxCheck
  );
  const [orderCheck, setOrderCheck] = useState(initCheckValues.orderCheck);
  const [deliveryCheck, setDeliveryCheck] = useState(
    initCheckValues.deliveryCheck
  );
  const [upPayCheck, setUpPayCheck] = useState(initCheckValues.upPayCheck);
  const [upPayTaxCheck, setUpPayTaxCheck] = useState(
    initCheckValues.upPayTaxCheck
  );

  const onDownPayToggle = () => setDownPayCheck((prev) => !prev);
  const onDownPayTaxToggle = () => setDownTaxPayCehck((prev) => !prev);
  const onOrderToggle = () => setOrderCheck((prev) => !prev);
  const onDeliveryToggle = () => setDeliveryCheck((prev) => !prev);
  const onUpPayToggle = () => setUpPayCheck((prev) => !prev);
  const onUpPayTaxToggle = () => setUpPayTaxCheck((prev) => !prev);
  const {
    client,
    material,
    contents,
    deliveryDate,
    orderDeliveryDate,
    contract,
    orderCompany,
    downPay,
    upPay,
    downPayTaxDate,
    upPayTaxDate,
  } = inputs;

  const addCommas = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const removeNonNumber = (num) => num.toString().replace(/[^0-9.]/g, "");

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "downPay" || name === "upPay") {
      setInputs({
        ...inputs,
        [name]: addCommas(removeNonNumber(value)),
      });
    } else {
      setInputs({
        ...inputs,
        [name]: value,
      });
    }
  };

  const onCreateSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("projects").add({
      client,
      material,
      contents,
      deliveryDate,
      orderDeliveryDate,
      contract,
      downPay,
      downPayCheck,
      downPayTaxCheck,
      orderCheck,
      orderCompany,
      deliveryCheck,
      upPay,
      upPayCheck,
      downPayTaxDate,
      upPayTaxDate,
      upPayTaxCheck,
      createAt: Date.now(),
      creatorId: userObj.uid,
      completion: false,
    });
    setAddProject(false);
  };

  const onEditSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`projects/${projectObj.id}`).update({
      client,
      material,
      contents,
      deliveryDate,
      orderDeliveryDate,
      contract,
      downPay,
      downPayCheck,
      downPayTaxCheck,
      orderCheck,
      orderCompany,
      deliveryCheck,
      upPay,
      upPayCheck,
      downPayTaxDate,
      upPayTaxDate,
      upPayTaxCheck,
    });
    setEdit(false);
  };

  return (
    <form onSubmit={CreateProject ? onCreateSubmit : onEditSubmit}>
      <FormContainer>
        <FlexBox>
          <FlexItem>
            <ItemContainer>
              <ItemTitle>클라이언트</ItemTitle>
              <TextInput
                onChange={onChange}
                value={client}
                name="client"
                type="text"
                placeholder="기업명"
                required
              />
            </ItemContainer>
          </FlexItem>
          <FlexItem>
            <ItemContainer>
              <ItemTitle>소재</ItemTitle>
              <CheckboxContainer>
                <Checkbox
                  type="radio"
                  name="material"
                  value="스티로폼"
                  id="스티로폼"
                  checked={material === "스티로폼"}
                  onChange={onChange}
                  required
                />
                <CheckboxLabel htmlFor="스티로폼">스티로폼</CheckboxLabel>
                <Checkbox
                  type="radio"
                  name="material"
                  value="FRP"
                  id="FRP"
                  checked={material === "FRP"}
                  onChange={onChange}
                  required
                />
                <CheckboxLabel htmlFor="FRP">FRP</CheckboxLabel>
                <Checkbox
                  type="radio"
                  name="material"
                  value="EPS"
                  id="EPS"
                  checked={material === "EPS"}
                  onChange={onChange}
                  required
                />
                <CheckboxLabel htmlFor="EPS">EPS</CheckboxLabel>
                <Checkbox
                  type="radio"
                  name="material"
                  value="금속가공"
                  id="금속가공"
                  checked={material === "금속가공"}
                  onChange={onChange}
                  required
                />
                <CheckboxLabel htmlFor="금속가공">금속가공</CheckboxLabel>
                <Checkbox
                  type="radio"
                  name="material"
                  value="브론즈"
                  id="브론즈"
                  checked={material === "브론즈"}
                  onChange={onChange}
                  required
                />
                <CheckboxLabel htmlFor="브론즈">브론즈</CheckboxLabel>
                <Checkbox
                  type="radio"
                  name="material"
                  value="인공폭포"
                  id="인공폭포"
                  checked={material === "인공폭포"}
                  onChange={onChange}
                  required
                />
                <CheckboxLabel htmlFor="인공폭포">인공폭포</CheckboxLabel>
                <Checkbox
                  type="radio"
                  name="material"
                  value="GRC"
                  id="GRC"
                  checked={material === "GRC"}
                  onChange={onChange}
                  required
                />
                <CheckboxLabel htmlFor="GRC">GRC</CheckboxLabel>
                <Checkbox
                  type="radio"
                  name="material"
                  value="디자인"
                  id="디자인"
                  checked={material === "디자인"}
                  onChange={onChange}
                  required
                />
                <CheckboxLabel htmlFor="디자인">디자인</CheckboxLabel>
              </CheckboxContainer>
            </ItemContainer>
          </FlexItem>
          <FlexItem>
            <ItemContainer>
              <ItemTitle>콘텐츠</ItemTitle>
              <TextInput
                type="text"
                name="contents"
                onChange={onChange}
                value={contents}
                placeholder="예) 캐릭터"
                required
              />
            </ItemContainer>
          </FlexItem>
          <FlexItem>
            <ItemContainer>
              <ItemTitle>납품예정일</ItemTitle>
              <Calendar
                type="date"
                name="deliveryDate"
                value={deliveryDate}
                onChange={onChange}
                required
              />
            </ItemContainer>
          </FlexItem>
          <FlexItem>
            <ItemContainer>
              <ItemTitle>발주상 예정일</ItemTitle>
              <Calendar
                type="date"
                name="orderDeliveryDate"
                value={orderDeliveryDate}
                onChange={onChange}
                required
              />
            </ItemContainer>
          </FlexItem>
          <FlexItem>
            <ItemContainer>
              <ItemTitle>계약</ItemTitle>
              <CheckboxContainer>
                <Checkbox
                  type="radio"
                  name="contract"
                  onChange={onChange}
                  value="실물서류(등기)"
                  id="실물서류(등기)"
                  checked={contract === "실물서류(등기)"}
                  required
                />
                <CheckboxLabel htmlFor="실물서류(등기)">
                  실물서류(등기)
                </CheckboxLabel>
                <Checkbox
                  type="radio"
                  name="contract"
                  onChange={onChange}
                  value="전자계약"
                  id="전자계약"
                  checked={contract === "전자계약"}
                  required
                />
                <CheckboxLabel htmlFor="전자계약">전자계약</CheckboxLabel>
                <Checkbox
                  type="radio"
                  name="contract"
                  onChange={onChange}
                  value="제작의뢰서"
                  id="제작의뢰서"
                  checked={contract === "제작의뢰서"}
                  required
                />
                <CheckboxLabel htmlFor="제작의뢰서">제작의뢰서</CheckboxLabel>
                <Checkbox
                  type="radio"
                  name="contract"
                  onChange={onChange}
                  value="개인계약"
                  id="개인계약"
                  checked={contract === "개인계약"}
                  required
                />
                <CheckboxLabel htmlFor="개인계약">개인계약</CheckboxLabel>
              </CheckboxContainer>
            </ItemContainer>
          </FlexItem>
        </FlexBox>
        <FlexBox>
          <FlexItem>
            <ItemContainer>
              <ItemTitle>계약금</ItemTitle>
              {downPayCheck ? (
                <>
                  <ToggleBtn onClick={onDownPayToggle}>
                    <OnBtn>
                      <FontAwesomeIcon icon={faCheck} />
                    </OnBtn>
                  </ToggleBtn>
                </>
              ) : (
                <>
                  <ToggleBtn onClick={onDownPayToggle}>
                    <OffBtn>
                      <FontAwesomeIcon icon={faTimes} />
                    </OffBtn>
                  </ToggleBtn>
                </>
              )}
              <RelativeContainer>
                <TextInput
                  name="downPay"
                  type="text"
                  onChange={onChange}
                  value={downPay}
                  placeholder="금액"
                />
                <AbsoluteItem>원</AbsoluteItem>
              </RelativeContainer>
            </ItemContainer>
          </FlexItem>
          <FlexItem>
            <ItemContainer>
              <ItemTitle>계약금 세금계산서</ItemTitle>
              {downPayTaxCheck ? (
                <>
                  <ToggleBtn onClick={onDownPayTaxToggle}>
                    <OnBtn>
                      <FontAwesomeIcon icon={faCheck} />
                    </OnBtn>
                  </ToggleBtn>
                </>
              ) : (
                <>
                  <ToggleBtn onClick={onDownPayTaxToggle}>
                    <OffBtn>
                      <FontAwesomeIcon icon={faTimes} />
                    </OffBtn>
                  </ToggleBtn>
                </>
              )}
              <Calendar
                type="date"
                name="downPayTaxDate"
                value={downPayTaxDate}
                onChange={onChange}
              />
            </ItemContainer>
          </FlexItem>
          <FlexItem>
            <ItemContainer>
              <ItemTitle>발주</ItemTitle>
              {orderCheck ? (
                <>
                  <ToggleBtn onClick={onOrderToggle}>
                    <OnBtn>
                      <FontAwesomeIcon icon={faCheck} />
                    </OnBtn>
                  </ToggleBtn>
                </>
              ) : (
                <>
                  <ToggleBtn onClick={onOrderToggle}>
                    <OffBtn>
                      <FontAwesomeIcon icon={faTimes} />
                    </OffBtn>
                  </ToggleBtn>
                </>
              )}
              <TextInput
                type="text"
                name="orderCompany"
                placeholder="발주처"
                value={orderCompany}
                onChange={onChange}
              />
            </ItemContainer>
          </FlexItem>
          <FlexItem>
            <ItemContainer>
              <ItemTitle>납품여부</ItemTitle>
              {deliveryCheck ? (
                <>
                  <ToggleBtn onClick={onDeliveryToggle}>
                    <OnBtn>
                      <FontAwesomeIcon icon={faCheck} />
                    </OnBtn>
                  </ToggleBtn>
                </>
              ) : (
                <>
                  <ToggleBtn onClick={onDeliveryToggle}>
                    <OffBtn>
                      <FontAwesomeIcon icon={faTimes} />
                    </OffBtn>
                  </ToggleBtn>
                </>
              )}
            </ItemContainer>
          </FlexItem>
          <FlexItem>
            <ItemContainer>
              <ItemTitle>잔금</ItemTitle>
              {upPayCheck ? (
                <>
                  <ToggleBtn onClick={onUpPayToggle}>
                    <OnBtn>
                      <FontAwesomeIcon icon={faCheck} />
                    </OnBtn>
                  </ToggleBtn>
                </>
              ) : (
                <>
                  <ToggleBtn onClick={onUpPayToggle}>
                    <OffBtn>
                      <FontAwesomeIcon icon={faTimes} />
                    </OffBtn>
                  </ToggleBtn>
                </>
              )}
              <RelativeContainer>
                <TextInput
                  name="upPay"
                  type="text"
                  onChange={onChange}
                  value={upPay}
                  placeholder="금액"
                />
                <AbsoluteItem>원</AbsoluteItem>
              </RelativeContainer>
            </ItemContainer>
          </FlexItem>
          <FlexItem>
            <ItemContainer>
              <ItemTitle>잔금 세금계산서</ItemTitle>
              {upPayTaxCheck ? (
                <>
                  <ToggleBtn onClick={onUpPayTaxToggle}>
                    <OnBtn>
                      <FontAwesomeIcon icon={faCheck} />
                    </OnBtn>
                  </ToggleBtn>
                </>
              ) : (
                <>
                  <ToggleBtn onClick={onUpPayTaxToggle}>
                    <OffBtn>
                      <FontAwesomeIcon icon={faTimes} />
                    </OffBtn>
                  </ToggleBtn>
                </>
              )}
              <Calendar
                type="date"
                name="upPayTaxDate"
                value={upPayTaxDate}
                onChange={onChange}
              />
            </ItemContainer>
          </FlexItem>
        </FlexBox>
        <BtnContainer>
          <SubmitInput
            type="submit"
            value={CreateProject ? "추가하기" : "수정하기"}
          />
          <Cancel
            onClick={
              CreateProject ? () => setAddProject(false) : () => setEdit(false)
            }
          >
            <div>취소</div>
          </Cancel>
        </BtnContainer>
      </FormContainer>
    </form>
  );
};

export default ProjectForm;
