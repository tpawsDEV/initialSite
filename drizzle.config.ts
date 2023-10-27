// drizzle.config.ts
import type { Config } from "drizzle-kit";
import env from "@/config/env";

export default {
  dbCredentials: {
    connectionString: env["DATABASE_URL"],
  },
  schema: "./src/server/db/schemas",
  out: "./drizzle/generated",
  driver: "mysql2",
} satisfies Config;
