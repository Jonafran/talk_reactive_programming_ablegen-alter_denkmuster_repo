# Task 03 - Reset

##### Kriteria

- Bei Reset Event soll der Timer auf 0 gestellt werden
- Bei Start (nach Reset) soll der Timer von 0 weg laufen

##### Utility

###### class Timer

```
start$: Observable<Event>
pause$: Observable<Event>
reset$: Observable<Event>
renderCounter: (value: number) => void
```

###### renderTimer: () => void
