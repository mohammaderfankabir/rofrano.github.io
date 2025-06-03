import { defineField, defineType } from "sanity";

export default defineType({
  name: "site",
  title: "Site",
  type: "document",
  fields: [
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Short summary of the homepage",
      initialValue: "John Rofrano’s tutorials, blogs, and ideas.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Homepage title",
      initialValue: "John Rofrano",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      description: "Short text above the headline to give context",
      initialValue: "DevOps Champion, Musician, Educator",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "Main headline of the homepage hero section",
      initialValue: "John Rofrano",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subheadline",
      title: "Subheadline",
      type: "text",
      description: "Short paragraph that supports or expands on the headline",
      initialValue:
        "The transformation to DevOps is a journey, and sometimes, you don’t know what’s over the next hill, but changing corporate culture is never easy.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Hero Image",
      type: "image",
      description:
        "A hero image is a web design term used to describe the full-screen video, photo, illustration, or banner that welcomes visitors to a webpage.",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility",
          initialValue: "John Rofrano playing piano",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: "grid",
      title: "Grid",
      type: "array",
      description: "Masonry grid",
      of: [{ type: "reference", to: { type: "post" } }],
      validation: (Rule) => Rule.required().min(4).max(4),
    }),
    defineField({
      name: "postsLabel",
      title: "Posts Section Label",
      type: "string",
      description:
        "Label or short text displayed above the posts section title",
      initialValue: "TIMELINE",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "postsTitle",
      title: "Posts Section Title",
      type: "string",
      description: "Main title displayed for the posts section",
      initialValue: "Ideas, Insights, and Experience",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "postDescription",
      title: "Post Description",
      type: "text",
      description:
        "Introductory text displayed above the posts on the homepage.",
      initialValue:
        "Some posts stand out—whether insightful, practical or just worth sharing again. These are a few of my favorites.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      description: "Collection cards",
      of: [{ type: "reference", to: { type: "post" } }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
