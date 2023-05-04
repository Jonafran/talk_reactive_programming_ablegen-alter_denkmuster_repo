import { NEVER, timer, merge, scan, startWith, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Timer } from '../../../util/classes';

const counter = new Timer();

export const result: Observable<number> = counter.reset$.pipe(
  map(() => 0),
  startWith(0),
  switchMap(() =>
    merge(
      counter.start$.pipe(map(() => true)),
      counter.pause$.pipe(map(() => false))
    ).pipe(
      startWith(false),
      switchMap((isTicking) => (isTicking ? timer(0, 100) : NEVER)),
      scan((acc) => ++acc),
      startWith(0),
      tap(counter.renderCounter)
    )
  )
);
