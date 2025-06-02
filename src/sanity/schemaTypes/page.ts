import { defineField, defineType } from "sanity";
import PriorityInput from "../components/PriorityInput";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",

  fields: [
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Short summary of the page",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Page title",
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
      name: "lastModified",
      title: "Last Modified",
      type: "datetime",
      initialValue: () => new Date().toISOString().split(".")[0] + "Z",
      hidden: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "changeFrequency",
      title: "Change Frequency",
      type: "string",
      initialValue: "monthly",
      hidden: true,
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
      initialValue: 0.5,
      hidden: true,
      components: {
        input: PriorityInput,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      description: "Main content of the page",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
