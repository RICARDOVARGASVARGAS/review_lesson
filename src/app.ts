import { yarg } from "./config/plugins/yars.plugin";

// console.log(process.argv);
// console.log("!!!!!!!!!!!!!");
// console.log(yarg.b);

(async () => {
  await main();
})();

async function main() {
  console.log(yarg);
}
