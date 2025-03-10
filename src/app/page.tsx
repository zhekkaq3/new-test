"use client";

import { CreateUserForm } from "@/features/create-user/ui/CreateUserForm";
import { CreateUserModal } from "@/features/create-user/ui/CreateUserModal";

export default function Home() {
  return (
    <div className="w-full m-6 flex justify-around items-center">
      <div className="preview flex min-h-[350px] justify-center items-center">
        <CreateUserForm className="rounded-xl bg-card text-card-foreground shadow w-[350px] gap-6 p-6"/>
      </div>
      <CreateUserModal />
    </div>
  );
}
