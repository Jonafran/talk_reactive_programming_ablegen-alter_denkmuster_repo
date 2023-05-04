import { NEVER, timer, merge, scan, tap, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Timer } from '../../../util/classes';

const counter = new Timer();

export const result: Observable<number> = merge(
  counter.start$.pipe(map(() => true)),
  counter.pause$.pipe(map(() => false))
).pipe(
  switchMap((isTicking) => (isTicking ? timer(0, 100) : NEVER)),
  scan((acc) => ++acc),
  tap(counter.renderCounter)
);
