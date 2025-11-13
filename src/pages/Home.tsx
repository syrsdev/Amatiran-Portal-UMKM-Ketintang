import Container from "../layouts/Container";
import Layout from "../layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <Container className="flex justify-between items-center">
        <div className="w-1/2 flex flex-col gap-7 justify-center">
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

        <img src="./img/geprek.svg" alt="" />
      </Container>

      <section className="flex justify-center py-10 bg-primary text-white font-bold mt-16 my-96">
        <h2 className="text-2xl">Temukan Cita Rasa Ketintang!</h2>
      </section>
    </Layout>
  );
};

export default Home;
