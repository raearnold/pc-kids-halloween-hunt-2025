import { hintHashMap } from "./hint-hash-map";
import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to the first hint's hash at the root level
  redirect(`/${hintHashMap[0].hash}`);
}
