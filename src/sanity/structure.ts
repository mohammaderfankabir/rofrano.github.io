import { StructureResolver } from "sanity/structure";
import {
  EditIcon,
  HomeIcon,
  BookIcon,
  TagIcon,
  HeartIcon,
} from "@sanity/icons";

// Custom icon components using local PNGs
import { BobbyIcon } from "@/components/icons/BobbyIcon";
import { JohnIcon } from "@/components/icons/JohnIcon";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Homepage singleton
      S.listItem().title("Homepage").icon(HomeIcon).child(
        S.editor()
          .id("singleton-site") // changed from "site"
          .schemaType("site")
          .documentId("siteSettings") // ✅ fixed singleton ID
      ),

      // Memorial section with two singletons and custom icons
      S.listItem()
        .title("Memorial")
        .icon(HeartIcon)
        .child(
          S.list()
            .title("Memorial Entries")
            .items([
              S.listItem()
                .title("Bobby")
                .icon(BobbyIcon)
                .child(
                  S.editor()
                    .id("bobby")
                    .schemaType("page")
                    .title("Antoinette “Bobby” Rofrano")
                    .documentId("0ca11cee-c74d-497c-98c9-72daa83bc434")
                ),
              S.listItem()
                .title("John Rofrano Sr")
                .icon(JohnIcon)
                .child(
                  S.editor()
                    .id("johnrofranosr")
                    .title("John J. Rofrano Sr.")
                    .schemaType("page")
                    .documentId("65e89074-38f3-45f5-b19f-9dfa289e58e6")
                ),
            ])
        ),

      // Biography singleton
      S.listItem()
        .title("Biography")
        .icon(BookIcon)
        .child(
          S.editor()
            .id("authorsSettings")
            .schemaType("page")
            .documentId("9ca8b2c8-3869-45af-ab33-86e8b5065586")
        ),

      // Posts list
      S.listItem()
        .title("Posts")
        .schemaType("post")
        .icon(EditIcon)
        .child(S.documentTypeList("post").title("Posts")),

      S.divider(),

      // Category list
      S.listItem()
        .title("Categories")
        .schemaType("category")
        .icon(TagIcon)
        .child(S.documentTypeList("category").title("Categories")),
    ]);
