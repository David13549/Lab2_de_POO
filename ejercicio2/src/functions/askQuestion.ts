import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process'

const rl = readline.createInterface({ input, output });

export function askQuestion(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}