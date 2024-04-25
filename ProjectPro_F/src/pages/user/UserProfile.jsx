import axiosClient from "@/axiosClient";
import { Button, Input } from "@material-tailwind/react";
import { Chip } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";

const UserProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const payload = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    axiosClient
      .post("/utilisateur/updateProfile", payload)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      });

    // console.log(data);
  };
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
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <Input size="md" label="Username" {...register("username")} />
            <Input size="md" label="Email" {...register("email")} />
            <Input
              size="md"
              label="New Password"
              {...register("password")}
              type="password"
            />
            <Input size="md" label="Confirme New Password" type="password" />
          </div>
          <div className=" flex items-center justify-center">
            <Button ripple={true} className=" w-3/12" type="submit">
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
