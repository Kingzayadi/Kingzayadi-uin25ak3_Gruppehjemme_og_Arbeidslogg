import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "xls5jn3p",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-04-20",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
