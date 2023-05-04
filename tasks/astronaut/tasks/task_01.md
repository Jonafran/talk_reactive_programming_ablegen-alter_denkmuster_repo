# Task 3 - Kandidaten aussortieren

### Die Kandidaten werden nach Kriterien gefiltert

##### Kriterien

- Alter über 18
- Größe übersteigt 175

##### Utility

```
Interface   -> ICandidate
Variable    -> candidates: ICandidate[]
Funktion    -> renderAstronaut(result: Object)
```

##### Datenstruktur

###### ICandidate[]

```
firstName: string
lastName: string
age: number
size: number
isCapable: boolean
```

##### Ziel

> `renderAstronaut` erhält eine Liste von Kandidaten, die den Kriterien entsprechen
