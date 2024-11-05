const memoryInfo = Deno.systemMemoryInfo();

console.log("System Memory Info:");
console.log(`Total Memory: ${memoryInfo.total / 1024 / 1024} MB`);
console.log(`Free Memory: ${memoryInfo.free / 1024 / 1024} MB`);
console.log(`Available Memory: ${memoryInfo.available / 1024 / 1024} MB`);
console.log(`Buffers: ${memoryInfo.buffers / 1024 / 1024} MB`);
console.log(`Cached: ${memoryInfo.cached / 1024 / 1024} MB`);
console.log(`Swap Total: ${memoryInfo.swapTotal / 1024 / 1024} MB`);
console.log(`Swap Free: ${memoryInfo.swapFree / 1024 / 1024} MB \n`);

const loadAvg = Deno.loadavg();

console.log("Load Averages:");
console.log(`1 Minute Load Average: ${loadAvg[0]}`);
console.log(`5 Minute Load Average: ${loadAvg[1]}`);
console.log(`15 Minute Load Average: ${loadAvg[2]}`);
