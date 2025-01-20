export default {
    name: "review",
    type: "document",
    title: "Review",
    fields: [
      { name: "product", type: "reference", to: [{ type: "product" }], title: "Product" },
      { name: "customer", type: "reference", to: [{ type: "customer" }], title: "Customer" },
      { name: "rating", type: "number", title: "Rating", validation: (Rule) => Rule.required().min(1).max(5) },
      { name: "comment", type: "text", title: "Comment" },
      { name: "createdAt", type: "datetime", title: "Created At" },
      { name: "updatedAt", type: "datetime", title: "Updated At" },
    ],
  };
  