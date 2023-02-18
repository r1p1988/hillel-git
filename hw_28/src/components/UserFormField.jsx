import React from "react";

import TextField from "@mui/material/TextField";

export default function UserFormField({
  label,
  value,
  name,
  type = "text",
  changeInput,
}) {
  return (
    <TextField
      required
      label={label}
      value={value}
      name={name}
      type={type}
      onChange={changeInput}
    />
  );
}
