import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

// Valores padrão para desenvolvimento sem as chaves
const SANITY_PROJECT_ID = projectId || "lg41lcfm";
const SANITY_DATASET = dataset || "production";

export const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: apiVersion || "2025-03-01",
  useCdn: false,
  perspective: "drafts",
});
