import { Link } from "react-router-dom";

export const AboutButton = () => {
  return (
    <Link
      to="/about"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      About the game
    </Link>
  );
};
