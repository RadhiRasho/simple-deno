import { arch, homedir, uptime } from "node:os";

console.log("Current architecture is: ", arch());
console.log("Home directory is: ", homedir());
console.log("Uptime: ", uptime() / 60 / 60 / 24);
