import * as localEnv from 'dotenv';
import { Env } from './env';

localEnv.config();

export interface Config {
  port: number;
  env: string;
}

export function getConfig(): Config {
  return {
    port: Env.asInteger('PORT'),
    env: Env.asString('NODE_ENV', 'developement'),
  };
}
