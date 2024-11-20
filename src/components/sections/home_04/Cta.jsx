import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section id="cta-section">
      <div className="global-container">
        <div className="rounded-[10px] bg-colorGreen px-5 py-[60px] md:py-20 xl:py-[100px]">
          {/* Section Content Block */}
          <div className="jos mx-auto max-w-[500px] text-center lg:max-w-2xl xl:max-w-[840px]">
            <h2 className="font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-black sm:text-[44px] lg:text-[56px] xl:text-[70px]">
              Start connecting now! If you need any help or assistance, feel
              free to contact our team!
            </h2>
          </div>
          {/* Section Content Block */}
          <div
            className="jos mt-8 flex flex-wrap justify-center gap-6 md:mt-[50px]"
            data-jos_animation="fade"
          >
            <button
              rel="noopener noreferrer"
              className="button inline-block h-full rounded border-2 border-transparent bg-black py-3 text-base text-colorGreen after:border-colorGreen after:bg-colorGreen hover:text-black"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
