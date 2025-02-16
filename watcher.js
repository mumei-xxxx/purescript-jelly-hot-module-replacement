import chokidar from "chokidar";
import { exec } from "child_process";

// const watcher = chokidar.watch("./test/Test/Main.purs", {
//   persistent: true,
// });
const watcher = chokidar.watch("./src/Main.purs", {
  persistent: true,
});

watcher.on("change", (path) => {
  console.log(`File ${path} has been changed`);
  exec("npm run build:spago", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
});
