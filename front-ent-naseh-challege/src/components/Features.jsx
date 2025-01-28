import VerifiedIcon from "@mui/icons-material/Verified";

export default function Features() {
  return (
    <div className="bg-(--color-tertiary)">
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
      <div className="text-center">
        <span className="text-green-500">
          <VerifiedIcon />
        </span>
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    );
  }
}
