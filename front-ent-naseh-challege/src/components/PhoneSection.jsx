import "./css/mockup.css";
export default function PhoneSection() {
  return (
    <div className="flex h-[35rem] gap-10 mt-10 z-110 mockup-container-parent">
      <div className="mockup-container bg-(--color-primary) py-10 px-8 overflow-hidden rounded-[30px]">
        <h3 className="font-bold text-2xl mb-3">Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corporis
          facilis consectetur atque rerum maiores repudiandae provident
          temporibus pariatur est?
        </p>
        <img src="/mockup.png" alt="" className="img-1" />
      </div>
      <div className="mockup-container mockup-container-2 bg-(--color-primary) py-10 px-8 overflow-hidden rounded-[30px]">
        <img src="/mockup.png" alt="" className="img-2" />
        <h3 className="font-bold text-2xl mb-3 mt-[30px]">
          Lorem ipsum dolor sit amet.
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corporis
          facilis consectetur atque rerum maiores repudiandae provident
          temporibus pariatur est?
        </p>
      </div>
      <div className="mockup-container bg-(--color-primary) py-10 px-8 overflow-hidden rounded-[30px]">
        <h3 className="font-bold text-2xl mb-3">Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel corporis
          facilis consectetur atque rerum maiores repudiandae provident
          temporibus pariatur est?
        </p>
        <img src="/mockup.png" alt="" className="img-3" />
      </div>
    </div>
  );
}
