import { Observable, NEVER, timer, merge } from 'rxjs';
import { mapTo, tap, switchMap } from 'rxjs/operators';
import { getStartEvent$ } from '../../../util/functions';

export const result = { a: 'Foo' };

getStartEvent$.subscribe(() => console.log('foo'));
