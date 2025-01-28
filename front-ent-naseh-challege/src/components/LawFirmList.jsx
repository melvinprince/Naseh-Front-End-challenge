export default function LawFirmList() {
  return (
    <div>
      <div>
        <span>Lawfirm</span>
        <h2>Specialized Lawyers around the Clock</h2>
      </div>
      <div>
        <LawFirmItem heading="Al Oawi Firm" src="/5.png" />
        <LawFirmItem heading="Sala For Law" src="/4.png" />
        <LawFirmItem heading="Al Ansari Law" src="/1.png" />
        <LawFirmItem heading="Dune Law Firm" src="/2.png" />
        <LawFirmItem heading="Decade Law Firm" src="/3.png" />
      </div>
    </div>
  );

  function LawFirmItem({ heading, src }) {
    return (
      <div>
        <div>
          <img src={src} alt="" />
          <h3>{heading}</h3>
          <p>
            I Provide apecialized Legal consultations in the field of Companies
          </p>
        </div>
        <div>
          <div>
            <span></span>
            <span>Spoken English</span>
            <span>Arabic & English</span>
          </div>
          <div>
            <span></span>
            <span>Years of Experience</span>
            <span>10-15</span>
          </div>
        </div>
      </div>
    );
  }
}
