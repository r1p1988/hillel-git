import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import useUsers from "../hooks/useUsers";

import Item from "../components/Item";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

function Users() {
  const { users, deleteUser } = useUsers();

  return (
    <Fragment>
      <h1>Users</h1>
      <Button
        component={Link}
        to={`/createuser`}
        variant="contained"
        startIcon={<AddCircleRoundedIcon />}
      >
        Create User
      </Button>
      <List>
        {users.map((user) => (
          <Item key={user.id} user={user} deleteUser={deleteUser} />
        ))}
      </List>
    </Fragment>
  );
}

export default Users;
