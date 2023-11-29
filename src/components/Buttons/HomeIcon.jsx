import { Link } from "react-router-dom";
import lottery from "../../assets/lottery.png";

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
