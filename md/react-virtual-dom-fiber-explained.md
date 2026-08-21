# React Virtual DOM & Fiber — Explained in Simple Words

*Based on: [react-fiber-architecture by acdlite](https://github.com/acdlite/react-fiber-architecture)*

---

## 1. The Problem React Solves

Imagine you have a webpage. Every time something changes (like clicking a button), the browser has to update the screen. Directly touching the real DOM (the browser's page structure) again and again is **slow**, because the browser has to recalculate layout, styles, and repaint the screen each time.

React's solution: don't touch the real DOM directly for every small change. Instead, do the thinking in memory first, then update the real DOM only where needed.

---

## 2. What is the Virtual DOM?

Think of the **Virtual DOM** as a rough draft of your webpage, kept in the computer's memory (not shown on screen).

- When your app first loads, React builds this draft (a tree of JavaScript objects describing your UI).
- When something changes (like `setState`), React builds a **new** draft.
- React then **compares** the old draft with the new draft to figure out exactly what changed. This comparison process is called **reconciliation**.
- Finally, React updates only the changed parts of the *real* DOM — not the whole page.

**Simple analogy:** Instead of repainting your whole house every time one wall gets a scratch, you check what's scratched, then repaint only that spot.

> Fun fact: the term "Virtual DOM" is a bit misleading, because React doesn't only render to the browser DOM — it also renders to mobile apps (React Native), so it's really a general "virtual UI tree."

---

## 3. What is Reconciliation?

Reconciliation is just the **diffing algorithm** — the rules React uses to compare the old tree and new tree efficiently, instead of comparing every single node (which would be very slow).

React uses two simple assumptions to make this fast:
1. If a component's **type** changes (e.g., a `<div>` becomes a `<span>`), React throws away the old part and rebuilds it from scratch — no fancy comparison.
2. When rendering **lists**, React uses `key` props to know which item is which, so it doesn't get confused when items are reordered.

---

## 4. So What is "Fiber"?

This is where it gets interesting. The Virtual DOM idea alone has one weakness: **once React starts updating the UI, it can't stop halfway.** If you have a huge update (like rendering a big list), it can freeze the browser for a moment — causing janky, laggy animations.

**Fiber** (introduced in React 16) is a rewrite of React's internal engine to fix this. The core idea:

- Normally, JavaScript uses the **call stack** to keep track of what function is running. But the call stack can't be paused — once it starts, it runs to completion.
- Fiber basically reinvents this process manually. Each **fiber** is like a "virtual stack frame" — a small unit of work (roughly, one component) that React can:
  - **Pause** and come back to later
  - **Reuse** if nothing changed
  - **Abort** if it's no longer needed
  - Give a **priority** to (urgent things like typing go first; less urgent things like loading a big list can wait)

**Simple analogy:** Instead of reading a book cover-to-cover without stopping, Fiber lets React use bookmarks — it can pause reading, do something urgent, then come back to exactly where it left off.

---

## 5. How It Actually Works (Two Phases)

Modern React splits every update into two phases:

| Phase | What happens | Can it be paused? |
|---|---|---|
| **Render phase** | React builds the new "draft" tree and figures out what changed | ✅ Yes — interruptible |
| **Commit phase** | React actually applies the changes to the real DOM/screen | ❌ No — must finish in one go, so the screen never looks half-updated |

This split is exactly why Fiber can be smart about scheduling, but the user never sees a flickering, half-finished UI.

---

## 6. How This Is Actually Used Today (2026)

The original Fiber document (linked above) was written *before* Fiber shipped — it describes the plan. Since then, React has built a lot on top of it:

- **React 16–17**: Fiber becomes the core engine. Enables Error Boundaries and basic scheduling.
- **React 18**: "Concurrent React" ships — this is Fiber's scheduling powers finally exposed to developers:
  - `startTransition()` / `useTransition()` — mark an update as "not urgent" (e.g., filtering a big list), so React finishes urgent things (like typing in a search box) first.
  - `useDeferredValue()` — similar idea, delay showing a value until React has spare time.
  - Automatic batching — multiple state updates get grouped into one re-render automatically.
  - Improved **Suspense** — lets parts of the UI show a loading state while data/code is still loading, without blocking the rest of the page.
- **React 19**: Builds further on Fiber — adds Actions (handling async form submissions cleanly), and more Suspense improvements.
- **React 19.2**: Adds the `Activity` component, which can keep a part of the UI "alive" in memory (e.g., a background tab) without fully unmounting it, so switching back is instant.
- **React Compiler** (newer, optional tool): Works *alongside* Fiber. It automatically memoizes components at build time, so developers don't have to manually write `useMemo`/`useCallback` — this reduces the amount of work Fiber even has to reconsider on each render.

**Bottom line for today:** When people casually say "React uses a Virtual DOM," what's actually running under the hood is the **Fiber tree** — a linked list of fiber nodes (`child`, `sibling`, `return` pointers) that React walks through in small interruptible steps, prioritizing urgent updates, and only touching the real DOM in one clean, uninterruptible "commit" step at the end.

---

## 7. Quick Summary

- **Virtual DOM** = a lightweight in-memory copy of the UI, used to figure out the minimum changes needed.
- **Reconciliation** = the diffing algorithm that compares old vs. new virtual trees.
- **Fiber** = the internal engine (since React 16) that turns rendering work into small, pausable, prioritizable units — enabling smooth, non-blocking UIs.
- **Today**, Fiber powers everything modern in React: Concurrent rendering, Suspense, Transitions, and the newer React Compiler all sit on top of it.

You, as a developer, almost never touch Fiber directly — but every time you use `useTransition`, `Suspense`, or just notice that React feels smooth even during heavy updates, that's Fiber working behind the scenes.
