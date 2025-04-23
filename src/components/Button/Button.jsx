export const Button = ({ text, onClick, color = 'bg-green-600' }) => (
  <button
      className={`${color} text-white px-6 py-2 rounded-lg hover:opacity-80 transition`}
      onClick={onClick}
  >
      {text}
  </button>
);