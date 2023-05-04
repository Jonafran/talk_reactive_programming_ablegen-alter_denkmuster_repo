import { candidates } from '../../../../util';

export const result = candidates.filter(
  (candidate) => candidate.age > 18 && candidate.size > 175
);
