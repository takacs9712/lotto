import { Link } from "react-router-dom";

export const HomeButton = () => {
  return (
    <Link
      to="/"
      className="tbg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      Home
    </Link>
  );
};
