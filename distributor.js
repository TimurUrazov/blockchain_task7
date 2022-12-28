const { ethers, utils } = require("ethers");
const fs = require("fs");

const args = require("minimist")(process.argv.slice(2));

function requireFlag(flag) {
  if (!args[flag]) {
    console.log(`Missing required flag: --${flag}`);
    process.exit(1);
  }
}

const requiredFlags = ["file", "tickets"];
requiredFlags.forEach(requireFlag);
if (!args.parameter) {
  args.parameter = "";
}

const file = fs.readFileSync(args.file, { encoding: "utf8", flag: "r" });
const lines = file.split("\n");
const numbers = lines.map((line) => {
    const hash = ethers.utils.keccak256(utils.toUtf8Bytes(line + args.parameter));
        return parseInt(hash, 16) % args.tickets + 1;
    }
);

fs.writeFileSync("./distribution.txt", lines.map((line, index) => `${line}: ${numbers[index]}`).join("\n"));
