// Folder: every section of the page is a folder with a colored tab.
// "id" is what the menu links jump to. "color" picks the tab color.
export default function Folder({ id, title, color, className = '', children }) {
  return (
    <section id={id} className="folder" data-section>
      <h2 className={`tab bg-${color}`}>{title}</h2>
      <div className={`sheet ${className}`}>{children}</div>
    </section>
  )
}
