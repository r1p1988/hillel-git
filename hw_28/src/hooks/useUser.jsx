import { useState, useEffect } from "react";
import { getUser, updateUser, addUser } from "../services/usersServices";

export default function useUser(id) {
  const EMPTY_USER = {
    name: ``,
    email: ``,
    phone: ``,
    address: ``,
  };
  const [user, setUser] = useState(EMPTY_USER);

  useEffect(() => {
    (async () => {
      id && setUser(await getUser(id));
    })();
  }, []);

  const changeFormItem = (e) => {
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const createFormUser = async () => await addUser(user);

  const changeFormUser = async () => {
    updateUser(user.id, user);
  };

  return { user, changeFormItem, createFormUser, changeFormUser };
}
