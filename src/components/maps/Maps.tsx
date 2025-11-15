const Maps = ({ src }: { src: string }) => {
  return (
    <iframe
      src={src}
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Maps;
