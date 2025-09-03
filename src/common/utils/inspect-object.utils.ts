import { inspect } from 'node:util';

export const inspectObject = (obj: any, depth?: number) => {
  return inspect(obj, { depth: depth ?? null, colors: true });
};
