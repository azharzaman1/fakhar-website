import React from "react";
import { imageBuilder } from "@lib/sanity";

const CertificationCard = ({ certification }) => {
  console.log({ certification });
  return (
    <div className="certification-card bg-white border-2 border-gray-200 rounded-md min-h-[400px] shadow-lg">
      <img
        src={imageBuilder(certification.certificate_img).url()}
        alt={certification.certificate_img?.alt}
      />
    </div>
  );
};

export default CertificationCard;
