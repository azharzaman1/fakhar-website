import React from "react";
import dynamic from "next/dynamic";
import Container from "../../../Generic/Layout/Container";
import { getFileUrlFromId } from "@lib/sanity";

const CertificationCard = dynamic(() => import("./CertificationCard"), {
  ssr: false,
});

const Certifications = ({ certifications }) => {
  return (
    <div className="certifications-section py-16 flex justify-center">
      <Container maxWidth="xl">
        <div className="certifications-section-header">
          <div className="certifications-section-heading py-4 mb-4">
            <h2 className="font-heading font-semibold text-3xl md:text-4xl text-center">
              Certifications
            </h2>
          </div>
        </div>
        <div className="certifications grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications &&
            certifications?.length > 0 &&
            certifications.map((certification) => (
              <div
                className="certificate bg-white border-8 border-opacity-30 min-h-[400px] border-gray-600 p-4 rounded-md"
                key={certification._id}
              >
                <CertificationCard
                  file={getFileUrlFromId(certification.certificate.asset._ref)}
                />
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Certifications;
