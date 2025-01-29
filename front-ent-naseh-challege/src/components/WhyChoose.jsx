import PhoneSection from "./PhoneSection";

export default function WhyChoose() {
  return (
    <div className="why-choose">
      <div className="flex flex-col py-25 w-[80%] mx-auto">
        <div className="flex justify-around">
          <div className="text-white why-choose-content">
            <h3 className="text-5xl font-[800] mb-8">Why Choose ?</h3>
            <p className="w-[80%] text-gray-300 why-choose-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              nobis recusandae, quia minus qui quisquam labore aspernatur veniam
              doloremque magnam? Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet.
            </p>
          </div>
          <div className="flex gap-10">
            <img
              src="/googleplay.webp"
              alt=""
              className="h-15 border-1 border-white rounded-[20px]"
            />
            <img
              src="/appstore.png"
              alt=""
              className="h-15 border-1 border-white rounded-[20px]"
            />
          </div>
        </div>
        <PhoneSection />
      </div>
    </div>
  );
}
