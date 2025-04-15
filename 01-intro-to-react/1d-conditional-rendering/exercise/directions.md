# Conditional Rendering Exercise

## Exercise Overview

We are going to build a weather-themed React application that demonstrates conditional rendering. This exercise will guide you through creating a toy app with various methods of conditional rendering to show different weather conditions like cloud cover, rain, and temperature. We'll also use Bootstrap to make our app look visually appealing.

## Set Up a New Vite Project

1. Open VS Code and then open the terminal with in the `exercise` directory by right-clicking on this `readme.md` file and selecting **Open in Integrated Terminal**.
2a. In Terminal, type `npm vite weather-conditions-app` followed by return. Here we are naming our project `weather-conditions-app`. 
2b. It may prompt you if you want to install Vite. You can hit return, confirming first that it says `vite` and not a misspelling.
2c. It will prompt you to "Select a Framework". Choose React.
2d. It will prompt you to "Select a Variant". Choose JavaScript.
3. Then open the folder in VS Code by choosing File -> Open Folder and selecting the folder `weather-conditions-app`.

## Install Bootstrap

4. Next, let's import Bootstrap, a front-end framework that provides CSS code to make our project beautiful. Launch a new terminal using Terminal -> New Terminal or using Ctrl+`. In your terminal, type `npm i bootstrap@5.2.3`. This will install the package into our project.

## Import Bootstrap

5. Then in VS Code, open the **/src/main.jsx** file and import the Bootstrap CSS by typing the following line `import 'bootstrap/dist/css/bootstrap.css';`, placing it just after the import for ReactDOM and just before our import for **index.css**. This way we can override the Bootstrap styles with our own inside **index.css** if we wish to.

## Start Node Test Server

6. In Terminal, type `npm run dev` to start a node server. This should give you a message that the Local is **localhost:5173**. This is a clickable link to open it in your default browser, but you can go to the URL manually if you prefer.

## Creating the App Component

7. Open **/src/App.jsx**. This file is an example component that a React app starts with. You can delete everything in this file. Then, at the top of the file, you can import React and create a functional component called `App`. Finally, export it at the bottom.
8. Write `<div className="App">Weather Conditions</div>` inside the `return` that is inside the `App` component.
9. Let's visit the **/src/main.jsx** file and look at how we are passing our component to ReactDOM to be rendered. The line at the top of the file is importing the code from `App.jsx` so `main.jsx` has access to the `App` component.
10. The render method of ReactDOM is being passed our `<App />` component. The `<React.StrictMode>` gives us better error reporting by activating additional checks and warnings.
11. Save your files and visit the browser. You should see "Weather Conditions" displayed.
12. In VS Code, go back to the file **/src/App.jsx**.

## Applying CSS Classes

13. Erase the text "Weather Conditions" from inside the `div`. Add the attribute `className="container mt-5"` inside the `<div>`.
14. Inside the `<div>`, create another `<div>` and give it the Bootstrap class name of `row`.
15. Add comments inside the `<div>` with the class name `row` to make a note of what will eventually go there.

## Creating Nested Components

Let's create components for the three weather conditions: CloudCover, Rain, HotTemperature, and ColdTemperature.

