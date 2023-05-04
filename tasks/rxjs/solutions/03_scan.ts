import { scan } from 'rxjs';
import { result as result02 } from './02_map';

export const result = result02.pipe(scan((acc, curr) => acc + curr));
