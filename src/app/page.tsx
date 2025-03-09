"use client";

import { CreateUserForm } from "@/features/create-user/ui/CreateUserForm";
import { CreateUserModal } from "@/features/create-user/ui/CreateUserModal";

export default function Home() {
  return (
    <div className="w-full m-6 flex justify-around items-center">
      <div className="preview flex min-h-[350px] justify-center items-center">
        <CreateUserForm />
      </div>
      <CreateUserModal />
    </div>
  );
}
