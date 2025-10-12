import { hints } from "../hints";
import { hintHashMap } from "../hint-hash-map";
import Link from "next/link";

export default function SecretIndex() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold text-orange-600 drop-shadow-lg mb-2">🎃 PC Kids Halloween Scavenger Hunt</h1>
        <p className="text-lg text-gray-700 mb-4">Welcome! This is the secret index page for grown-ups. Each link below leads to a unique hint page for the scavenger hunt. Share the QR code for each page with your hunters!</p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
        {hints.map((hint) => {
          const hash = hintHashMap.find((h) => h.id === hint.id)?.hash;
          return (
            <li key={hint.id} className="bg-white rounded-xl shadow-lg p-4 border-2 border-orange-200 hover:border-orange-400 transition">
              <Link href={`/${hash}`} className="block text-center text-xl font-semibold text-orange-600 hover:text-orange-800">
                Hint #{hint.id}
              </Link>
            </li>
          );
        })}
        <li key="congrats" className="bg-white rounded-xl shadow-lg p-4 border-2 border-orange-200 hover:border-orange-400 transition">
          <Link href="/congratulations" className="block text-center text-xl font-semibold text-orange-600 hover:text-orange-800">
            Congrats
          </Link>
        </li>
      </ul>
      <div className="mt-8 text-xs text-gray-400">This page is hidden. Do not share with the kids!</div>
    </div>
  );
}
