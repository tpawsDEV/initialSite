"use client";
import { SiteHeader } from "@/components/menus/header";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  console.log(session);
  // if (!session || !session.user) {
  //   return await redirect("/api/auth/signin")
  // }
  return (
    <>
      <span> {session?.data?.user.marketing_id}</span>
    </>
  );
}