16. From the File Explorer in the left panel, **right-click** on the **/src/** folder inside your React project. Select **New File** and name the file `CloudCover.jsx`.
17. Create another file in the same location and name it `Rain.jsx`.
18. Create another file in the same location and name it `HotTemperature.jsx`.
19. Create another file in the same location and name it `ColdTemperature.jsx`.

#### CloudCover.js

```jsx
import React from 'react';

function CloudCover() {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Cloud Cover</h5>
        <p className="card-text">It's cloudy today.</p>
      </div>
    </div>
  );
}

export default CloudCover;
```

#### Rain.js

``` jsx
import React from 'react';

function Rain() {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Rain</h5>
        <p className="card-text">It's raining today.</p>
      </div>
    </div>
  );
}

export default Rain;
```

#### HotTemperature.js

```jsx
import React from 'react';

function HotTemperature() {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Hot Temperature</h5>
        <p className="card-text">It's hot today with a temperature above 60°F.</p>
      </div>
    </div>
  );
}

export default HotTemperature;
```

#### ColdTemperature.js

```jsx
import React from 'react';

function ColdTemperature() {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Cold Temperature</h5>
        <p className="card-text">It's cold today with a temperature below 60°F.</p>
      </div>
    </div>
  );
}

export default ColdTemperature;
```

## Using let-declared Variable with if for `CloudCover`

We'll use an `if` statement to conditionally render the `CloudCover` component.

```jsx
import React from 'react';
import CloudCover from './CloudCover';

function App() {
  let cloudCover;
  const isCloudy = true; // You can change this value to false and see what happens.

  if (isCloudy) {
    cloudCover = <CloudCover />;
  }

  return (
    <div className="App container mt-5">
      <div className="row">
        {cloudCover}
      </div>
    </div>
  );
}

export default App;
```

## Using Short-Circuit && Evaluation for Rain

We'll use logical AND (&&) to conditionally render the `Rain` component.

```jsx
import React from 'react';
import CloudCover from './CloudCover';
import Rain from './Rain';

function App() {
  const isCloudy = true; // You can change this value to false and see what happens.
  let cloudCover;
  if (isCloudy) {
    cloudCover = <CloudCover />;
  }

  const isRainy = true; // You can change this value to false and see what happens.
  const rain = isRainy && <Rain />;

  return (
    <div className="App container mt-5">
      <div className="row">
        {cloudCover}
        {rain}
      </div>
    </div>
  );
}

export default App;
```

## Using Ternary Operator for Temperature

We'll use the ternary operator to conditionally render either the `HotTemperature` or `ColdTemperature` component.

```jsx
import React from 'react';
import CloudCover from './CloudCover';
import Rain from './Rain';
import HotTemperature from './HotTemperature';
import ColdTemperature from './ColdTemperature';

function App() {
  const isCloudy = true; // You can change this value to false and see what happens.
  let cloudCover;
  if (isCloudy) {
    cloudCover = <CloudCover />;
  }

  const isRainy = true; // You can change this value to false and see what happens.
  const rain = isRainy && <Rain />;

  const temperature = 75; // You can change this value to see different results.
  const tempComponent = temperature > 60 ? <HotTemperature /> : <ColdTemperature />;

  return (
    <div className="App container mt-5">
      <div className="row">
        {cloudCover}
        {rain}
        {tempComponent}
      </div>
    </div>
  );
}

export default App;
```

## BONUS - Use Inline Expressions

You can use inline expressions to conditionally render components. This is useful when you have a simple condition to check.

We'll have to jettison the `if`, because statements are not allowed in JSX. Instead, we'll use the short-circuit `&&` operator to conditionally render the `CloudCover` component.

```jsx
import React from 'react';
import CloudCover from './CloudCover';
import Rain from './Rain';
import HotTemperature from './HotTemperature';
import ColdTemperature from './ColdTemperature';

function App() {
  const isCloudy = true; // You can change this value to false and see what happens.
  const isRainy = true; // You can change this value to false and see what happens.
  const temperature = 75; // You can change this value to see different results.

  return (
	<div className="App container mt-5">
	  <div className="row">
		{isCloudy && <CloudCover />}
		{isRainy && <Rain />}
		{temperature > 60 ? <HotTemperature /> : <ColdTemperature />}
	  </div>
	</div>
  );
}
```

Inline expressions are a great way to conditionally render components when you have a simple condition to check, and they can make your code more concise and easier to read. Overall, this is how conditional rendering is done in React, but you can use variables outside the return value if you find that more readable.

## Conclusion

In this exercise, we learned how to conditionally render components in React using different methods like `if` statements, the short-circuit `&&` operator, the ternary operator, and inline expressions. We also used Bootstrap to style our app and make it visually appealing. You can now use these techniques to create more complex applications with conditional rendering in React.
