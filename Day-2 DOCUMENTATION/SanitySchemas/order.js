export default {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
      { name: "orderId", type: "string", title: "Order ID" },
      { name: "customer", type: "reference", to: [{ type: "customer" }], title: "Customer" },
      { name: "orderDate", type: "datetime", title: "Order Date" },
      {
        name: "status",
        type: "string",
        title: "Status",
        options: { list: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"] },
      },
      {
        name: "items",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "product", type: "reference", to: [{ type: "product" }] },
              { name: "name", type: "string", title: "Product Name" },
              { name: "price", type: "number", title: "Price" },
              { name: "quantity", type: "number", title: "Quantity" },
            ],
          },
        ],
        title: "Items",
      },
      {
        name: "shippingAddress",
        type: "object",
        fields: [
          { name: "street", type: "string", title: "Street" },
          { name: "city", type: "string", title: "City" },
          { name: "state", type: "string", title: "State" },
          { name: "zipCode", type: "string", title: "Zip Code" },
          { name: "country", type: "string", title: "Country" },
        ],
        title: "Shipping Address",
      },
      { name: "paymentDetails", type: "string", title: "Payment Details" },
      { name: "totalAmount", type: "number", title: "Total Amount" },
      { name: "createdAt", type: "datetime", title: "Created At" },
      { name: "updatedAt", type: "datetime", title: "Updated At" },
    ],
  };
  