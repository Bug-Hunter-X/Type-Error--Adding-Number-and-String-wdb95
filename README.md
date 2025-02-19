# Type Error in TypeScript: Adding Number and String

This repository demonstrates a common type error in TypeScript that occurs when attempting to perform an arithmetic operation (addition in this case) on incompatible types: a number and a string.

## The Bug

The TypeScript code in `bug.ts` defines a function `add` that is explicitly typed to accept two numbers and return a number.  However, the function is then called with a string as the second argument. This mismatch of types results in a compile-time error.

## The Solution

The solution, found in `bugSolution.ts`, shows how to correctly handle this scenario.  Explicit type checking and type assertion are used to ensure that the correct types are used in the addition operation.