const Card = ({
  p = "",
  className = "",
  children,
}: {
  p?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`bg-white rounded-lg ${className} ${p} w-full`}>
      {children}
    </div>
  );
};

export default Card;
