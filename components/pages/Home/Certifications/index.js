import React from "react";
import Container from "../../../Generic/Layout/Container";

const Certifications = () => {
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
          <div className="certificate"></div>
        </div>
      </Container>
    </div>
  );
};

export default Certifications;
