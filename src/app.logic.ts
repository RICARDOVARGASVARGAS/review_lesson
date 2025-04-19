import fs from "fs";
import { yarg } from "./config/plugins/yars.plugin";

console.log(yarg);

let outputMessage = "";
const { b: base, l: limit, s: show } = yarg;

const headerMessage = `
===========================================
    Multiplication ${base}
===========================================\n
`;

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${i * base}\n`;
}

outputMessage = headerMessage + outputMessage;

const outputPath = `outputs/number-${base}`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/table-${base}.txt`, outputMessage);

show && console.log(outputMessage);
console.log("File created!");
