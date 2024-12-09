/* eslint-disable react/prop-types */


export function Card({ className = "", children, title, ...props }) {
  return (
    <div
      className={`rounded-lg border bg-white text-black shadow-sm p-6 ${className}`}
      {...props}
    >
      {title && (
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
      )}
      {children}
    </div>
  )
}
