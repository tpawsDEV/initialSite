import { cleanEnv, str } from "envalid";

export default cleanEnv(process.env, {
  DATABASE_URL: str(),
});
