# Props

Props (short for properties) provides us a way to pass data into our components. Props are passed to components as a standard JavaScript object so your properties can be labeled with different object keys and they can store any data type that is valid in JavaScript. Let's look at some examples.

## Why Pass Data Into A Component?

When you create a component, you want to make it as reusable as possible. You want to be able to use it in multiple places in your application, and you want it to be able to display different data depending on where it's used. This is where props come in.

When you pass data into a component, you can customize the component's behavior and appearance based on that data. This allows you to create a single component that can be used in many different ways, depending on the data that's passed into it.

For example, let's say you have a `Greeting` component that displays a greeting message to the user. You could create a `Greeting` component that always displays the same message, like this:

```jsx
<Greeting />
```

But what if you want to display a different message depending on who the user is? You could pass the user's name into the `Greeting` component as a prop, like this:

```jsx
<Greeting name="Rick" />
```

Other use cases for passing data into a component include:

- a list of items, where each item is passed in as a prop
- a form, where the form fields are pre-populated using props
- a table, where the table data is passed in as a prop
- a progress bar, where the progress value is passed in as a prop
- a video player, where the video URL is passed in as a prop
- a calendar, where the calendar events are passed in as a prop
- a quiz, where the quiz questions and answers are passed in as props
- a button, where the button text and click handler are passed in as props

## Designing Props

If you had to design a way to pass data into a component, how would you do it? You would want it to look like HTML attributes when _using_ a component, like this:

```jsx
<Greeting name="Rick" age={73} />
```

But on the other side, when _defining_ a component, you would want to access the data in a way that matches that structure. Since HTML attributes are, at their heart, key-value pairs, the argument passed to a component should be an object with key-value pairs.

```jsx
function Greeting(attributesObj) {
  return <h1>Hey {attributesObj.name}, You are {attributesObj.age} years old.</h1>;
}
```

This would output `Hey Rick, You are 73 years old.`

This is exactly how props work in React. When you pass data into a component, you pass it as key-value pairs, and when you access that data inside the component, you access it as a single object. We could call this object whatever we want--it's our function and our parameter name, after all--but the convention is to call it `props`.

## Props and components

Let's say we have a main parent component called App and we would like to nest a Greeting component inside of it and change the greeting for different users based on their name. The component can stay the same but the props we pass into it can change dynamically. Let's explore this using components:

```jsx
import "./App.css";

function Greeting(props) {
  return <h1>Hey {props.name}</h1>;
}

function App() {
  return (
    <div className="App">
      <Greeting name="Rick" />
      <Greeting name="Morty" />
      <Greeting name="Summer" />
    </div>
  );
}

export default App;
```

Looking over this code we notice that props are passed to our components as attributes inside our JSX elements. `<Greeting />` represents one instance of a Greeting component. We added the `name="Rick"` attribute inside it so the final result is `<Greeting name="Rick" />`. This modifies the props object so it has a key called `name`. Now behind the scenes the props object would look like this:

```javascript
{
  name: "Rick";
}
```

This is made usable to our component by referring to the `props` object and using standard JavaScript dot notation to refer to the key we choose `props.name`. So again, `<Greeting name="Rick" />` stores the value "Rick" inside of `props.name` and can now be referenced inside the Greeting component.

The end result here is that the browser will display all three greetings each with a different name passed in as a prop.

```html
<div>
  <h1>Hey Rick</h1>
  <h1>Hey Morty</h1>
  <h1>Hey Summer</h1>
</div>
```

## Passing multiple props to the same component

What if wanted to not only pass the name but also the age of each user and whether they are living or dead? We can simply add additional prop attributes as needed.

```jsx
<Greeting name="Rick" age={73} isAlive={true} />
```

Notice that when passing a string we used `""` quotes, where as we used `{}` curly braces when passing a number. This is because strings are naturally captured in quotes, while curly braces are needed for all other data types because the data is moving in JavaScript and all JavaScript in JSX needs to be wrapped in curly braces.

Now we can update the component to accept these new props.

```jsx
function Greeting(props) {
  return (
    <h1>
      Hey {props.name}, You are {props.age} years old.
      {props.isAlive
        ? "Congrats on being alive"
        : "You appear to have died on this adventure, better make a clone!"}
    </h1>
  );
}
```

Let's see the full code with different values for each instance of Greeting.

```jsx
import "./App.css";

function Greeting(props) {
  return (
    <h1>
      Hey {props.name}, You are {props.age} years old.{" "}
      {props.isAlive
        ? "Congratulations on being alive!"
        : "You appear to have died on this adventure, better make a clone!"}
    </h1>
  );
}

function App() {
  return (
    <div className="App">
      <Greeting name="Rick" age={73} isAlive={true} />
      <Greeting name="Morty" age={13} isAlive={false} />
      <Greeting name="Summer" age={17} isAlive={true} />
    </div>
  );
}

export default App;
```

The final result in the browser is:

```html
<div>
  <h1>Hello Rick, You are 73 years old. Congratulations on being alive!</h1>
  <h1>Hello Morty, You are 13 years old. Congratulations on being alive!</h1>
  <h1>
    Hello Summer, You are 17 years old. You appear to have died on this
    adventure, better make a clone!
  </h1>
</div>
```

## Passing objects as props

Aside from passing strings, numbers, boolean values, we can also pass objects, arrays, and functions. First let's look at passing those same props above as a single object.

```jsx
<Greeting person={{ name: "Rick", age: 73, isAlive: true }} />
```

Remember that props are already an object, and by passing in another one our object will be nested inside of the props object. Now to retrieve these individual props in a component it would be done like this:

```jsx
function Greeting(props) {
  return (
    <h1>
      Hey {props.person.name}, You are {props.person.age} years old.{" "}
      {props.person.isAlive
        ? "Congratulations on being isAlive!"
        : "You appear to have died on this adventure, better make a clone!"}
    </h1>
  );
}
```

## Passing arrays as props

Lets look at accessing props containing arrays

```jsx
<Favorites
  faves={["McNuggies with Szechaun Sauce", "Kalaxian Crystals", "Portal Fluid"]}
/>
```

Then to display the array values in our component we can use the join method to merge them together separated by commas.

```jsx
function Favorites(props) {
  return <p>Your favorite things are: {props.faves.join(", ")}</p>;
}
```

