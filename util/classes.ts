import { Observable } from 'rxjs';

export class Timer {
  start$ = new Observable(
    (observer) =>
      (document.getElementById('start').onclick = function () {
        observer.next();
      })
  );

  pause$ = new Observable(
    (observer) =>
      (document.getElementById('pause').onclick = function () {
        observer.next();
      })
  );

  reset$ = new Observable(
    (observer) =>
      (document.getElementById('reset').onclick = function () {
        observer.next();
      })
  );

  renderCounter(value: number): void {
    console.log(value);
    document.getElementById('counter').innerText = '' + value;
  }
}
