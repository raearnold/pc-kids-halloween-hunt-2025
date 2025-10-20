import { hints } from "../hints";
import { hintHashMap, hashToHintId } from "../hint-hash-map.js";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Scavenger Hunt Hint",
  description: "A Halloween scavenger hunt hint!",
};

export const dynamic = 'error';

export async function generateStaticParams() {
  return hintHashMap.map(({ hash }) => ({ id: hash }));
}

export default async function HintPage({ params }: { params: { id: string } }) {
  const hash = (await params).id;
  const hintHashId = (hashToHintId as Record<string, number>)[hash] ?? null;
  const { id: hintId, text: hintText, answer: hintAnswer } = hints.find((h) => h.id === hintHashId) ?? {};
  if (!hintId) {
    notFound();
  }

  const icons = ['🦴', '🎃', '🕸️', '🧛‍♂️', '🧟', '🧙', '🦇', '🕷️', '🪦', '🦉', '⚰️', '🧹', '🧑‍🎤',];

  return (<>
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 text-center">
      <span className="mb-2 text-[100px]" role="presentation">{icons[hintId % icons.length]}</span>
      <h1 className="text-3xl font-bold text-orange-700 mb-4">Hint #{hintId}</h1>
      <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-orange-200 text-2xl text-center text-gray-800 max-w-xl">
        {hintText}
      </div>
      <p className="mt-8 text-xs text-gray-400">🎃🎃🎃  Happy Halloween from PC Kids!  🎃🎃🎃 <br /> Scavenger Hunt 2025</p>
    </div>
    { hintAnswer &&
      <div className="min-h-screen p-8 flex justify-center pointer-events-none select-none">
        <em className="text-xs text-gray-400 rotate-180">{hintAnswer}</em>
      </div>
    }
  </>
  );
}