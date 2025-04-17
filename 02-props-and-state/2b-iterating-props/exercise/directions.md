# Props Exercise

![Exercise Preview](https://i.imgur.com/p3AtNe8.png)

## Exercise overview

We are going to make an archive page for a blog site that displays a list of recent articles.

## Set Up And Run A New React App

1. Open the terminal to the `exercise` directory--the simplest way to do so is to right-click on the `exercise` folder in VS Code and select "Open in Integrated Terminal".

2. In the terminal, type `npm create vite .` and hit enter/return. The `.` is important--this will create a new Vite project in the current directory.

3. It will warn you that there are files here currently. Use the arrow keys and Enter/Return to select "Ignore files and continue". This allows us to keep our readme and any data/assets files we have in our new project folder.

4. Choose React and then JavaScript from the following menus, using arrow keys and Enter/Return.

5. Install dependencies by entering `npm install` in the terminal.

6. Run the app by typing `npm run dev` in the terminal. This will provide a clickable link to open the app in your default browser, or you can navigate to the localhost URL in your browser.

## Install Bootstrap

4. Next let's import Bootstrap a front-end framework that provides CSS code to make our project beautiful. In terminal type `npm i bootstrap@5.2.3`. This will install the package into our project.

## Import Bootstrap

6. Then in VS Code, open the **/src/main.jsx** file and import the bootstrap css like by typing the following line `import 'bootstrap/dist/css/bootstrap.css';` placing it just after the import for ReactDOM and just before our import for **index.css**. This way we can override the bootstrap styles with our own inside index.css if we wish to.

## Exercise Assets

7. Move the image files from the `assets` directory outside the React project directory into the directory `public`. This way the images will be accessible to your application.

## Creating the App Component

8. Open **/src/App.jsx**. This file is an example component that React starts with. You can delete everything in this file. Then at the top of the file you can import React and create a functional component named `App`. Don't forget to export it.

9. Create a `<div>` inside of the `return()` statement.

10. Add `className="App container-fluid"` into the `<div>` element. This will apply some CSS styles to it.

```jsx
function App() {
  return <div className="App container-fluid"></div>;
}

export default App;
```

11. Then inside the `<div>` create a heading `<h1>My Travel Blog</h1>`.

```jsx
function App() {
  return (
    <div className="App container-fluid">
      <h1>My Travel Blog</h1>
    </div>
  );
}
```

12. Save the file and visit the browser to make sure our heading is appearing.

13. Back inside **/src/App.jsx** below our heading place `<div className="row"></div>`.

```jsx
function App() {
  return (
    <div className="App container-fluid">
      <h1>My Travel Blog</h1>
      <div className="row"></div>
    </div>
  );
}
```

## Creating the Article Component

14. In VS Code in the File Explorer to the left right click on the **/src/** folder and select **New File**. Name the file `Article.jsx`.

15. Open **/src/Article.jsx** and import React.

16. Create a function called `Article` that returns a `<div>` inside of parentheses. Don't forget to export the function at the bottom of the file.

17. Inside the `<div>`, add the attribute `className="article col-4"`.

18. Inside the `div`, let's write some place filler text `Hello I'm An Article!`.

```jsx
function Article() {
  return <div className="article col-4">Hey I'm an article!</div>;
}

export default Article;
```

19. Let's try to import this Article into our App component. Open **/src/App.jsx** again and after we import React create a new line to import our Article `import Article from './Article';`. Also import the App.css with `import './App.css';`

20. Then inside of the `<div className="row">` refer to your Article component as `<Article />`.

```jsx
import Article from "./Article";
import "./App.css";

function App() {
  return (
    <div className="App container-fluid">
      <h1>My Travel Blog</h1>
      <div className="row">
        <Article />
      </div>
    </div>
  );
}

export default App;
```

21. Save and check the browser and you should see the text "Hello I'm An Article!".

## Adding Prop Data

22. Now that we know our App component can see our Article component, let's add some made up dummy data. This data often comes from a database, but for now we are just going to add it as a property of our component to make things simple. On `App.jsx`, inside your function, before the `return`, paste in the following code:

```javascript
const articles = [
  {
    id: 1,
    title: "Taiwan's Hidden Treasures",
    body: "You could spend months exploring Taiwan's Buddhist temples, villages, cities, and mountains and still barely scratch the surface of all the island has to offer.",
    img: "/taiwan.jpg",
  },
  {
    id: 2,
    title: "High Culture In Sao Paulo",
    body: "The largest city in South America, Sao Paulo's cuisine and art is as multinational as its diverse population of ten million people.",
    img: "/sao-paulo.jpg",
  },
  {
    id: 3,
    title: "Bonaire Is Scuba Heaven",
    body: "Bonaire is one of the top diving destinations in the world. Known as the shore dive capital of the world, it has great accessibility to its reefs.",
    img: "/bonaire.jpg",
  },
];
```

This is what it looks like inside your component:

```jsx
function App() {
  let articles = [
    {
      id: 1,
      title: "Taiwan's Hidden Treasures",
      body: "You could spend months exploring Taiwan's Buddhist temples, villages, cities, and mountains and still barely scratch the surface of all the island has to offer.",
      img: "/taiwan.jpg",
    },
    {
      id: 2,
      title: "High Culture In Sao Paulo",
      body: "The largest city in South America, Sao Paulo's cuisine and art is as multinational as its diverse population of ten million people.",
      img: "/sao-paulo.jpg",
    },
    {
      id: 3,
      title: "Bonaire Is Scuba Heaven",
      body: "Bonaire is one of the top diving destinations in the world. Known as the shore dive capital of the world, it has great accessibility to its reefs.",
      img: "/bonaire.jpg",
    },
  ];

  return (
    <div className="App container-fluid">
      <h1>My Travel Blog</h1>
      <div className="row">
        <Article />
      </div>
    </div>
  );
}
```

Notice that our data is named `articles` and contains an array with three objects inside that hold the content for each article.

## Using Map To Create Many Articles From An Array Of Data

23. Instead of loading just one `<Article />` component, we would like to loop over the articles array and create an article for each item in the array. the `map` function makes this easy to write

```jsx
function App() {
  let articles = []; // data was shortened to conserve space

  return (
    <div className="App container-fluid">
      <h1>My Travel Blog</h1>
      <div className="row">
        {articles.map((oneArticle) => (
          <Article />
        ))}
      </div>
    </div>
  );
}
```

24. Save and check the browser. You should see the text "Hello I'm An Article!" appearing 3 times.

## Passing Data As Props

25. Let's use props to pass the articles data from our App component down into our Article component. The map function receives a call back function which we have written as an arrow function. The argument we pass in is the name we want to call each element that is returned from the articles array. I chose to call it `oneArticle` as it represents just one article. Then inside the `<Article />` component we add the attribute for `key=""` (a unique identifier that React uses) and a prop we are creating called `content=""` to pass the article content into.

```jsx
function App() {
  let articles = []; // data was shortened to conserve space

  return (
    <div className="App container-fluid">
      <h1>My Travel Blog</h1>
      <div className="row">
        {articles.map((oneArticle) => (
          <Article key={oneArticle.id} content={oneArticle} />
        ))}
      </div>
    </div>
  );
}
```

We must pass the `key=""` attribute a unique label, we decided to use the id property that is found inside each element of the articles array.

26. Head back to **/src/Article.jsx**. Let's remove the text that says "Hello I'm An Article!" and replace it with 3 elements an `<img>` image, `<h2>` a heading, and a `<p>` paragraph.

```jsx
function Article(props) {
  return (
    <div className="article col-4">
      <img />
      <h2></h2>
      <p></p>
    </div>
  );
}

export default Article;
```

27. Give the image element a class style, a src attribute, and also an alt attribute like so `<img className="img-fluid" src={} alt="featured" />`. In order to display the correct img source url we will refer to the props object that has a property we passed in called `contents`.

```jsx
<img className="img-fluid" src={props.content.img} alt="featured" />
```

If you are not sure what to type to get to a particular property you can always look over the articles array again that is inside **/src/App.jsx**

28. For the heading we will reference the `title` property.

```jsx
<h2>{props.content.title}</h2>
```

29. For the paragraph we want to insert the text that's stored inside the props `body` property.

```jsx
<p>{props.content.body}</p>
```

Here is the completed code for Article.jsx

```jsx
function Article(props) {
  return (
    <div className="article col-4">
      <img className="img-fluid" src={props.content.img} alt="featured" />
      <h2>{props.content.title}</h2>
      <p>{props.content.body}</p>
    </div>
  );
}

export default Article;
```

Here is the finished code for App.jsx

```jsx
import Article from "./Article";
import "./App.css";

function App() {
  let articles = [
    {
      id: 1,
      title: "Taiwan's Hidden Treasures",
      body: "You could spend months exploring Taiwan's Buddhist temples, villages, cities, and mountains and still barely scratch the surface of all the island has to offer.",
      img: "/taiwan.jpg",
    },
    {
      id: 2,
      title: "High Culture In Sao Paulo",
      body: "The largest city in South America, Sao Paulo's cuisine and art is as multinational as its diverse population of ten million people.",
      img: "/sao-paulo.jpg",
    },
    {
      id: 3,
      title: "Bonaire Is Scuba Heaven",
      body: "Bonaire is one of the top diving destinations in the world. Known as the shore dive capital of the world, it has great accessibility to its reefs.",
      img: "/bonaire.jpg",
    },
  ];

  return (
    <div className="App container-fluid">
      <h1>My Travel Blog</h1>
      <div className="row">
        {articles.map((oneArticle) => (
          <Article key={oneArticle.id} content={oneArticle} />
        ))}
      </div>
    </div>
  );
}

export default App;
```

30. Save all your files and check in the browser. You should A travel blog site page that has a heading and three columns one for each article.

## Passing The Array As A Prop

It's very common to have a parent component get data from an API call and then pass it down to its children. Let's practice that.

First, let's create an intermediate component: the `ArticleList`.

31. Create a file called `ArticleList.jsx` to render the articles it's passed.

32. In `ArticleList.jsx`, import Article.

``` jsx
import Article from "./Article";
```

33. Create a functional component called `ArticleList` that takes a prop called `articles` and export it.

``` jsx
function ArticleList(props) {
}

export default ArticleList;
```

34. Inside the `ArticleList` component, use the `map` function to render an `Article` component for each article in the `articles` prop.

``` jsx
function ArticleList(props) {
  return (
	<div className="row">
	  {props.articles.map((article) => (
		<Article key={article.id} content={article} />
	  ))}
	</div>
  );
}
```

35. In `App.jsx`, import `ArticleList`. You can optionally but ideally remove the `Article` import.

``` jsx
import ArticleList from "./ArticleList";
```

36. In `App.jsx`, replace the `Article` component with the `ArticleList` component. Pass the `articles` array as a prop.

``` jsx
import ArticleList from "./ArticleList";

function App() {
  let articles = [
	{
	  id: 1,
	  title: "Taiwan's Hidden Treasures",
	  body: "You could spend months exploring Taiwan's Buddhist temples, villages, cities, and mountains and still barely scratch the surface of all the island has to offer.",
	  img: "/taiwan.jpg",
	},
	{
	  id: 2,
	  title: "High Culture In Sao Paulo",
	  body: "The largest city in South America, Sao Paulo's cuisine and art is as multinational as its diverse population of ten million people.",
	  img: "/sao-paulo.jpg",
	},
	{
	  id: 3,
	  title: "Bonaire Is Scuba Heaven",
	  body: "Bonaire is one of the top diving destinations in the world. Known as the shore dive capital of the world, it has great accessibility to its reefs.",
	  img: "/bonaire.jpg",
	},
  ];

  return (
	<div className="App container-fluid">
	  <h1>My Travel Blog</h1>
	  <ArticleList articles={articles} />
	</div>
  );
}

export default App;
```

37. Save all your files and check in the browser. You should see the same travel blog site page that has a heading and three columns one for each article.

38. Congrats! You're done.
