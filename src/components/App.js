import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import GlobalStyles from "components/GlobalStyles";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [emailVerify, setEmailVerify] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        if (user.emailVerified) {
          setEmailVerify(true);
        } else {
          setEmailVerify(false);
          window.alert("이메일인증을 해주세요.");
        }
        setUserObj(user);
        setIsLoggedIn(true);
        setInit(true);
      } else {
        setIsLoggedIn(false);
        setInit(true);
      }
    });
  }, []);

  return (
    <>
      {init ? (
        <>
          <AppRouter
            userObj={userObj}
            emailVerify={emailVerify}
            isLoggedIn={isLoggedIn}
          />
          <GlobalStyles />
        </>
      ) : (
        "로딩중..."
      )}
    </>
  );
}

export default App;
