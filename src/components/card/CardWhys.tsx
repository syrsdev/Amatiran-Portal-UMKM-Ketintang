import Card from "./Card";

const CardWhys = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card p="p-10">
      <p className="flex flex-col text-xl">
        <span className="text-[60px]">“</span>
        {children}
      </p>
    </Card>
  );
};

export default CardWhys;
