import { envs } from "./config";
import { Server } from "./presentation/server";

(() => {
  main();
})();

async function main() {
  //TODO: await db
  // TODO: server init

  new Server({ port: envs.PORT }).start();
}
