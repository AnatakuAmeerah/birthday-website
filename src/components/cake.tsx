import { useState } from 'react'
import { CakeIcon } from 'lucide-react'
export function Cake() {
  const [candlesLit, setCandlesLit] = useState([true, true, true, true, true])
  const [allBlown, setAllBlown] = useState(false)
  const blowCandle = (index: number) => {
    const newCandles = [...candlesLit]
    newCandles[index] = false
    setCandlesLit(newCandles)
    if (newCandles.every((lit) => !lit)) {
      setAllBlown(true)
    }
  }
  const relightCandles = () => {
    setCandlesLit([true, true, true, true, true])
    setAllBlown(false)
  }
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative">
        {/* Candles */}
        <div className="flex gap-4 mb-4 justify-center">
          {candlesLit.map((lit, i) => (
            <button
              key={i}
              onClick={() => blowCandle(i)}
              className="relative group cursor-pointer"
              disabled={!lit}
            >
              <div className="w-3 h-16 bg-gradient-to-b from-red-400 to-red-500 rounded-t-full shadow-lg" />
              {lit && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-6 bg-yellow-400 rounded-full animate-flicker opacity-90 shadow-lg shadow-yellow-400/50" />
                  <div className="w-2 h-4 bg-orange-400 rounded-full absolute top-1 left-1 animate-flicker" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Cake */}
        <div className="relative">
          <div className="w-64 h-48 bg-gradient-to-b from-purple-600 to-purple-700 rounded-lg shadow-2xl border border-purple-500">
            <div className="absolute inset-0 flex items-center justify-center">
              <CakeIcon className="w-24 h-24 text-purple-400 opacity-20" />
            </div>
            {/* Frosting decoration */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-pink-400 to-pink-500 rounded-t-lg" />
            <div className="absolute top-8 left-0 right-0 flex justify-around px-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-blue-400 rounded-full shadow-lg"
                />
              ))}
            </div>
          </div>
          <div className="w-72 h-12 bg-gradient-to-b from-purple-700 to-purple-800 rounded-lg shadow-xl -mt-2 -mx-4 border border-purple-600" />
        </div>
      </div>

      {allBlown ? (
        <div className="text-center animate-bounce">
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4">
            🎉 Make a wish! 🎉
          </p>
          <button
            onClick={relightCandles}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-110 transition-transform shadow-lg"
          >
            Light Again
          </button>
        </div>
      ) : (
        <p className="text-lg text-gray-400 animate-pulse">
          Click the candles to blow them out! 🎂
        </p>
      )}
    </div>
  )
}
