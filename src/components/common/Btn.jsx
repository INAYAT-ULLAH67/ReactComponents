function Btn({
  type = "button",
  variant = "primary", // primary | danger | secondary
  action = "Submit",
  classes = "",
  disabled = false,
  loading = false,
  ariaLabel,
  onClick = () => console.log("button has clicked!"),
}) {
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600",
    danger: "bg-red-500 hover:bg-red-600",
    secondary: "bg-gray-300 hover:bg-gray-400 text-black",
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`${variants[variant]} ${classes} mx-3 rounded-xl inline-block px-4 py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {loading ? "Loading..." : action}
    </button>
  )
}

export default Btn