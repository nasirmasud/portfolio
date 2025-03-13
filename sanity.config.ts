import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemas } from "./sanity/schemas";

const config = defineConfig({
  projectId: "39kfav96",
  dataset: "production",
  title: "Personal Portfolio",
  apiVersion: "2023-03-13",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});

export default config;
