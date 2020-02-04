import chalk from 'chalk';

async function fn() {
  console.log(chalk.blue('Hello world!'));
}

async function main() {
  await fn();
}

main().catch(err => console.error(err));

