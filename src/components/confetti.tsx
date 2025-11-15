import { useEffect, useState } from 'react'
interface ConfettiPiece {
  id: number
  x: number
  y: number
  rotation: number
  color: string
  size: number
  speedX: number
  speedY: number
}
export function Confetti({ active }: { active: boolean }) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])
  useEffect(() => {
    if (!active) return
    const colors = [
      '#FF6B6B',
      '#4ECDC4',
      '#FFE66D',
      '#A8E6CF',
      '#FF8B94',
      '#C7CEEA',
    ]
    const newPieces: ConfettiPiece[] = []
    for (let i = 0; i < 100; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100,
        y: -10,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 5,
        speedX: (Math.random() - 0.5) * 2,
        speedY: Math.random() * 3 + 2,
      })
    }
    setPieces(newPieces)
    const timeout = setTimeout(() => {
      setPieces([])
    }, 9000)
    return () => clearTimeout(timeout)
  }, [active])
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            animation: `confettiFall ${3 + Math.random() * 2}s linear forwards`,
          }}
        />
      ))}
    </div>
  )
}
