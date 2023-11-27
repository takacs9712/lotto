import { Link } from "react-router-dom";
import lottery from "../assets/lottery.png";

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

export const HomeIcon = () => {
  return (
    <Link to="/" className="flex items-center text-2xl font-bold">
      <img
        src={lottery}
        alt="lotto"
        style={{
          width: "40px",
          height: "40px",
          marginRight: "10px",
        }}
      />
      Lottokeeper
    </Link>
  );
};
