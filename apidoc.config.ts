import { promisify } from 'util';
import { exec } from 'child_process';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
dotenv.config();
const asyncExec = promisify(exec);

async function jsonGenerator() {
  const jsonConfig = {
    name: `apidoc-template API`,
    version: '0.1.0',
    description: `apidoc-template API`,
    title: `apidoc-template`,
    url : `http://${process.env.SERVER_IP}:${process.env.PORT || 3000}`,
    sampleUrl: `http://${process.env.SERVER_IP}:${process.env.PORT || 3000}`
  }

  if (process.env.NODE_ENV === 'development') {
    jsonConfig.url = `http://localhost:${process.env.PORT || 3000}`;
    jsonConfig.sampleUrl = `http://localhost:${process.env.PORT || 3000}`;
  }
  fs.writeFileSync(`${process.cwd()}/apidoc.json`, JSON.stringify(jsonConfig));
}

export async function apidocGenerator() {
  await jsonGenerator();
  const localPath = process.cwd();
  await asyncExec(`rm -rf ${localPath}/public/apidoc/*.*`);
  await asyncExec(`${localPath}/node_modules/apidoc/bin/apidoc -i ${localPath}/src/routes -o ${localPath}/public/apidoc`);
}
