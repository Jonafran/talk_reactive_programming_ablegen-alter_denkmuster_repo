import { map } from 'rxjs';
import { result as result01 } from './01_observable';

export const result = result01.pipe(map((value) => value * 10));
