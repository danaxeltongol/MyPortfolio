// Sticker: a small label you can drag around with the mouse or a finger.
import { useRef, useState } from 'react'

export default function Sticker({ className = '', rotate = 0, children }) {
  // How far the sticker has been moved from where it started.
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const grabPoint = useRef(null) // where the pointer grabbed the sticker

  function handlePointerDown(event) {
    event.currentTarget.setPointerCapture(event.pointerId) // keep following the pointer
    grabPoint.current = { x: event.clientX - offset.x, y: event.clientY - offset.y }
    setDragging(true)
  }

  function handlePointerMove(event) {
    if (!grabPoint.current) return // not dragging right now
    setOffset({
      x: event.clientX - grabPoint.current.x,
      y: event.clientY - grabPoint.current.y,
    })
  }

  function handlePointerUp() {
    grabPoint.current = null
    setDragging(false)
  }

  return (
    <span
      className={`sticker ${className} ${dragging ? 'is-dragging' : ''}`}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px) rotate(${rotate}deg)` }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {children}
    </span>
  )
}
