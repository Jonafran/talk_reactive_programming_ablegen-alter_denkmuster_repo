import { fromEvent, Observable } from 'rxjs';

export class Timer {
  start$ = fromEvent(document.getElementById('start'), 'click');

  pause$ = fromEvent(document.getElementById('pause'), 'click');

  reset$ = fromEvent(document.getElementById('reset'), 'click');

  renderCounter(value: number): void {
    document.getElementById('counter').innerText = '' + value;
  }
}
