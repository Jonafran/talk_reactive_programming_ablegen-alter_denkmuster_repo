export function renderResult_Task_ImperativeVsDeclarative(
  result: unknown
): void {
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

export function renderResult_Task_ReactiveWalkthrough(result: unknown): void {
  document.getElementById('to_the_moon').onclick = function () {
    document.getElementById(
      'result_reactive_walkthrough_header'
    ).style.visibility = 'visible';
    document.getElementById('result_reactive_walkthrough').style.visibility =
      'visible';
    document.getElementById('result_reactive_walkthrough').textContent =
      JSON.stringify(result, undefined, 2);
  };
}

export function renderResult_Task_ReactiveTimer(): void {
  document.getElementById('to_the_moon').onclick = function () {
    document.getElementById('counter_container').style.visibility = 'visible';
  };
}
