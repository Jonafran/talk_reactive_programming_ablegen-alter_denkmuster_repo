import { map, Observable, switchMap } from 'rxjs';
import { result as result03 } from './03_scan';

const newObservable: Observable<number> = new Observable((observer) => {
  setTimeout(() => observer.next(42), 2000);
});

export const result = result03.pipe(
  switchMap((result03Value) =>
    newObservable.pipe(
      map((newObservableValue) => newObservableValue * result03Value)
    )
  )
);
