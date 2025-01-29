import PhoneInTalkTwoToneIcon from "@mui/icons-material/PhoneInTalkTwoTone";
import PhonelinkRingTwoToneIcon from "@mui/icons-material/PhonelinkRingTwoTone";
import BookConsultation from "./BookConsultation";

export default function Introduction() {
  return (
    <div className="intro-bg flex flex-col justify-between items-center text-(--color-primary) relative intro-div">
      <div className="flex w-[80%] justify-center items-center border-b-1 border-(--color-primary)/20 py-10 mb-40">
        <div className="flex items-center gap-5 pr-30">
          <div className="bg-blue-500/10 p-2 rounded-sm ">
            <PhoneInTalkTwoToneIcon />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Urgent consultation now!</h3>
            <p className="text-[10px]">
              book it in 5 minutes a lawyer will respond to you in few minutes
            </p>
          </div>
        </div>
        <div>
          <button className="bg-(--color-button-red) hover:bg-red-700 font-bold py-3 px-9 rounded flex gap-2">
            <PhonelinkRingTwoToneIcon />
            <span className="text-sm">Consult Now</span>
          </button>
        </div>
      </div>

      <div className="intro-2 flex flex-col justify-center items-center text-center pb-10">
        <h2 className="text-5xl font-bold pb-5">Choose & filter & schedule</h2>
        <p className="w-[80%]">
          Easy access to your legal advice. Choose, sort and clearly define the
          font that best fits your schedule.
        </p>
      </div>
      <BookConsultation />
    </div>
  );
}
