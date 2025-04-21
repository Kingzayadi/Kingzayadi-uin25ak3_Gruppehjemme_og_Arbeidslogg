export default {
    name: "medlemmer",
    title: "Gruppemedlem",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Navn",
        type: "string",
      },
      {
        name: "email",
        title: "E-post",
        type: "string",
      },
      {
        name: "image",
        title: "Bilde",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "interests",
        title: "Interesser",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "bio",
        title: "Biografi",
        type: "text",
      },
      {
        name: "log",
        title: "Logg",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "date",
                title: "Dato",
                type: "datetime",
              },
              {
                name: "oppgave",
                title: "Arbeidsoppgave",
                type: "string",
              },
            ],
          },
        ],
      },
    ],
  };
  