import React from "react";
import styled from "styled-components";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

const SignOutLink = styled.a``;

const Logout = () => {
  const firebase = useFirebase();
  const history = useHistory();
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <SignOutLink href="#" onClick={signOut}>
      Sign Out
    </SignOutLink>
  );
};

export default Logout;
