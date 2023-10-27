import {
    mysqlTable,
    timestamp,
    uniqueIndex,
    varchar,
    serial,
  } from "drizzle-orm/mysql-core";
  
  export const users = mysqlTable(
    "users",
    {
      id: serial("id").primaryKey(),
      name: varchar("name", { length: 100 }),
      phone: varchar("phone", { length: 20 }),
      clerkId: varchar("clerkId", { length: 100 }),
      createdAt: timestamp("createdAt").defaultNow().onUpdateNow(),
      updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow(),
    },
    (table) => ({
      clerkIdIdx: uniqueIndex("clerkId").on(table.clerkId),
    })
  );

  