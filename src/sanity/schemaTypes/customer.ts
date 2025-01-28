import { defineField, defineType } from "sanity";

export default defineType({
  name: "customer",
  type: "document",
  title: "Customer",
  fields: [
    defineField({
      name: "user",
      type: "object",
      title: "User Information",
      fields: [
        defineField({
          name: "name",
          type: "string",
          title: "Name",
          validation: (Rule) => Rule.required().min(2).warning("Name must be at least 2 characters."),
        }),
        defineField({
          name: "email",
          type: "string",
          title: "Email",
          validation: (Rule) => Rule.required().email().warning("Invalid email address."),
        }),
        defineField({
          name: "address",
          type: "string",
          title: "Address",
          validation: (Rule) => Rule.required().min(5).warning("Address must be at least 5 characters."),
        }),
        defineField({
          name: "phone",
          type: "string",
          title: "Phone",
          validation: (Rule) => Rule.required().min(10).warning("Phone number must be at least 10 characters."),
        }),
        defineField({
          name: "postalCode",
          type: "string",
          title: "Postal Code",
          validation: (Rule) => Rule.required().min(5).max(10).warning("Postal Code must be between 5 and 10 characters."),
        }),
        defineField({
          name: "city",
          type: "string",
          title: "City",
          validation: (Rule) => Rule.required().min(2).warning("City must be at least 2 characters."),
        }),
        defineField({
          name: "country",
          type: "string",
          title: "Country",
          validation: (Rule) => Rule.required().min(2).warning("Country must be at least 2 characters."),
        }),
      ],
    }),
        defineField({
        name: "createdAt",
        type: "datetime",
        title: "Created At",
        validation: (Rule) => Rule.required(),
        initialValue: () => new Date().toISOString(),
      })
  ],
})
    
