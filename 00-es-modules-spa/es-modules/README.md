```markdown
# 📦 Node.js Module Systems: CommonJS vs. ES Modules

## 🎯 Objective

Understand the difference between **CommonJS (CJS)** and **ECMAScript Modules (ESM)** in Node.js. Learn how to create and use modules with both systems, and identify when to use each.

---

## 🧠 What You'll Learn

- What modules are in Node.js
- How to export and import using CommonJS (`require` / `module.exports`)
- How to export and import using ES Modules (`import` / `export`)
- The key differences between the two systems
- Compatibility issues and how to configure ESM in Node.js

---

## 🗂️ Project Structure
```

es-modules-assignment/
│
├── commonjs/
│ ├── math.js
│ └── index.js
│
├── esm/
│ ├── math.mjs
│ └── index.mjs
│
└── README.md

````

---

## 📘 Part 1: CommonJS (CJS)

CommonJS is the **default module system** in Node.js (prior to ES Modules support).

### `math.js`

```js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Export the functions
module.exports = {
  add,
  subtract,
};
````

### `index.js`

```js
const math = require("./math");

console.log("CommonJS:");
console.log("5 + 3 =", math.add(5, 3));
console.log("5 - 3 =", math.subtract(5, 3));
```

### ✅ Try it out:

```bash
cd commonjs
node index.js
```

---

## 📗 Part 2: ECMAScript Modules (ESM)

ES Modules use `import`/`export` syntax and are supported in Node.js via `.mjs` files or `"type": "module"` in `package.json`.

### `math.mjs`

```js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

### `index.mjs`

```js
import { add, subtract } from "./math.mjs";

console.log("ES Modules:");
console.log("10 + 7 =", add(10, 7));
console.log("10 - 7 =", subtract(10, 7));
```

### ✅ Try it out:

```bash
cd esm
node index.mjs
```

> ⚠️ Make sure you're using Node.js 14+ for ES Module support

---

## 📊 Key Differences

| Feature                  | CommonJS (`require`) | ES Modules (`import`)                     |
| ------------------------ | -------------------- | ----------------------------------------- |
| File Extension           | `.js`                | `.mjs` or `.js` (with `"type": "module"`) |
| Synchronous loading      | ✅ Yes               | ❌ No (asynchronous)                      |
| Can be used in browsers? | ❌ No                | ✅ Yes (modern browsers only)             |
| Default in Node.js?      | ✅ Yes               | 🚫 No (must configure)                    |

---

## 💻 Exercise

1. Create a new function `multiply(a, b)` in both `math.js` and `math.mjs`.
2. Add a call to that function in each `index` file.
3. Try mixing module systems (e.g., using `require()` to load an ES Module). What happens?

---

## 🚀 Challenge

Create a new folder called `calculator` and implement a small calculator app using ES Modules. It should:

- Ask the user for input using `readline`
- Let the user pick an operation: add, subtract, multiply, divide
- Output the result
- Organize each operation in its own file and use `import` to load them

---

## 🔁 Convert CommonJS to ESM

Try converting your `commonjs` code into an ESM project by:

1. Renaming files to `.mjs`
2. Replacing `require` with `import`
3. Replacing `module.exports` with `export`

Don't forget to run:

```bash
node --experimental-modules yourfile.mjs
```

Or add to `package.json`:

```json
"type": "module"
```

---

## 📚 References

- [Node.js Modules Documentation](https://nodejs.org/api/modules.html)
- [Node.js ECMAScript Modules Guide](https://nodejs.org/api/esm.html)

---

```

```
