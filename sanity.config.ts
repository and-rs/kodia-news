import { dataset, projectId } from "@/sanity/environment"
import { schema } from "@/sanity/schema"
import { structure } from "@/sanity/structure"
import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

export default defineConfig({
  name: "default",
  title: "Kodia Test",
  plugins: [structureTool({ structure }), visionTool()],
  projectId,
  dataset,
  schema,
})
