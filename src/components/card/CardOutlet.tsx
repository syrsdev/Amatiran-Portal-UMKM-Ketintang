import ButtonCard from "../button/ButtonCard";
import Card from "./Card";

interface UmkmType {
  id: number;
  name: string;
  description: string;
  address: string;
  gmaps: string;
  category: string;
  gallery: string[];
}

const CardOutlet = ({ umkm }: { umkm: UmkmType }) => {
  console.log(umkm);

  return (
    <Card className="shadow-2xl flex">
      <img
        src={umkm.gallery[0]}
        alt={umkm.name}
        className="w-1/3 rounded-s-lg object-cover"
      />
      <div className="flex flex-col p-3 w-2/3 gap-3 justify-between">
        <h3 className="text-2xl line-clamp-2">{umkm.name}</h3>
        <ButtonCard to={`/detail/${umkm.id}`} />
      </div>
    </Card>
  );
};

export default CardOutlet;
