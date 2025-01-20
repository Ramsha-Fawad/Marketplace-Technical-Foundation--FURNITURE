export default {
    name: "customer",
    type: "document",
    title: "Customer",
    fields: [
      { name: "name", type: "string", title: "Full Name", validation: (Rule) => Rule.required() },
      { name: "email", type: "string", title: "Email", validation: (Rule) => Rule.required().email() },
      { name: "passwordHash", type: "string", title: "Password Hash", hidden: true },
      {
        name: "address",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "street", type: "string", title: "Street" },
              { name: "city", type: "string", title: "City" },
              { name: "state", type: "string", title: "State" },
              { name: "zipCode", type: "string", title: "Zip Code" },
              { name: "country", type: "string", title: "Country" },
            ],
          },
        ],
        title: "Addresses",
      },
      { name: "phone", type: "string", title: "Phone Number" },
      { name: "wishlist", type: "array", of: [{ type: "reference", to: [{ type: "product" }] }], title: "Wishlist" },
      { name: "cart", type: "array", of: [{ type: "object", fields: [{ name: "productId", type: "reference", to: [{ type: "product" }] }, { name: "quantity", type: "number" }] }], title: "Cart" },
      { name: "createdAt", type: "datetime", title: "Created At" },
      { name: "updatedAt", type: "datetime", title: "Updated At" },
    ],
  };
  