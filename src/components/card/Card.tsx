const Card = ({
  img,
  title,
  slug,
}: {
  img: string;
  title: string;
  slug: string;
}) => {
  return (
    <div className="flex justify-between">
      <img src={img} alt={title} />
      <div className="flex flex-col gap-2">
        <h3>{title}</h3>
        <p>{slug}</p>
      </div>
    </div>
  );
};

export default Card;
