import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import DomainIcon from "@mui/icons-material/Domain";
import DescriptionIcon from "@mui/icons-material/Description";
import TaskIcon from "@mui/icons-material/Task";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export default function LegalServiceTypes() {
  return (
    <div className="bg-(--color-primary)">
      <div>
        <div>
          <span>Services</span>
          <h2>A wide range of legal services</h2>
        </div>
        <a href="#">View All Services &rarr;</a>
      </div>
      <ServiceTypes
        logo={<EditCalendarIcon />}
        heading={"Scheduled Consultations"}
        buttonText={"Book a Consultation"}
        spanColor={"bg-green-500/10 p-2 rounded-sm"}
      />
      <ServiceTypes
        logo={<WifiCalling3Icon />}
        heading={"Urgent Consultation"}
        buttonText={"Cancel Now"}
        spanColor={"bg-red-500/10 p-2 rounded-sm"}
      />
      <ServiceTypes
        logo={<DomainIcon />}
        heading={"Corporate Portal"}
        buttonText={""}
        spanColor={"bg-blue-500/10 p-2 rounded-sm"}
      />
      <ServiceTypes
        logo={<DescriptionIcon />}
        heading={"Written Consultation"}
        buttonText={""}
        spanColor={"bg-yellow-500/10 p-2 rounded-sm"}
      />
      <ServiceTypes
        logo={<TaskIcon />}
        heading={"Conttracts & Agreements"}
        buttonText={""}
        spanColor={"bg-purple-500/10 p-2 rounded-sm"}
      />
      <ServiceTypes
        logo={<BusinessCenterIcon />}
        heading={"Hire A Lawyer"}
        buttonText={""}
        spanColor={"bg-orange-500/10 p-2 rounded-sm"}
      />
    </div>
  );

  function ServiceTypes({ logo, heading, buttonText, spanColor }) {
    return (
      <div>
        <div>
          <span className={spanColor}>{logo}</span>
          <div>
            <h3>{heading}</h3>
            <p>
              Naseh Application is an integrated solution for providing legal
              services remotly.
            </p>
          </div>
        </div>
        <button disabled={buttonText === "soon" ? true : false}>
          {buttonText}
        </button>
      </div>
    );
  }
}
