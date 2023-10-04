// eslint-disable-next-line react/prop-types
const MenuButton = ({ className }) => {
  return (
    <summary className={`bg-green-300 border-none m-1 ml-3 btn ${className}`}>
      <svg
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-5 h-5 stroke-green-800"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </summary>
  );
};

export default MenuButton;
