// Window: a small "app window" frame with three dots and a title on top.
// Used for the hero photo, the project previews, and the map.
export default function Window({ title, className = '', children }) {
  return (
    <div className={`window ${className}`}>
      <div className="window-top">
        <i></i>
        <i></i>
        <i></i>
        {title}
      </div>
      {children}
    </div>
  )
}
