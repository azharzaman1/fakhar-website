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
      name: "certificate",
      title: "Certificate",
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
