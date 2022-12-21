import React, { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useUser from "../hooks/useUser";

import UserFormField from "./UserFormField";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import Stack from "@mui/material/Stack";

export default function UserForm({ createForm = false }) {
  const { id } = useParams();

  const { user, changeFormItem, createFormUser, changeFormUser } = useUser(id);

  const navigation = useNavigate();

  const fields = useMemo(
    () => [
      {
        value: user.name,
        label: "Name",
        name: "name",
      },
      {
        value: user.username,
        label: "User Name",
        name: "username",
      },
      {
        value: user.email,
        label: "Email",
        name: "email",
        type: "email",
      },
      {
        value: user.city,
        label: "City",
        name: "city",
      },
      {
        value: user.street,
        label: "Street",
        name: "street",
      },
    ],
    [user]
  );

  const formCreate = async (e) => {
    e.preventDefault();
    await createFormUser();
    navigation(`/`);
  };

  const formChange = async (e) => {
    e.preventDefault();
    await changeFormUser();
    navigation(`/`);
  };

  const changeInput = (e) => changeFormItem(e);

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={createForm ? formCreate : formChange}
      sx={{
        "& .MuiTextField-root": { mb: 2, width: "inherit" },
        width: "40ch",
        mx: "auto",
      }}
    >
      {fields.map((field, index) => (
        <UserFormField
          key={index}
          value={field.value || ""}
          label={field.label}
          name={field.name}
          type={field.type ? field.type : `text`}
          changeInput={changeInput}
        />
      ))}
      <Stack direction="row" spacing={2}>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          {createForm ? `Create user` : `Save changes`}
        </Button>
        <Button
          component={Link}
          to={`/`}
          variant="contained"
          startIcon={<CancelRoundedIcon />}
        >
          Cancel
        </Button>
      </Stack>
    </Box>
  );
}
