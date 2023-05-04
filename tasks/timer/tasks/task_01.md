# Task 01 - Start and Pause

### Implementiere einen Timer mit Start und Pause Events

##### Kriteria

- Starte den Timer
- Pausiere den Timer

##### Hinweise

- bei Start, darf der Timer wieder auf 0 zurück gehen

##### Utility

###### class Timer

```
start$: Observable<Event>
pause$: Observable<Event>
reset$: Observable<Event>
renderCounter: (value: number) => void
```

###### renderTimer: () => void
