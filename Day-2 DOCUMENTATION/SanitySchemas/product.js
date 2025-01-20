export default {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
      { name: "name", type: "string", title: "Name", validation: (Rule) => Rule.required() },
      { name: "description", type: "text", title: "Description" },
      { name: "price", type: "number", title: "Price", validation: (Rule) => Rule.required().min(0) },
      { name: "category", type: "reference", to: [{ type: "category" }], title: "Category" },
      { name: "stock", type: "number", title: "Stock", validation: (Rule) => Rule.min(0) },
      {
        name: "dimensions",
        type: "object",
        title: "Dimensions",
        fields: [
          { name: "width", type: "number", title: "Width (cm)" },
          { name: "height", type: "number", title: "Height (cm)" },
          { name: "depth", type: "number", title: "Depth (cm)" },
        ],
      },
      { name: "materials", type: "array", of: [{ type: "string" }], title: "Materials" },
      { name: "colors", type: "array", of: [{ type: "string" }], title: "Colors" },
      { name: "images", type: "array", of: [{ type: "image" }], title: "Images" },
      { name: "rating", type: "number", title: "Rating", validation: (Rule) => Rule.min(0).max(5) },
      { name: "createdAt", type: "datetime", title: "Created At" },
      { name: "updatedAt", type: "datetime", title: "Updated At" },
    ],
  };
  