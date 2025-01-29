import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";

export default function Contact() {
  return (
    <div className="py-10 ">
      <div className="contact-div flex justify-between border-b-1 pb-12 border-gray-200 w-[80%] mx-auto">
        <ContactCard logo={<MailOutlineOutlinedIcon />} text={"Get in Touch"} />
        <ContactCard logo={<PhoneCallbackOutlinedIcon />} text={"Lets Talk"} />
        <ContactCard logo={<ReceiptLongOutlinedIcon />} text={"CR Number"} />
        <ContactCard logo={<AddLocationAltOutlinedIcon />} text={"Location"} />
      </div>
    </div>
  );

  function ContactCard({ logo, text, number }) {
    return (
      <div className="flex items-center">
        <span className="text-(--color-logo-text) bg-(--color-logo-text)/10 py-5 px-5 rounded-full mr-5">
          {logo}
        </span>
        <div className="flex flex-col">
          <span className="font-bold">{text}</span>
          <span className="font-bold text-xs">{number || "xxxxxxxx"}</span>
        </div>
      </div>
    );
  }
}
