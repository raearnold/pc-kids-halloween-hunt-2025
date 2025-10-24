import { hints, title, basePath as confiuguredPath } from "../hunt-config";
import { hintHashMap } from "../hint-hash-map.js";
import Link from "next/link";
import Image from "next/image";

export const dynamic = 'error';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || confiuguredPath;

export default function SecretIndex() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <div className="flex flex-col items-center gap-2">
        
        <h1 className="text-4xl font-bold text-orange-600 drop-shadow-lg mb-2">{title}</h1>
        <p className="text-lg text-gray-700 mb-4">Welcome! This is the secret index page for grown-ups. Each link below leads to a unique hint page for the scavenger hunt. Share the QR code for each page with your hunters!</p>
        <p className="mt-4 mb-4">To get started and find the first ghost, solve this hint: <strong>{hints[0].text}</strong></p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
        {hints.map((hint: { id: number; text: string; answer?: string }) => {
          const hash = (hintHashMap as Array<{id: number, hash: string}>).find((h) => h.id === hint.id)?.hash;
          return (
            <li key={hint.id} className="group bg-white rounded-xl shadow-lg border-2 border-orange-200 transition hover:border-orange-400">
              <Link href={`/${hash}`} className="flex flex-col items-center w-full h-full p-4">
                <Image
                  src={`${basePath}/qr-codes/hint-${hint.id}.png`}
                  alt={`QR code for Hint #${hint.id}`}
                  width={112}
                  height={112}
                  className="w-28 h-28 object-contain mb-2 border border-gray-200 rounded group-hover:border-orange-400 transition"
                  priority
                />
                <span className="block text-center text-xl font-semibold text-orange-600 group-hover:text-orange-800">
                  Ghost #{hint.id}&rsquo;s Hint
                </span>
              </Link>
            </li>
          );
        })}
        <li key="congrats" className="group bg-white rounded-xl shadow-lg border-2 border-orange-200 transition hover:border-orange-400">
          <Link href="/congratulations" className="flex flex-col items-center w-full h-full p-4">
            <Image
              src={`${basePath}/qr-codes/congratulations.png`}
              alt="QR code for Congratulations page"
              width={112}
              height={112}
              className="w-28 h-28 object-contain mb-2 border border-gray-200 rounded group-hover:border-orange-400 transition"
              priority
            />
            <span className="block text-center text-xl font-semibold text-orange-600 group-hover:text-orange-800">
              Congrats
            </span>
          </Link>
        </li>
      </ul>
      <div className="mt-4 text-center inline-flex gap-4">
        <a
          href={`${basePath}/qr-codes/qr-codes.zip`}
          download
          className="inline-block mt-2 px-4 py-2 bg-orange-600 text-white rounded shadow hover:bg-orange-700 transition"
        >
          Download All QR Codes (ZIP)
        </a>
        <Link href="/printable-hints" className="inline-block mt-2 px-4 py-2 bg-orange-600 text-white rounded shadow hover:bg-orange-700 transition">
          Printable QR Codes Page
        </Link>
      </div>
      <div className="mt-8 text-xs text-gray-400">This page is hidden. Do not share with the kids!</div>
    </div>
  );
}
