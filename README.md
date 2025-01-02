# Unexpected State Updates in React's useEffect Hook

This repository demonstrates a common, yet subtle, bug in React applications involving the `useEffect` hook and asynchronous state updates with `useState`.

## The Problem

The `bug.js` file contains a component that attempts to increment a counter twice within a single `useEffect` call. Due to the asynchronous nature of state updates in React, the second `setCount` call overwrites the first, resulting in an unexpected final count of 1 instead of 2.

## The Solution

The `bugSolution.js` file showcases the correct approach.  We consolidate the state updates using functional updates and `prevCount` to ensure that state updates are applied correctly.