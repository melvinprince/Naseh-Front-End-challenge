import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import TranslateSharpIcon from "@mui/icons-material/TranslateSharp";

export default function LawFirmList() {
  return (
    <div className="flex flex-col justify-center items-center bg-(--color-tertiary) mt-25 pt-25">
      <div className="text-center pb-25">
        <span className="text-(--color-logo-text) font-bold">Lawfirm</span>
        <h2 className="pt-3 text-4xl font-[900]">
          Specialized Lawyers around the Clock
        </h2>
      </div>
      <div className="flex gap-10 overflow-hidden mb-25 flex-wrap justify-center">
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
      <div className="flex flex-col items-center bg-(--color-primary) border-1-white rounded-xl">
        <div className="flex flex-col items-center text-center w-[80%] border-b-1 border-gray-200 pb-5">
          <img
            src={src}
            alt=""
            className="h-20 w-20 rounded-full border-10 border-gray-100"
          />
          <h3 className="font-bold text-xl py-3">{heading}</h3>
          <p className="text-s text-gray-400 font-bold">
            I Provide apecialized Legal consultations in the field of Companies
          </p>
        </div>
        <div className="flex gap-12">
          <div className="flex items-center">
            <span className="text-(--color-logo-text) pr-3">
              <TranslateSharpIcon />
            </span>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400">Spoken English</span>
              <span className="text-xs font-bold">Arabic & English</span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-(--color-logo-text) pr-3">
              <MilitaryTechOutlinedIcon />
            </span>
            <div className="flex flex-col py-4">
              <span className="text-xs text-gray-400">Years of Experience</span>
              <span className="text-xs font-bold">10-15</span>
            </div>
          </div>
        </div>
        <button className="bg-(--color-secondary) text-white py-3 rounded-xl cursor-pointer w-[90%] font-bold my-5">
          View Profile
        </button>
      </div>
    );
  }
}
