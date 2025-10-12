import { hints } from "../hints";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hashToHintId } from "../hint-hash-map";

export const metadata: Metadata = {
  title: "Scavenger Hunt Hint",
  description: "A Halloween scavenger hunt hint!",
};

export async function generateStaticParams() {
  const { hintHashMap } = await import("../hint-hash-map");
  return hintHashMap.map(({ hash }) => ({ id: hash }));
}

export default function HintPage({ params }: { params: { id: string } }) {
  const hash = params.id;
  const hintId = hashToHintId[hash] ?? null;
  const hint = hints.find((h) => h.id === hintId);
  if (!hint) {
    notFound();
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 text-center">
      <span className="mb-2 text-[100px]" role="img" aria-label="Jack-o'-lantern">🎃</span>
      <h1 className="text-3xl font-bold text-orange-700 mb-4">Hint #{hint.id}</h1>
      <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-orange-200 text-2xl text-center text-gray-800 max-w-xl">
        {hint.text}
      </div>
      <p className="mt-8 text-xs text-gray-400">🎃🎃🎃 Happy Halloween from PC Kids! 🎃🎃🎃 <br/> Scavenger Hunt 2025</p>
    </div>
  );
}