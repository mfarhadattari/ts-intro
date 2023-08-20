# TypeScript Introduction

TypeScript is a strongly typed programming language that builds on JavaScript.

## TypeScript Installation:

```
1. Install Node.js
2. Install TypeScript: npm i -g typescript
```

## Commands:

```
tsc fileName.ts
tsc --init
tsc -w
```

## Type Assignment

When creating a variable, there are two main ways TypeScript assigns a type:

```
- Explicit : Writing out the type
- Implicit : typeScript guess based on assignment
```

## Explicit

```typescript
let name: string;
let age: number;
let isMarried: boolean;
```

## Implicit

```typescript
let name = "Mohammad Farhad";
let age = 19;
let isMarried = false;
```

## Data Type:

```
- boolean
- string
- number
- array
- tuples
- object
- enum
- bigNumber
- symbol
- any
- unknown
- never
- undefined
- null
```

## Type Aliases & Interfaces

- Type Aliases allow defining types with a custom name which call an alias.

```typeScript
type Year = number
type CarObj = {
    year: Year,
    type: string,
    model: string
}

const car: CarObj = {
    year: 2015,
    type: "Toyato",
    model: "Corolla"
}
```

- Interfaces allow defining object types with a custom name.

```typeScript
interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
    hight: 20,
    width: 10
}

// extending interface
interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};
```

## Union type

- Explicit multiple data types

```typeScript
let id : string | number;
id = 5
id = "asd1"
```

## Casting

- Casting with as

```typescript
let age: unknown = 19;
console.log(age as string);
```

- casting with <>

```typeScript
let usename: unknown = "Mohammad Farhad";
console.log(<string>usename);
```
