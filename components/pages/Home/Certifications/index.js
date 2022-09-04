import React from "react";
import Container from "../../../Generic/Layout/Container";
import CertificationCard from "./CertificationCard";

const Certifications = ({ certifications }) => {
  return (
    <div
      className="certifications-section py-16 flex justify-center"
      id="certifications-section"
    >
      <Container maxWidth="xl">
        <div className="certifications-section-header">
          <div className="certifications-section-heading py-4 mb-8">
            <h2 className="font-heading-1 text-3xl md:text-5xl text-center">
              Certifications
            </h2>
          </div>
        </div>
        <div className="certifications grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications &&
            certifications?.length > 0 &&
            certifications.map((certification) => (
              <CertificationCard
                certification={certification}
                key={certification._id}
              />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Certifications;
