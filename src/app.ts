import { envs } from "./config";
import { Server } from "./presentation/server";

(() => {
  main();
})();

async function main() {
  //TODO: await db

  new Server({ port: envs.PORT }).start();
}
