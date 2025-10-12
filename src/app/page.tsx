import { redirect } from "next/navigation";

export default async function Home() {
  redirect("/hint/1");
}
