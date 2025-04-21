import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "xls5jn3p",         
  dataset: "production",         
  apiVersion: "2025-04-20",      
  useCdn: false,                 
  withCredentials: true         
});

export default client;
