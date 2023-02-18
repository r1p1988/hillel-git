import React, { Fragment } from "react";
import UserForm from "./../components/UserForm";

export default function CreateUser() {
  return (
    <Fragment>
      <h1>Create user</h1>
      <UserForm createForm />
    </Fragment>
  );
}
