export default function Congratulations() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 text-center">
      <span className="mb-2 text-[100px]" role="img" aria-label="Ghost">👻</span>
      <h1 className="text-4xl font-bold text-purple-700 mb-4 sr-only">You did it!</h1>
      <div className="bg-purple-900 text-white rounded-xl shadow-lg p-8 border-2 border-purple-200 text-2xl text-gray-800 max-w-xl">
        You&apos;ve completed the <br/>PC Kids 2025 Halloween Scavenger Hunt.<br /><br />
        <span className="text-lg">Please pick up your gift bag.</span>
      </div>
      <p className="mt-8 text-xs text-gray-400">🎃🎃🎃 Happy Halloween from PC Kids! 🎃🎃🎃 <br/> Scavenger Hunt 2025</p>
    </div>
  );
}
