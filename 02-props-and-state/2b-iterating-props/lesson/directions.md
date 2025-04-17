# Iterating Through Props

## Why Iterate Through Props?

Most apps have some form of data in a list that needs to be displayed one after another. This data could be a list of products, a list of blog posts, a list of comments, or any other type of list. In React, you can pass this data as props to a component and then iterate through the props to display the data in a list format.

This is a common pattern in React, and there are several ways to iterate through props. In this lesson, we'll explore three different methods for doing so.

## Method 1: Creating An Array of Elements

Replace the contents of `src/App.jsx` with the following:

```jsx
import "./App.css";

const funFacts = [
  { id: 1, text: "A group of flamingos is called a 'flamboyance.'" },
  { id: 2, text: "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible." },
  { id: 3, text: "A day on Venus is longer than a year on Venus." }
];

function App() {
  const someElements = [];
  for (const fact of funFacts) {
    someElements.push(<p key={fact.id}>{fact.text}</p>);
  }

  return (
    <div>{someElements}</div>
  );
}
```

export default App;

## Method 2: Using `.map`

The last example was a map operation--create a new empty array, loop through the data, and for each element, push into the new array a transformed version of that element. In this case, we are transforming each fact object into a JSX element.

Instead of manually mapping over the array, we could, of course, use JavaScript's built-in `.map` array method.

### Step 1: Create the ProductList Component

Create a new component `ProductList.jsx` in the `src` folder:

```jsx
import React from 'react';

const products = [
  { id: 1, name: "Portal Gun", description: "A device used to travel between dimensions." },
  { id: 2, name: "Meeseeks Box", description: "A gadget that summons a helpful Meeseeks." },
  { id: 3, name: "Plumbus", description: "A household device with no clear purpose." }
];

function ProductList() {
  const productItems = products.map((product) => (
    <div key={product.id}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  ));

  return <div>{productItems}</div>;
}

export default ProductList;
```

### Step 2: Update the App Component to Use `ProductList`

Update `src/App.jsx` to use the new `ProductList` component:

```jsx
import "./App.css";
import ProductList from "./ProductList";

const funFacts = [
  { id: 1, text: "A group of flamingos is called a 'flamboyance.'" },
  { id: 2, text: "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible." },
  { id: 3, text: "A day on Venus is longer than a year on Venus." }
];

function App() {
  const someElements = [];
  for (const fact of funFacts) {
    someElements.push(<p key={fact.id}>{fact.text}</p>);
  }

  return (
    <div>
      {someElements}
      <ProductList />
    </div>
  )
}

export default App;
```

## Method 3: Using `.map` Inside the Return Statement

Since a `.map` is an expression, we can put it directly into the JSX. This approach uses a clear and concise component structure and is by far the most common way to iterate through an array in React. Whichever method works for you is best for you, but you'll eventually want to migrate to this format.

### Step 1: Create the AlienList Component

Create a new component `AlienList.jsx` in the `src` folder:

```jsx
import React from 'react';

const aliens = [
  { id: 1, name: "Krombopulos Michael", species: "Gromflomite" },
  { id: 2, name: "Birdperson", species: "Bird-Person" },
  { id: 3, name: "Squanchy", species: "Cat-like Creature" }
];

function AlienList() {
  return (
    <div>
      {aliens.map((alien) => (
        <div key={alien.id}>
          <h2>{alien.name}</h2>
          <p>Species: {alien.species}</p>
        </div>
      ))}
    </div>
  );
}

export default AlienList;
```

### Step 2: Update the App Component to Use `AlienList`

Update `src/App.jsx` to use the new `AlienList` component:

```jsx
import "./App.css";
import ProductList from "./ProductList";
import AlienList from "./AlienList";

const funFacts = [
  { id: 1, text: "A group of flamingos is called a 'flamboyance.'" },
  { id: 2, text: "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible." },
  { id: 3, text: "A day on Venus is longer than a year on Venus." }
];

function App() {
  const someElements = [];
  for (const fact of funFacts) {
    someElements.push(<p key={fact.id}>{fact.text}</p>);
  }

  return (
    <div>
      {someElements}
      <ProductList />
      <AlienList />
    </div>
  )
}

export default App;
```
