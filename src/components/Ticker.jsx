// Ticker: the slanted black strip that slides sideways forever.
// The list is printed several times so the loop has no visible gap.
import { ticker } from '../data.js'

export default function Ticker() {
  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker">
        <div className="ticker-track">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((item, index) => (
            <span key={index}>
              {item}
              <b>✦</b>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
