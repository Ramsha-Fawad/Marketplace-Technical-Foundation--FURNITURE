export default {
    name: "category",
    type: "document",
    title: "Category",
    fields: [
      { name: "name", type: "string", title: "Name", validation: (Rule) => Rule.required() },
      { name: "description", type: "text", title: "Description" },
      { name: "products", type: "array", of: [{ type: "reference", to: [{ type: "product" }] }], title: "Products" },
    ],
  };
  