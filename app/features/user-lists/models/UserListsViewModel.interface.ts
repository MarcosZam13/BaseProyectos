import { ChangeEvent, KeyboardEvent } from "react";

export type UserListItem = {
  id: string;
  name: string;
};

export interface UserListsViewModel {
  currentUserName: string;
  userList: UserListItem[];
  validationMessage: string;
  handleUserNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleAddUser: () => void;
  handleRemoveUser: (userId: string) => void;
  handleUserNameKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}
