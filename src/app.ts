import { yarg } from "./config/plugins/yars.plugin";
import { ServerApp } from "./presentation/server-app";

(async () => {
  await main();
})();

async function main() {
  const { b: base, l: limit, s: showTable, n: name, d: destination } = yarg;

  ServerApp.run({
    base,
    limit,
    showTable,
    nameFile: name,
    destination,
  });
}
