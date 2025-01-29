import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="footer w-[80%] mx-auto flex pb-20 pt-10 gap-30">
      <div className="flex flex-col">
        <Logo type="big" />
        <p className="py-8 w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima
          laudantium fugit iste similique voluptates omnis earum animi illo.
          Dicta?
        </p>
        <div className="flex gap-10">
          <img src="/twitter.png" alt="" className="h-10" />
          <img src="/linkedin.png" alt="" className="h-10" />
          <img src="/instagram.png" alt="" className="h-10" />
          <img src="/youtube.png" alt="" className="h-10" />
        </div>
      </div>
      <About />
      <Support />
      <LegalLinks />
    </div>
  );
  function About() {
    return (
      <div className=" flex flex-col gap-3">
        <h3 className="font-bold text-xl">About</h3>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Lawyers</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
      </div>
    );
  }

  function Support() {
    return (
      <div className="footer-none footer-flex flex flex-col gap-3">
        <h3 className="font-bold text-xl">Support</h3>
        <ul className="footer-none">
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Online Chat</a>
          </li>
          <li>
            <a href="#">Whatsapp</a>
          </li>
        </ul>
      </div>
    );
  }
  function LegalLinks() {
    return (
      <div className="footer-none footer-flex flex flex-col gap-3">
        <h3 className="font-bold text-xl">Legal Links</h3>
        <ul className="footer-none">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
          <li>
            <a href="#">Cookie Policy</a>
          </li>
        </ul>
      </div>
    );
  }
}
