"use client";

import { Button, Section, Text, Title } from "@/app/components";
import { TitleVariant } from "@/app/components/title/constants";
import { USER_LISTS } from "./constants/UserLists.constants";
import { useUserListsViewModel } from "./hooks/useUserListsViewModel";

const UserLists = (): JSX.Element => {
  const {
    currentUserName,
    handleAddUser,
    handleRemoveUser,
    handleUserNameChange,
    handleUserNameKeyDown,
    userList,
    validationMessage,
  } = useUserListsViewModel();

  return (
    <Section className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
      <div className="space-y-5">
        <div className="space-y-2">
          <Title
            className="text-slate-900"
            variant={TitleVariant.PRIMARY}
          >
            {USER_LISTS.SECTION_TITLE}
          </Title>
          <Text className="text-sm leading-6 text-slate-600">
            {USER_LISTS.SECTION_DESCRIPTION}
          </Text>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <label className="flex flex-1 flex-col gap-2 text-sm font-medium text-slate-900 sm:flex-row sm:items-center">
            <span>{USER_LISTS.INPUT_LABEL}</span>
            <input
              id="user-name"
              name="userName"
              type="text"
              value={currentUserName}
              onChange={handleUserNameChange}
              onKeyDown={handleUserNameKeyDown}
              placeholder={USER_LISTS.INPUT_PLACEHOLDER}
              className="min-w-0 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-500"
            />
          </label>
          <Button
            type="button"
            onClick={handleAddUser}
            className="h-12 whitespace-nowrap rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-700"
          >
            {USER_LISTS.ADD_BUTTON}
          </Button>
        </div>

        {validationMessage ? (
          <Text className="text-sm font-medium text-red-600">
            {validationMessage}
          </Text>
        ) : null}

        <div className="space-y-3">
          <Title
            className="text-base font-semibold text-slate-900"
            variant={TitleVariant.AUXILIAR}
          >
            {USER_LISTS.USERS_TITLE}
          </Title>

          {userList.length === 0 ? (
            <Text className="text-sm leading-6 text-slate-600">
              {USER_LISTS.EMPTY_LIST}
            </Text>
          ) : (
            <ul className="space-y-3">
              {userList.map((user) => (
                <li
                  key={user.id}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  <Text className="text-sm font-medium text-slate-900">
                    {user.name}
                  </Text>
                  <Button
                    type="button"
                    onClick={() => handleRemoveUser(user.id)}
                    className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition-colors duration-200 hover:bg-slate-100"
                  >
                    {USER_LISTS.REMOVE_BUTTON}
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Section>
  );
};

export default UserLists;
