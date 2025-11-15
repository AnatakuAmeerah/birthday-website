const balloonColors = [
  'bg-red-400',
  'bg-blue-400',
  'bg-yellow-400',
  'bg-pink-400',
  'bg-purple-400',
  'bg-green-400',
]
export function Balloons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`absolute ${balloonColors[i % balloonColors.length]} rounded-full opacity-80`}
          style={{
            width: `${60 + Math.random() * 40}px`,
            height: `${80 + Math.random() * 50}px`,
            left: `${Math.random() * 100}%`,
            bottom: '-100px',
            animation: `floatUp ${8 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          <div className="absolute bottom-0 left-1/2 w-0.5 h-12 bg-gray-400 transform -translate-x-1/2" />
        </div>
      ))}
    </div>
  )
}
