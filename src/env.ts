import { z } from "zod";

const envShcema = z.object({
  MODE: z.enum(['production', 'development', 'test']),
  VITE_API_URL: z.string(),
  VITE_ENABLE_API_DELAY: z.string().transform(value => value === 'true')
})

export const env = envShcema.parse(import.meta.env);