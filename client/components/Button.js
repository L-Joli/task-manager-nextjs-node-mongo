const Button = ({label, type, onClick}) => {
  return (
    <button
      type={type || 'button'}
      className="border border-gray-300 rounded-full w-9 h-9 text-lg text-gray-600 font-light hover:bg-gray-200"
      onClick={onClick ? onClick : undefined}
    >
      {label}
    </button>
  )
}

export default Button
