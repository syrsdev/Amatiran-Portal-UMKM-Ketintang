interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return <section className={`mx-[120px] ${className}`}>{children}</section>;
};

export default Container;
