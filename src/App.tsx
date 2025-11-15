import  { useEffect, useState, } from 'react'
import { Confetti } from './components/confetti'
import { Cake } from './components/cake'
import { PartyPopperIcon, CakeIcon, HeartIcon } from 'lucide-react'
 function App() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [ setScrollY] = useState(0)
  useEffect(() => {
    // Trigger confetti on load
    setShowConfetti(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-x-hidden">
      <Confetti active={showConfetti} />
      {/* <Balloons /> */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <h1 className="text-7xl md:text-9xl font-bold mb-6 animate-bounce-slow">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              Happy Birthday!
            </span>
          </h1>
          <p className="text-4xl md:text-6xl text-gray-300 mb-8 animate-fade-in font-semibold">
            🎉 BASIT!!! 🎉
          </p>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in delay-200">
           May Allah continue to guide and protect you throughout all your endavours, i wish you the best of this world and the next. Hope you have a day filled with love, joy, and unforgettable moments. May this year bring you closer to all your dreams(me😏)!
          </p>
          <div className="flex justify-center gap-6">
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-lg font-medium shadow-lg transform hover:scale-105 transition-transform"
            >
              Let's Celebrate! <PartyPopperIcon className="inline-block w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Cake Section */}
      <section className="relative py-20 px-4 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            <CakeIcon className="inline-block w-12 h-12 mb-2" />
            Make a Wish
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Blow out the candles and make your special wish come true!
          </p>
          <Cake />
        </div>
      </section>

      

      {/* Final Celebration */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-8xl mb-6 animate-bounce">🎉</div>
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">
            Have an Amazing Day!
          </h2>
          <p className="text-2xl text-gray-300 mb-8">
            You deserve all the happiness in the world! 🎈
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
