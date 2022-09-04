export default {
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "institute",
      title: "Institute",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "priority",
      title: "Priority",
      type: "string",
      placeholder: "For filtering stuff",
    },
    {
      name: "issuedDate",
      title: "Issued Date",
      type: "date",
    },
    {
      type: "image",
      name: "certificate_img",
      title: "Certificate(JPG/JPEG)",
      fields: [
        {
          title: "Alt",
          name: "alt",
          type: "string",
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true,
          },
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: "certificate_pdf",
      title: "Certificate(PDF)",
      type: "file",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
