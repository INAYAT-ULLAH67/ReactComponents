import React from 'react'

function Checkbox({
  label,
  id,
  className = '',
  checked,
  error,
  disabled = false,
  ...props
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          disabled={disabled}
          className={`w-4 h-4 rounded border-gray-300 text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className={`text-sm text-gray-700 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {label}
          </label>
        )}
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  )
}

export default Checkbox