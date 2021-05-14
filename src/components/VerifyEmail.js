import React from "react";

const VerifyEmail = () => {
  const refreshClick = () => {
    window.location.reload(false);
  };
  return (
    <>
      <div>이메일인증을 해주세요</div>
      <button onClick={refreshClick}>이메일인증을 했습니다.</button>
    </>
  );
};

export default VerifyEmail;
