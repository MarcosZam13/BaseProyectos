import {
  useCallback,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { KEYBOARD } from "@/app/constants";
import { USER_LISTS } from "../constants/UserLists.constants";
import { UserListsViewModel } from "../models/UserListsViewModel.interface";

const createUniqueId = (): string =>
  `${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 8)}`;

export const useUserListsViewModel = (): UserListsViewModel => {
  const [currentUserName, setCurrentUserName] = useState("");
  const [userList, setUserList] = useState<UserListsViewModel["userList"]>([]);
  const [validationMessage, setValidationMessage] = useState("");

  const resetForm = useCallback(() => {
    setCurrentUserName("");
    setValidationMessage("");
  }, []);

  const handleUserNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCurrentUserName(event.target.value);
      if (validationMessage) {
        setValidationMessage("");
      }
    },
    [validationMessage]
  );

  const handleAddUser = useCallback(() => {
    const trimmedName = currentUserName.trim();

    if (!trimmedName) {
      setValidationMessage(USER_LISTS.VALIDATION_EMPTY_NAME);
      return;
    }

    setUserList((currentList) => [
      ...currentList,
      { id: createUniqueId(), name: trimmedName },
    ]);

    resetForm();
  }, [currentUserName, resetForm]);

  const handleRemoveUser = useCallback((userId: string) => {
    setUserList((currentList) =>
      currentList.filter((user) => user.id !== userId)
    );
  }, []);

  const handleUserNameKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === KEYBOARD.ENTER) {
        event.preventDefault();
        handleAddUser();
      }
    },
    [handleAddUser]
  );

  return {
    currentUserName,
    handleAddUser,
    handleRemoveUser,
    handleUserNameChange,
    handleUserNameKeyDown,
    userList,
    validationMessage,
  };
};
