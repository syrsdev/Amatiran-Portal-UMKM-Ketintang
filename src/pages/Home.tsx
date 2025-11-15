import ImgHero from "../components/image/ImgHero";
import Container from "../layouts/Container";
import Layout from "../layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <Container className="flex justify-between items-center pb-40 ">
        <div className="w-1/2 flex flex-col gap-7 justify-center z-20">
          <h1 className="text-6xl font-bold">
            RasaKetintang <br />
            Surabaya
          </h1>
          <p>
            RasaKetintang Surabaya hadir untuk memperkenalkan beragam kuliner
            khas dari pelaku UMKM di daerah Ketintang. Temukan cita rasa
            autentik dari para pengusaha lokal yang penuh kreativitas dan
            semangat!
          </p>
        </div>
        <div className="absolute bg-primary w-1/3 h-[88%] top-0 right-0 z-0 rounded-bl-[100px]"></div>
        <ImgHero />
      </Container>

      <section className="flex justify-center py-10 bg-primary text-white font-bold ">
        <h2 className="text-2xl">Temukan Cita Rasa Ketintang!</h2>
      </section>
      <section className="flex justify-center py-10 bg-primary text-white font-bold ">
        <h2 className="text-2xl">Mengapa Pilih UMKM Kuliner Ketintang?</h2>
      </section>
    </Layout>
  );
};

export default Home;
