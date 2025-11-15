const ImgHero = () => {
  return (
    <div className="relative top-0 right-0 w-1/2 h-[400px]">
      <img
        src="./img/minum.svg"
        alt="makanan"
        className="z-10 absolute -right-36 -top-40"
      />
      <img src="./img/geprek.svg" alt="makanan" className="z-20 absolute" />
    </div>
  );
};

export default ImgHero;
