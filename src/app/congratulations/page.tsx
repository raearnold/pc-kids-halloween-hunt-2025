import { footer, congratsMessage, prizeInstructions } from "../hunt-config";

export const dynamic = 'error';

export default function Congratulations() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 text-center">
      <span className="mb-2 text-[100px]" role="presentation">👻</span>
      <h1 className="text-4xl font-bold text-purple-700 mb-4 sr-only">You did it!</h1>
      <h1 className="text-3xl font-bold text-orange-700 mb-4">Ghost #10 says:</h1>
      <div className="bg-purple-900 text-white rounded-xl shadow-lg p-8 border-2 border-purple-200 text-2xl text-gray-800 max-w-xl">
        {congratsMessage}
        <span className="text-lg block mt-4">{prizeInstructions}</span>
      </div>
      <p className="mt-8 text-xs text-gray-400">{footer}</p>
    </div>
  );
}
