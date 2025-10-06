
const Home = () => {
  return (
    <div>
      <Hero />
      <section className="py-12 px-6 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-2xl font-semibold text-[--color-lihaxa-main]">24/7 Care</h3>
          <p className="mt-2 text-gray-700">
            Always-available primary care through WhatsApp with licensed doctors.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[--color-lihaxa-green]">Fast Access</h3>
          <p className="mt-2 text-gray-700">
            No long queues or hospital delays — instant virtual consultation.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-[--color-lihaxa-darkteal]">Pre-Funded Wallet</h3>
          <p className="mt-2 text-gray-700">
            Patients can pre-fund their wallet to pay for care and medications easily.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
