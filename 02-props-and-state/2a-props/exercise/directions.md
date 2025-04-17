# Props Exercise: Movie and Actor Display

## Exercise overview

We are going to create a page that displays a list of favorite movies and actors.

## Set Up And Run A New React App

- Open the terminal to the `exercise` directory--the simplest way to do so is to right-click on the `exercise` folder in VS Code and select "Open in Integrated Terminal".

- In the terminal, type `npm create vite .` and hit enter/return. The `.` is important--this will create a new Vite project in the current directory.

- It will warn you that there are files here currently. Use the arrow keys and Enter/Return to select "Ignore files and continue". This allows us to keep our readme and any data/assets files we have in our new project folder.

- Choose React and then JavaScript from the following menus, using arrow keys and Enter/Return.

- Install dependencies by entering `npm install` in the terminal.

- Run the app by typing `npm run dev` in the terminal. This will provide a clickable link to open the app in your default browser, or you can navigate to the localhost URL in your browser.

## Creating the App Component

Open `/src/App.jsx`. This file is an example component that React starts with. You can delete everything in this file. Then at the top of the file, you can create a functional component named App. Don't forget to export it.

Create a `<div>` inside of the return() statement.

Then inside the <div> create a heading <h1>Favorite Movies and Actors</h1>.

Save the file and visit the browser to make sure our heading is appearing.

Back inside /src/App.jsx below our <h1> heading, place a <div></div>.

## Creating the Movie Component

In VS Code, in the File Explorer to the left, right-click on the /src/ folder and select New File. Name the file Movie.jsx.

Open /src/Movie.jsx and import React.

Create a function called Movie that returns a <div> inside of parentheses. Don't forget to export the function at the bottom of the file.

Inside the div, let's write some placeholder text: "Hello, I'm a Movie!".

## Creating the Actor Component

In VS Code, in the File Explorer to the left, right-click on the /src/ folder and select New File. Name the file Actor.jsx.

Open /src/Actor.jsx and import React.

Create a function called Actor that returns a <div> inside of parentheses. Don't forget to export the function at the bottom of the file.

Inside the div, let's write some placeholder text "Hello, I'm an Actor!".

## Importing the Components

Open /src/App.jsx again and create a new line to import our Movie and Actor components with import Movie from './Movie'; and import Actor from './Actor';.

Then inside of the <div>, render your Movie and Actor components using <Movie /> and <Actor />.

Save and check the browser. You should see the text "Hello, I'm a Movie!" and "Hello, I'm an Actor!" appearing.

## Adding Primitive Data

Let's add some favorite movie titles as primitive data. In App.jsx, inside your function, before the return, paste in the following code:

``` javascript
const movie1 = "Inception";
const movie2 = "The Matrix";
const movie3 = "Interstellar";
```

This is what it should look like inside your component:

```jsx
import Movie from "./Movie";
import Actor from "./Actor";

function App() {
  const movie1 = "Inception";
  const movie2 = "The Matrix";
  const movie3 = "Interstellar";

  return (
    <div>
      <h1>Favorite Movies and Actors</h1>
      <div>
        <Actor />
      </div>
    </div>
  );
}

export default App;
```

## Passing Props

Pass the movie titles as props to the Movie component. Render the Movie component 3 times inside App, passing each movie variable as a prop. Remember that this looks like HTML attributes, like `title={movie1}`.

## Updating the Movie Component

Right now, the Movie component still isn't rendering the movie title. Head back to /src/Movie.jsx. Let's remove the text that says "Hello, I'm a Movie!" and replace it with an <h2> element to display the movie title passed via props.

``` jsx
function Movie(props) {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
}

export default Movie;
```

## Adding Object Data

Now let's add some favorite actors as object data. In App.jsx, inside your function, before the return, paste in the following code:

```javascript
const actor1 = { id: 1, name: "Leonardo DiCaprio", age: 46 };
const actor2 = { id: 2, name: "Keanu Reeves", age: 57 };
const actor3 = { id: 3, name: "Matthew McConaughey", age: 52 };
```

This is what it looks like inside your component:

```jsx
import Movie from "./Movie";
import Actor from "./Actor";

function App() {
  const movie1 = "Inception";
  const movie2 = "The Matrix";
  const movie3 = "Interstellar";

  const actor1 = { id: 1, name: "Leonardo DiCaprio", age: 46 };
  const actor2 = { id: 2, name: "Keanu Reeves", age: 57 };
  const actor3 = { id: 3, name: "Matthew McConaughey", age: 52 };
  // return statement
}

export default App;
```

## Updating the Actor Component

Again, the Actor component still isn't rendering the actor's name and age. Head back to /src/Actor.jsx. Let's remove the text that says "Hello, I'm an Actor!" and replace it with an <h2> element to display the actor's name and a <p> element to display the actor's age.


## Solution Code

Try to complete the exercise on your own. If you get stuck, you can refer to the solution code below.

Here is the finished code for App.jsx:

```jsx
import Movie from "./Movie";
import Actor from "./Actor";

function App() {
  const movie1 = "Inception";
  const movie2 = "The Matrix";
  const movie3 = "Interstellar";

  const actor1 = { id: 1, name: "Leonardo DiCaprio", age: 46 };
  const actor2 = { id: 2, name: "Keanu Reeves", age: 57 };
  const actor3 = { id: 3, name: "Matthew McConaughey", age: 52 };

  return (
    <div>
      <h1>Favorite Movies and Actors</h1>
      <div>
        <Movie title={movie1} />
        <Movie title={movie2} />
        <Movie title={movie3} />
        <Actor actor={actor1} />
        <Actor actor={actor2} />
        <Actor actor={actor3} />
      </div>
    </div>
  );
}

export default App;
```

Here is the finished code for Movie.jsx:

```jsx
function Movie(props) {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
}

export default Movie;
```

Here is the finished code for Actor.jsx:

```jsx
function Actor(props) {
  return (
    <div>
      <h2>{props.actor.name}</h2>
      <p>Age: {props.actor.age}</p>
    </div>
  );
}

export default Actor;
```

If you completed the assignment, you should see a page displaying favorite movies and actors, each with their respective details.
