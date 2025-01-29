import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

export default function CTA() {
  return (
    <div className="bg-(--color-secondary) py-25 ">
      <div className="flex mx-auto w-[80%] text-white">
        <div>
          <img src="/chart.png" alt="" className="h-120 w-180" />
        </div>
        <div className="pl-15">
          <span className="text-(--color-logo-text) font-bold">
            Join as a Lawyer
          </span>
          <h2 className="text-5xl pb-5 pt-2 font-bold">Join as a Lawyer</h2>
          <p className="text-gray-500 font-bold w-[50%] pb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas
            culpa at, magnam odio perspiciatis placeat voluptates esse debitis
            laborum.
          </p>
          <div className="flex flex-wrap gap-5">
            <span className="cta-green-check bg-blue-300/10 px-10 py-6 rounded-[20px] text-xl w-110">
              <CheckCircleRoundedIcon className="text-green-500" />
              &nbsp;&nbsp; Expannd your Customer netwrok
            </span>
            <span className="cta-green-check bg-blue-300/10 px-10 py-6 rounded-[20px] text-xl w-110">
              <CheckCircleRoundedIcon className="text-green-500" />
              &nbsp;&nbsp; Flexible Consultation Options
            </span>
            <span className="cta-green-check bg-blue-300/10 px-10 py-6 rounded-[20px] text-xl w-110">
              <CheckCircleRoundedIcon className="text-green-500" />
              &nbsp;&nbsp; Control your schedule
            </span>
            <span className="cta-green-check bg-blue-300/10 px-10 py-6 rounded-[20px] text-xl w-110">
              <CheckCircleRoundedIcon className="text-green-500" />
              &nbsp;&nbsp; Secure and Fast Payments
            </span>
          </div>
          <button className="mt-12 bg-(--color-logo-text) px-20 py-5 rounded-[20px] font-bold">
            <ControlPointOutlinedIcon />
            &nbsp;&nbsp; Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
