import mobile from "./images/image-hero-mobile.png";
import desktop from "./images/image-hero-desktop.png";
import audiophile from "./images/client-audiophile.svg";
import databiz from "./images/client-databiz.svg";
import maker from "./images/client-maker.svg";
import meet from "./images/client-meet.svg";
import Navbar from "./navbar";
import Footer from "./footer";

function App() {
  return (
    <>
      <header className="">
        <Navbar />
      </header>
      <section className="md:h-[90vh] flex flex-col-reverse mb-8 py-4 md:py-20 md:flex-row md:gap-10 md:grid-cols-2 md:place-items-center max-w-4xl md:max-w-5xl md:mx-auto overflow-hidden">
        <article className="text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0">
          <h1 className="font-bold text-4xl lg:text-6xl xl:text-7xl mb-5">
            Make remote work
          </h1>
          <p className="mb-5">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-black rounded-lg shadow text-white font-bold hover:opacity-75 transition-all duration-150 py-2 px-6 cursor-pointer">
            Learn more
          </button>
          <ul className="grid grid-cols-4 gap-1 mt-4 place-items-center md:place-items-start">
            <li>
              <img src={audiophile} alt="" className=" w-16 md:w-24" />
            </li>
            <li>
              <img src={databiz} alt="" className=" w-16 md:w-24" />
            </li>
            <li>
              <img src={maker} alt="" className=" w-16 md:w-24" />
            </li>
            <li>
              <img src={meet} alt="" className=" w-16 md:w-24" />
            </li>
          </ul>
        </article>
        <article className="mt-5">
          <picture className="">
            <source
              media="(min-width:768px)"
              srcSet={desktop}
              className=" object-scale-down"
            />
            <img src={mobile} alt="" className="w-full" />
          </picture>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default App;
