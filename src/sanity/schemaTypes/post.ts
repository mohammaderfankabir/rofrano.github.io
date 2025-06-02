import { defineField, defineType } from "sanity";
import PriorityInput from "../components/PriorityInput";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",

  fields: [
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Short summary of the post",
      validation: (Rule) => Rule.required().max(75),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Post title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "A Slug is the unique identifying part of a web address, typically at the end of the URL.",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      description: "Featured image for the post",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      description: "Categories assigned to this post",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "lastModified",
      title: "Last Modified",
      type: "datetime",
      hidden: true,
      initialValue: () => new Date().toISOString().split(".")[0] + "Z",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "changeFrequency",
      title: "Change Frequency",
      type: "string",
      hidden: true,
      initialValue: "monthly",
      options: {
        list: [
          { title: "Always", value: "always" },
          { title: "Hourly", value: "hourly" },
          { title: "Daily", value: "daily" },
          { title: "Weekly", value: "weekly" },
          { title: "Monthly", value: "monthly" },
          { title: "Yearly", value: "yearly" },
          { title: "Never", value: "never" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "priority",
      title: "Priority",
      type: "number",
      hidden: true,
      initialValue: 0.5,
      components: {
        input: PriorityInput,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      description: "Main content of the post",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
