#!/usr/bin/env node
import { getName, even } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const name = getName();
console.log();
even(name);
