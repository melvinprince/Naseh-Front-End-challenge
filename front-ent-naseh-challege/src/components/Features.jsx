import VerifiedIcon from "@mui/icons-material/Verified";

export default function Features() {
  return (
    <div className="features-div bg-(--color-tertiary) relative flex h-[30rem] justify-center items-end pb-20">
      <div className="absolute top-30 left-3">
        <img src="/whatsapp.png" alt="" className="h-15" />
        <img src="/customer Service.png" alt="" className="h-12 rounded-full" />
      </div>
      <FeatureList
        heading={"Reliable Legal Services"}
        description={
          "naseh platform legal advice approved by lawyers registered with qatari ministry of justice"
        }
      />

      <FeatureList
        heading={"Diversity of servcies"}
        description={
          " naseh offers a wide range of legal services that meet the needs of individuals and companies"
        }
      />
      <FeatureList
        heading={"Security & comfidentiality"}
        description={
          "naseh ensures the protection of users data and legal information through advanced security systems"
        }
      />
      <FeatureList
        heading={"Easy Electruc Payment"}
        description={
          "safe and convenient payment options, ensuring transactions are completed easily and comfortably"
        }
      />
    </div>
  );

  function FeatureList({ heading, description }) {
    return (
      <div className="text-center w-[20%] features-item">
        <span className="text-green-500 bg-green-500/10 p-3 rounded-full inline-block">
          <VerifiedIcon />
        </span>
        <h3 className="text-xl py-4">{heading}</h3>
        <p>{description}</p>
      </div>
    );
  }
}
