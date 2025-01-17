#! /usr/bin/env node

import { createSpinner } from "nanospinner";
import colors from "colors";
import util from "util";
import boxen from "boxen";
import link from "terminal-link";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function printSkill(languages, header) {
  const availableColors = shuffle(["yellow", "red", "blue", "magenta"]);

  let output = `${header}`.green + " - ";
  languages.forEach((language, index) => {
    const randomColor =
      availableColors[Math.floor(Math.random() * availableColors.length)];
    output += language[randomColor];
    if (index !== languages.length - 1) {
      output += ", ";
    }
  });

  console.log(output);
}
async function main() {
  console.log(
    `
( ͡° ͜ʖ ͡°) 
    
    

██╗░░██╗██╗  ████████╗██╗░░██╗███████╗██████╗░███████╗ ██╗██╗
██║░░██║██║  ╚══██╔══╝██║░░██║██╔════╝██╔══██╗██╔════╝ ██║██║
███████║██║  ░░░██║░░░███████║█████╗░░██████╔╝█████╗░░ ██║██║
██╔══██║██║  ░░░██║░░░██╔══██║██╔══╝░░██╔══██╗██╔══╝░░ ╚═╝╚═╝
██║░░██║██║  ░░░██║░░░██║░░██║███████╗██║░░██║███████╗ ██╗██╗
╚═╝░░╚═╝╚═╝  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚══════╝ ╚═╝╚═╝`.red
  );

  console.log();
  const spinner = createSpinner("Loading Kartik's details").start();

  async function spinnerStart() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  await spinnerStart();

  spinner.success();

  console.log(
    `
    
█▀█ █▀▀ █▀█ █▀ █▀█ █▄░█ ▄▀█ █░░   █▀▄ █▀▀ ▀█▀ ▄▀█ █ █░░ █▀
█▀▀ ██▄ █▀▄ ▄█ █▄█ █░▀█ █▀█ █▄▄   █▄▀ ██▄ ░█░ █▀█ █ █▄▄ ▄█`.yellow
  );

  console.log();

  const githubLink = link(
    "should check it -> ",
    "https://github.com/kartikkpawar"
  );
  const websiteLInk = link("Coolest thing -> ", "https://kartikpawar.dev");
  console.log(`NAME    `.green + " - " + "Kartik Pawar".cyan);
  console.log(
    `STATUS  `.green + " - " + "Software Engineer | Frontend Developer".cyan
  );
  console.log(`GITHUB  `.green + " - " + `${githubLink}`.cyan);
  console.log(`WEBSITE `.green + " - " + `${websiteLInk}`.cyan);

  console.log();

  console.log(
    `
    
█░░ ▄▀█ █▄░█ █▀▀ █░█ ▄▀█ █▀▀ █▀▀ █▀
█▄▄ █▀█ █░▀█ █▄█ █▄█ █▀█ █▄█ ██▄ ▄█`.blue
  );

  console.log();
  printSkill(["TypeScript", "JavaScript", "Golang"], "LANGUAGES   ");
  printSkill(["React", "NextJs"], "FRAMEWORKS  ");
  printSkill(["Express", "Nodejs", "WebSocket", "Prisma"], "TECHNOLOGIES");
  printSkill(["MongoDb", "PostgresSQL"], "DATABASES   ");
  printSkill(["Docker", "AWS"], "DEVOPS      ");
  printSkill(["GIT", "Github"], "Tools       ");

  console.log();
}

main();
