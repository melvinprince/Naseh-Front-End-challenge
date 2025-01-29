import { useState } from "react";
import DateRangeTwoToneIcon from "@mui/icons-material/DateRangeTwoTone";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";

export default function BookConsultation() {
  const options = [" ", "option1", "option2", "option3", "option4"];

  const [selectedDate, setSelectedDate] = useState(options[0]);
  const [selectedTime, setSelectedTime] = useState(options[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(options[0]);
  const [selectedExperience, setSelectedExperience] = useState(options[0]);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
  const handleExperienceChange = (event) => {
    setSelectedExperience(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-(--color-primary) w-[75%] text-black relative top-5 rounded-lg z-10">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center pt-7">
          <div className="book-consultation-content flex gap-15 divide-x divide-gray-200 py-5 text-sm mb-10">
            <DropDown
              heading="Consultation Date"
              logo={<DateRangeTwoToneIcon />}
              options={options}
              name="selectDate"
              value={selectedDate}
              onChange={handleDateChange}
            />
            <DropDown
              heading="Consultation Time"
              logo={<AccessTimeOutlinedIcon />}
              options={options}
              name="selectTime"
              value={selectedTime}
              onChange={handleTimeChange}
            />
            <DropDown
              heading="Consultation Language"
              logo={<GTranslateOutlinedIcon />}
              options={options}
              name="selectLanguage"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            />
            <DropDown
              heading="Years of Experience"
              logo={<BusinessCenterOutlinedIcon />}
              options={options}
              name="selectExperience"
              value={selectedExperience}
              onChange={handleExperienceChange}
            />
          </div>
          <button
            type="submit"
            className="bg-(--color-button-red) hover:bg-red-700 font-bold py-3 px-9 rounded flex gap-2 text-white mb-7"
          >
            <span>
              <EditCalendarOutlinedIcon />
            </span>
            Book Consultation
          </button>
        </div>
      </form>
    </div>
  );

  function DropDown({ heading, logo, options, name, value, onChange }) {
    return (
      <div className="flex items-center px-2 justify-between">
        <span className="text-(--color-logo-text) bg-(--color-logo-text)/10 mr-5 rounded-[50%] h-10 w-10 flex justify-center items-center">
          {logo}
        </span>
        <div className="flex flex-col gap-1">
          <label htmlFor={name} className="font-bold">
            {heading}
          </label>
          <span>{name}</span>
        </div>
        <div>
          <select name={name} id={name} value={value} onChange={onChange}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
