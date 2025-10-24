import { hints, title, footer } from "../hunt-config";
import { hintHashMap, hashToHintId } from "../hint-hash-map.js";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Scavenger Hunt Hint",
  description: `A hint for the ${title}`,
};

export const dynamic = 'error';

export async function generateStaticParams() {
  return hintHashMap.map(({ hash }) => ({ id: hash }));
}

export default function HintPage({ params }: { params: { id: string } }) {
  const hash = params.id;
  // Shift the hint mapping by +1
  const hintHashId = ((hashToHintId as Record<string, number>)[hash] ?? null) + 1;
  // If hintHashId is greater than the number of hints, show congratulations
  if (hintHashId > hints.length) {
    redirect("/congratulations");
  }
  const hintObj = hints.find((h: { id: number; text: string; answer?: string }) => h.id === hintHashId);
  if (!hintObj) {
    notFound();
  }
  const { id: hintId, text: hintText, answer: hintAnswer, icon: hintIcon } = hintObj;

  return (<>
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 text-center">
      <span className="mb-2 text-[100px]" role="presentation">{hintIcon}</span>
      <h1 className="text-3xl font-bold text-orange-700 mb-4">Ghost #{hintId - 1} says:</h1>
      <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-orange-200 text-2xl text-center text-gray-800 max-w-xl">
        {hintText}
      </div>
      <p className="mt-8 text-xs text-gray-400">{footer}</p>
    </div>
    { hintAnswer &&
      <div className="min-h-screen p-8 flex justify-center pointer-events-none select-none">
        <em className="text-sm text-gray-400 rotate-180">{hintAnswer}</em>
      </div>
    }
  </>
  );
}