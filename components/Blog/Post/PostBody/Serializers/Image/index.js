import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import { useNextSanityImage } from "next-sanity-image";
import { imageBuilder, sanityClient2 } from "@lib/sanity";
import Link from "../Link";

const ImageSerializer = ({ data, className }) => {
  const imageProps = useNextSanityImage(sanityClient2, data.asset);

  return (
    <div
      className={`post-body-img flex flex-col items-center mt-8 mb-8 max-w-full ${className}`}
    >
      {data.caption && (
        <span className="font-medium text-lg mt-4 mb-2">{data.caption}</span>
      )}
      <div
        className={`block max-w-[350px] sm:max-w-md md:max-w-xl lg:max-w-3xl`}
        style={{ width: imageProps.width }}
      >
        <Zoom>
          <Image
            {...imageProps}
            layout="responsive"
            alt={data.alt}
            sizes="(min-width: 1200px) 75vw,
              (min-width: 900px) 100vw,
              100vw"
          />
        </Zoom>
      </div>

      {data.copyright_owner_url && (
        <div className="post-body-img-source mt-4">
          <em className="font-open-sans text-text-dim">
            [Infographic Source: Awesome{" "}
            <Link href={data.copyright_source_url} preview={false} underline>
              {data.copyright_source}
            </Link>{" "}
            by{" "}
            <Link href={data.copyright_owner_url} preview={false} underline>
              {data.copyright_owner}
            </Link>
            ]
          </em>
        </div>
      )}
    </div>
  );
};

ImageSerializer.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
};

export default ImageSerializer;
