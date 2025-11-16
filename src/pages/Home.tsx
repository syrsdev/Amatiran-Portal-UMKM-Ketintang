import CardOutlet from "../components/card/CardOutlet";
import CardWhys from "../components/card/CardWhys";
import ImgHero from "../components/image/ImgHero";
import Container from "../layouts/Container";
import Layout from "../layouts/Layout";

import umkmData from "../data/umkm.json";

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
      <Container className="grid grid-cols-4 my-28 gap-10">
        {umkmData.map((item) => (
          <CardOutlet key={item.id} umkm={item}></CardOutlet>
        ))}
      </Container>

      <section className="py-10 bg-primary text-white font-bold">
        <Container className="flex flex-col gap-10">
          <h2 className="text-2xl text-center">
            Mengapa Pilih UMKM Kuliner Ketintang?
          </h2>

          <div className="grid grid-cols-3 text-black gap-10">
            <CardWhys>
              Setiap rupiah yang kamu keluarkan untuk UMKM lokal, adalah
              investasi untuk masa depan Indonesia.
            </CardWhys>
            <CardWhys>
              Gerakkan roda ekonomi bangsa dengan langkah sederhana: pilih UMKM
              lokal!
            </CardWhys>
            <CardWhys>
              Mari majukan perekonomian daerah dengan memberdayakan UMKM di
              sekitar kita
            </CardWhys>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;
