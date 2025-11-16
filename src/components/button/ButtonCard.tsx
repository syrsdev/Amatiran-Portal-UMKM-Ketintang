import { Link } from "react-router";

const ButtonCard = ({ to }: { to: string }) => {
  return (
    <Link
      to={to}
      className="px-5 py-2 bg-primary text-white rounded-full text-center w-fit"
    >
      Lihat Detail
    </Link>
  );
};

export default ButtonCard;
