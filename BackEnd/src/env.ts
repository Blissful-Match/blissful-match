import dotenv from 'dotenv';
import commandLineArgs from 'command-line-args';
import { join } from 'path';
import { get, unset } from 'lodash';

let cliArgs = {};

// Make sure command line arguments have same name as maintained in .env files
cliArgs = commandLineArgs([
  {
    name: 'NODE_ENV',
    alias: 'e',
    defaultValue: 'dev',
    type: String
  },
  {
    name: 'APP.PORT',
    alias: 'p',
    type: Number
  },
  {
    name: 'REPOSITORY.DEFAULT',
    alias: 'r',
    type: String
  }
],
  { partial: true }
);

let result;
if (process.env.NODE_ENV === 'prod'){
  result = dotenv.config({
    path: join(__dirname, '..' ,`prod.env`)
  });
  if(result.error) {
    defaultConfigSetup();
  }
} else {
  defaultConfigSetup();
  // Overwrite Environment arguments with CLI arguments if provided
  unset(cliArgs, '_unknown');
  Object.keys(cliArgs).forEach((e) => {
    process.env[e] = get(cliArgs, e);
  });
}

if (result?.error) { throw result.error; }

function defaultConfigSetup() {
  result = dotenv.config({
    path: join(__dirname, '..', 'env', `${get(cliArgs, 'NODE_ENV')}.env`)
  });
}
