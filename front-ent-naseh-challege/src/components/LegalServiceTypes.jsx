import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import DomainIcon from "@mui/icons-material/Domain";
import DescriptionIcon from "@mui/icons-material/Description";
import TaskIcon from "@mui/icons-material/Task";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export default function LegalServiceTypes() {
  return (
    <div className="bg-(--color-primary) mt-20 w-[80%] flex flex-col mx-auto">
      <div className="legal-parent flex justify-between items-center">
        <div>
          <span className="text-xs text-(--color-logo-text)">Services</span>
          <h2 className="text-3xl font-bold">A wide range of legal services</h2>
        </div>
        <a href="#" className="text-(--color-logo-text)">
          View All Services{" "}
          <span className="bg-gray-100 p-2 rounded-full">&rarr;</span>
        </a>
      </div>
      <div className=" flex flex-wrap justify-between items-center mt-20 gap-6">
        <ServiceTypes
          logo={<EditCalendarIcon />}
          heading={"Scheduled Consultations"}
          buttonText={"Book a Consultation"}
          spanColor={"bg-green-500/10 text-green-500 p-2 rounded-sm"}
        />
        <ServiceTypes
          logo={<WifiCalling3Icon />}
          heading={"Urgent Consultation"}
          buttonText={"Cancel Now"}
          spanColor={"bg-red-500/10 text-red-500 p-2 rounded-sm"}
        />
        <ServiceTypes
          logo={<DomainIcon />}
          heading={"Corporate Portal"}
          buttonText={"soon"}
          spanColor={"bg-blue-500/10 text-blue-500 p-2 rounded-sm"}
        />
        <ServiceTypes
          logo={<DescriptionIcon />}
          heading={"Written Consultation"}
          buttonText={"soon"}
          spanColor={"bg-yellow-500/10 text-yellow-500 p-2 rounded-sm"}
        />
        <ServiceTypes
          logo={<TaskIcon />}
          heading={"Conttracts & Agreements"}
          buttonText={"soon"}
          spanColor={"bg-purple-500/10 text-purple-500 p-2 rounded-sm"}
        />
        <ServiceTypes
          logo={<BusinessCenterIcon />}
          heading={"Hire A Lawyer"}
          buttonText={"soon"}
          spanColor={"bg-orange-500/10 text-orange-500 p-2 rounded-sm"}
        />
      </div>
    </div>
  );

  function ServiceTypes({ logo, heading, buttonText, spanColor }) {
    return (
      <div className="w-[30%] border-1 border-gray-200 p-5 flex flex-col legal-item">
        <div className="flex justify-between items-center mb-5">
          <span className={spanColor + " p-4"}>{logo}</span>
          <div className="flex flex-col gap-1 pl-4">
            <h3 className="font-bold text-l">{heading}</h3>
            <p className="text-s text-gray-500">
              Naseh Application is an integrated solution for providing legal
              services remotly.
            </p>
          </div>
        </div>
        <button
          className={
            buttonText === "soon"
              ? "bg-gray-100 py-3 rounded text-gray-900"
              : "bg-(--color-secondary) text-white py-3 rounded cursor-pointer"
          }
          disabled={buttonText === "soon" ? true : false}
        >
          {buttonText === "soon" ? "" : logo}
          {buttonText}
        </button>
      </div>
    );
  }
}
