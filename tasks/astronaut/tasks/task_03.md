# Task 3 - Sortieren von Jung nach Alt

### Die Kandidaten aus Task 2 werden von Jung nach Alt sortiert

##### Kriterien

- Sortierung von Jung nach Alt

##### Utility

```
Interface   -> ICandidate
Intercace   -> IPrivacyCandidate
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

###### IPrivacyCandidate[]

```
firstName: string
lastName: string
```

##### Ziel

> `renderAstronaut` erhält eine Liste von Kandidaten, die den Kriterien entsprechen
