# Components Lab: Space Adventure Blog

## Lab Overview

We are going to make a Space Adventure Blog website page by combining different components, each making up a different part of the page content.

### Setup

1. **Set Up Your Project:**

- Open the terminal to the directory with this readme in it--the simplest way to do so is to right-click on the folder in VS Code and select "Open in Integrated Terminal".

- In the terminal, type `npm create vite .` and hit enter/return. The `.` is important--this will create a new Vite project in the current directory.

- It will warn you that there are files here currently. Use the arrow keys and Enter/Return to select "Ignore files and continue". This allows us to keep our readme and any data/assets files we have in our new project folder.

- Choose React and then JavaScript from the following menus, using arrow keys and Enter/Return.

- Install dependencies by entering `npm install` in the terminal.

- Run the app by typing `npm run dev` in the terminal. This will provide a clickable link to open the app in your default browser, or you can navigate to the localhost URL in your browser.

#### Install Bootstrap

4. Next, let's import Bootstrap, a front-end framework that provides CSS code to make our project beautiful. In Terminal, type `npm i bootstrap@5.2.3`. This will install the package into our project.

#### Lab Assets

6. Download a space image of your choice from the internet and move the image file to the `public/` folder in your project. This way, the image will be accessible to your application.

## Import Bootstrap

7. Then in VS Code, open the **/src/main.jsx** file and import the Bootstrap CSS by typing the following line `import 'bootstrap/dist/css/bootstrap.css';`, placing it just after the import for ReactDOM and just before our import for **index.css**. This way we can override the Bootstrap styles with our own inside **index.css** if we wish to.

## Creating the App Component

10. Open **/src/App.jsx**. This file is an example component that React starts with. You can delete everything in this file. Then, at the top of the file, create a functional component called `App`. Finally, export it at the bottom.

11. Write `<div>Hello Space Adventurers</div>` inside the `return` that is inside the `App` component.

12. Let's visit the **/src/main.jsx** file and look at how we are passing our component to ReactDOM to be rendered. The line at the top of the file is importing the code from `App.jsx` so `main.jsx` has access to the `App` component.

13. The render method of ReactDOM is being passed our `<App />` component. The `<React.StrictMode>` gives us better error reporting by activating additional checks and warnings.

14. Save your files and visit the browser. You should see "Hello Space Adventurers" displayed.

15. In VS Code, go back to the file **/src/App.jsx**.

## Applying CSS Classes

16. Erase the text "Hello Space Adventurers" from inside the `div`. Add the attribute `className=""` inside the `<div>` and give it the Bootstrap class name of `container-fluid`.

17. Inside the `<div>`, create another two `<div>` and give them the Bootstrap class name of `row`. This will create our vertical separation between our header and the rest of the page.

18. Add comments inside each `div` to make a note of what will eventually go there: Navbar, Header, Main, and Footer.

## Create Child Components

Let's create components for the Navbar, Header, Main content, and Footer areas.

19. From the File Explorer in the left panel, **right-click** on the **/src/** folder inside your project. Select **New File** and name the file `Navbar.jsx`.

20. Create another file in the same location and name it `Header.jsx`.

21. Create another file in the same location and name it `Main.jsx`.

22. Create another file in the same location and name it `Footer.jsx`.

## Working on the Navbar

23. Inside the **/src/Navbar.jsx** file, start by creating a functional component. Name the component `Navbar`.

24. Fill the empty return statement with `<nav>`. Then add the Bootstrap class name `col-12` to `<nav>`.

25. Inside the `<nav>`, create an unordered list `<ul>` with the following list items:
   - Home
   - Blog
   - About
   - Contact

## Working on the Header

26. Inside the **/src/Header.jsx** file, start by creating a functional component. Name the component `Header`.

27. Fill the empty return statement with `<header>`. Then add the Bootstrap class name `col-12` to `<header>`.

28. Inside the `<header>`, add an `<img />` element and give it the class name of `logo`. Set the `src` attribute to the path of your downloaded space image and the `alt` attribute to `Space Adventure`.

29. Below the image, create a heading `<h1>Space Adventure Blog</h1>`.

## Working on the Main Content

30. Inside the **/src/Main.jsx** file, start by creating a functional component. Name the component `Main`.

31. Fill the empty return statement with `<main>`. Then add the Bootstrap class name `col-md-12` to `<main>`.

32. Inside the `<main>` element, add a `<div>` with an `<h2>` inside of it. Below the `<div>`, add a `<p>` paragraph.

33. Set the `<div>` the class name of `content`.

34. Add a title for your space adventure blog post inside the `<h2>` element.

35. Add detailed content related to space adventures inside the `<p>` element. Up to you exactly what that entails!

## Working on the Footer

36. Inside the **/src/Footer.jsx** file, start by creating a functional component. Name the component `Footer`.

37. Fill the empty return statement with `<footer>`. Then add the Bootstrap class name `col-12` to `<footer>`.

38. Inside the `<footer>`, create a paragraph `<p>` with the text "© 2025 Space Adventure Blog. All rights reserved."

## Adding Inline CSS Style

39. Inside the Main component, before the return statement, add an object with CSS styles. Up to you what those styles are.

40. Inside the `<div className="content">`, add the `style=""` attribute and pass in the style object.

## Including Child Components In A Parent Component

We are ready to compose all children components into our main parent component.

41. Open the file **/src/App.jsx** and at the top of the file, add import statements for our component files: `Navbar`, `Header`, `Main`, and `Footer`.

42. Replace the comments with references to our components: `<Navbar />`, `<Header />`, `<Main />`, and `<Footer />`.

## You're finished!

Your components skills aren't just 🔥, they're 🚀🔥.
