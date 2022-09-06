import React from "react";
import PortableText from "react-portable-text";
import PropTypes from "prop-types";
import { serializers } from "./Serializers";

const PostBody = ({ content }) => {
  return (
    <article className="post-body pb-20 overflow-hidden">
      <PortableText
        content={content}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        serializers={serializers}
      />
    </article>
  );
};

PostBody.propTypes = {
  content: PropTypes.object,
};

export default PostBody;
