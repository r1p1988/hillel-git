import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import Button from "@mui/material/Button";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { Link } from "react-router-dom";

export default function Item({ user, deleteUser }) {
  return (
    <ListItem disablePadding>
      <ListItemButton width="50px">
        <ListItemText primary={user.name} />
        <Button
          component={Link}
          to={`/${user.id}`}
          variant="contained"
          startIcon={<EditRoundedIcon />}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          startIcon={<DeleteRoundedIcon />}
          onClick={() => deleteUser(user.id)}
        >
          Delete
        </Button>
      </ListItemButton>
    </ListItem>
  );
}
