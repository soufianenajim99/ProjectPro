import { Input } from "@material-tailwind/react";
import { Chip } from "@nextui-org/react";
import React from "react";

const UserProfile = () => {
  return (
    <div>
      <div className="flex justify-between my-3 mx-3">
        <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700 my-auto">
          Profile
        </span>
        <Chip color="success" variant="shadow">
          Update
        </Chip>
      </div>
      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="#" className="space-y-4">
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <Input size="md" label="Username" />
            <Input size="md" label="Email" />
            <Input size="md" label="New Password" />
            <Input size="md" label="Confirme New Password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
