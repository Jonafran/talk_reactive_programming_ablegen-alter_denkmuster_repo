import { Observable, scan } from 'rxjs';
/**
 * You have one Observable that emits multiple numbers
 *
 * Accumulate all previously emitted numbers whenever a newly emits
 * */

export const result = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(4);
  observer.next(5);
  observer.next(6);
  observer.next(7);
})
  .pipe(
    scan((accumulator: number, current: number) => accumulator + current, 0)
  )
  .subscribe(console.log);
