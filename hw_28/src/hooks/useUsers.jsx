import { useState, useEffect } from "react";
import { getUsers, deleteUser as deletItem } from "../services/usersServices";

export default function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      setUsers(await getUsers());
    })();
  }, []);

  const deleteUser = async (id) => {
    await deletItem(id);
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  };

  return { users, deleteUser };
}
