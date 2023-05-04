import { Observable } from 'rxjs';

export function renderAstronaut(result: unknown): void {
  document.getElementById('to_the_moon').onclick = function () {
    document.getElementById(
      'result_imperative_vs_declarative_header'
    ).style.visibility = 'visible';
    document.getElementById(
      'result_imperative_vs_declarative'
    ).style.visibility = 'visible';
    document.getElementById('result_imperative_vs_declarative').textContent =
      JSON.stringify(result, undefined, 2);
  };
}

export function renderRxJS(result: Observable<number>): void {
  document.getElementById('to_the_moon').onclick = function () {
    document.getElementById(
      'result_reactive_walkthrough_header'
    ).style.visibility = 'visible';
    document.getElementById('result_reactive_walkthrough').style.visibility =
      'visible';
  };
  result.subscribe((value) => {
    document.getElementById('result_reactive_walkthrough').textContent =
      '' + value;
  });
}

export function renderTimer(result: unknown): void {
  document.getElementById('to_the_moon').onclick = function () {
    document.getElementById('counter_container').style.visibility = 'visible';
  };
}
