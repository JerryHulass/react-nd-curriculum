# React With Redux Toolkit - Assignment

### Introduction

In this assignment, you'll build a book collection manager application using React, Redux Toolkit (RTK), and React Router. RTK is the official, recommended way to write Redux logic, and it offers several advantages over vanilla Redux. By completing this assignment, you'll gain practical experience with modern state management techniques and improve your skills in building scalable, maintainable applications.

##### Advantages of RTK

1. **Simplified Syntax**: RTK provides a simplified syntax for defining reducers, actions, and the store, reducing boilerplate code and making it easier to understand and maintain your application.

2. **Built-in Best Practices**: RTK is designed with best practices in mind, such as avoiding direct state mutations and using immer to handle immutable updates. This helps prevent common mistakes and ensures your code adheres to industry standards.

3. **Enhanced Developer Experience**: RTK includes powerful tools like the Redux DevTools, enabling you to easily debug and trace state changes. Additionally, RTK's built-in support for creating asynchronous actions simplifies handling side effects like API calls.

4. **Standardization**: By using RTK, you adopt a standard way of writing Redux logic, which makes it easier for new developers to understand your codebase and contribute effectively.

##### Industry Adoption

RTK has become the go-to solution for state management in modern React applications. It is widely adopted across the industry due to its simplicity, robustness, and alignment with best practices. Many companies and open-source projects rely on RTK to manage complex state logic and ensure their applications are scalable and maintainable.

By learning and using RTK, you position yourself with valuable skills that are in high demand in the industry. This assignment will provide you with a strong foundation in state management and prepare you for real-world development scenarios.

Now, let's get started with setting up your project and building the book collection manager application!

### Step 1: Set Up the Project

- Open the terminal to the directory with this readme in it--the simplest way to do so is to right-click on the folder in VS Code and select "Open in Integrated Terminal".

- In the terminal, type `npm create vite .` and hit enter/return. The `.` is important--this will create a new Vite project in the current directory.

- It will warn you that there are files here currently. Use the arrow keys and Enter/Return to select "Ignore files and continue". This allows us to keep our readme and any data/assets files we have in our new project folder.

- Choose React and then JavaScript from the following menus, using arrow keys and Enter/Return.

- Install dependencies by entering `npm install` in the terminal.

- Run the app by typing `npm run dev` in the terminal. This will provide a clickable link to open the app in your default browser, or you can navigate to the localhost URL in your browser.

**Check**: Ensure that your React app is running at `http://localhost:5173`.

Once you've set up the project and confirmed it's running, you’re ready to move on to the next step.

### Step 2: Create the Header Component

1. In your `src` directory, create a folder named `components`.

2. Inside the `components` folder, create a file named `Header.jsx`.

3. In `Header.jsx`, create a function named `Header`.

4. Inside the `Header` function, return a `header` element with a heading (h1) that says "Book Collection Manager".

5. Export the `Header` function.

**Check**: Ensure the `Header` component displays the title correctly.

Once you've created the `Header` component and confirmed it renders correctly, you’re ready to move on to the next step.

### Step 3: Create the BookList Component

1. Inside the `components` folder, create a file named `BookList.jsx`.

2. In `BookList.jsx`, create a function named `BookList`.

3. Inside the `BookList` function, return a `div` element with a heading (h2) that says "Book List".

4. Export the `BookList` function.

**Check**: Ensure the `BookList` component displays the "Book List" heading correctly.

Once you've created the `BookList` component and confirmed it renders correctly, you’re ready to move on to the next step.

### Step 4: Create the BookItem Component

1. Inside the `components` folder, create a file named `BookItem.jsx`.

2. In `BookItem.jsx`, create a function named `BookItem`.

3. The `BookItem` function should accept a `props` parameter.

4. Inside the `BookItem` function, return a `div` element that displays the title, author, and genre of a book using `props`.

5. Export the `BookItem` function.

**Check**: Ensure the `BookItem` component displays the book details correctly.

Once you've created the `BookItem` component and confirmed it renders correctly, you’re ready to move on to the next step.

### Step 5: Create the BookForm Component

1. Inside the `components` folder, create a file named `BookForm.jsx`.

2. In `BookForm.jsx`, create a function named `BookForm`.

3. Inside the `BookForm` function, return a `form` element with inputs for the book title, author, and genre.

4. Add state to the `BookForm` function to manage the form inputs using `useState`.

5. Add an `onSubmit` handler to the form to handle the form submission and log the form data to the console.

6. Export the `BookForm` function.

**Check**: Ensure the `BookForm` component displays the form and logs the form data correctly on submission.

Once you've created the `BookForm` component and confirmed it renders and works correctly, you’re ready to move on to the next step.

### Step 6: Create the Header Component with Navigation

1. In the `components` folder, open `Header.jsx`.

2. Import `Link` from `react-router-dom`.

3. Inside the `Header` function, modify the return statement to include navigation links to the Home and Add Book pages using `Link` components.

4. Ensure the `header` element contains a `nav` element with `Link` components for "Home" and "Add Book" with `to` attributes set to `/` and `/add-book` respectively.

5. Export the `Header` function.

**Check**: Ensure the `Header` component displays navigation links to the Home and Add Book pages correctly.

Once you've updated the `Header` component and confirmed it renders correctly, you’re ready to move on to the next step.

### Step 7: Create the Router Setup in the App Component

1. In your `src` directory, open the `App.jsx` file.

2. Import `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`.

3. Import the `Header`, `BookList`, and `BookForm` components.

4. Wrap the content of the `App` component in a `BrowserRouter`.

5. Add the `Header` component to the `App` component inside the `BrowserRouter`.

6. Use `Routes` and `Route` to define routes for the Home (`/`) and Add Book (`/add-book`) pages.

7. Set the `element` prop of the `Route` component for the Home route to render the `BookList` component.

8. Set the `element` prop of the `Route` component for the Add Book route to render the `BookForm` component.

**Check**: Ensure the `App` component sets up the router correctly and that navigating to `/` displays the `BookList` component and `/add-book` displays the `BookForm` component.

Once you've set up the router in the `App` component and confirmed it works correctly, you’re ready to move on to the next step.

### Step 8: Add Styling for Components

1. In your `src` directory, create a file named `App.css`.

2. Add basic styling for the body, header, buttons, list view, and grid view.

**File:** `src/App.css`

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

header {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    margin: 5px;
}

button:hover {
    background-color: #0056b3;
}

.list-view div {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 5px;
    background-color: white;
}

.grid-view div {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
```

3. In your src directory, open the index.js file.

4. Import the App.css file at the top of the file using:

```javascript
import './App.css';
```

**Check**: Ensure the components are styled correctly.

Once you've added the styling for the components and confirmed it looks good, you’re ready to move on to the next step.

### Step 9: Create the Books Slice

1. In your `src` directory, create a folder named `slices`.

2. Inside the `slices` folder, create a file named `booksSlice.js`.

3. Import `createSlice` from `@reduxjs/toolkit`.

4. Define the initial state with some sample books. Here are a few examples:
    - `To Kill a Mockingbird` by Harper Lee, genre: Fiction
    - `1984` by George Orwell, genre: Dystopian
    - `Moby Dick` by Herman Melville, genre: Adventure

5. Use `createSlice` to create the books slice with reducers for adding, updating, deleting, and sorting books.

6. Export the actions and the reducer.

### Step 10: Create the Preferences Slice

1. Inside the `slices` folder, create a file named `preferencesSlice.js`.

2. Import `createSlice` from `@reduxjs/toolkit`.

3. Define the initial state with the view preference (list or grid).

4. Use `createSlice` to create the preferences slice with a reducer for toggling the view.

5. Export the actions and the reducer.

### Step 11: Create the ID Slice

1. Inside the `slices` folder, create a file named `idSlice.js`.

2. Import `createSlice` from `@reduxjs/toolkit`.

3. Define the initial state with the currentId starting from the highest used ID (3 in this case).

4. Use `createSlice` to create the ID slice with a reducer for incrementing the ID.

5. Export the actions and the reducer.

### Step 12: Set Up the Redux Store

1. In your `src` directory, create a file named `store.js`.

2. Inside `store.js`, import `configureStore` from `@reduxjs/toolkit`.

3. Import the books, preferences, and id reducers from their respective slice files.

4. Use `configureStore` to create the store, passing in an object with the reducers.

5. Export the store.

### Step 13: Connect Redux Store to the App

1. In your `src` directory, open the `App.jsx` file.

2. Import `Provider` from `react-redux`.

3. Import the Redux store from `store.js`.

4. Wrap the content of the `App` component with the `Provider` component, passing the store as a prop to `Provider`.

5. Ensure that the `BrowserRouter` is nested inside the `Provider` component.

**Check**: Ensure that the application still renders without any errors.

Once you've connected the Redux store to the App component and confirmed it works correctly, you’re ready to move on to the next step.

### Step 14: Connect Components to Redux Store

#### BookList Component

1. In your `src/components` directory, open `BookList.jsx`.

2. Import `useSelector` from `react-redux`.

3. Import the `BookItem` component.

4. Inside the `BookList` function, use the `useSelector` hook to select the books from the Redux store.

5. Map over the books and render a `BookItem` component for each book, passing the book data as props.

6. Ensure the `BookList` function returns a `div` element that contains the list of `BookItem` components.

**Check**: Ensure the `BookList` component displays the list of books correctly using data from the Redux store.

Once you've connected the `BookList` component to the Redux store and confirmed it works correctly, you’re ready to move on to the next step.

### Step 15: Connect Components to Redux Store

#### BookForm Component

1. In your `src/components` directory, open `BookForm.jsx`.

2. Import `useDispatch` from `react-redux`.

3. Import the `addBook` action from `booksSlice.js`.

4. Import the `incrementId` action from `idSlice.js`.

5. Use the `useDispatch` hook to get the dispatch function.

6. Inside the `handleSubmit` function, dispatch the `addBook` action with the new book data.

7. Inside the `handleSubmit` function, dispatch the `incrementId` action to update the current ID.

**Check**: Ensure the `BookForm` component adds a new book to the Redux store and increments the current ID correctly.

Once you've connected the `BookForm` component to the Redux store and confirmed it works correctly, you’re ready to move on to the next step.

### Step 16: Update the Preferences Component

1. In your `src/components` directory, create a file named `Preferences.jsx`.

2. Create a function named `Preferences`.

3. Import `useSelector` and `useDispatch` from `react-redux`.

4. Import the `toggleView` action from `preferencesSlice.js`.

5. Use the `useSelector` hook to get the view preference from the Redux store.

6. Use the `useDispatch` hook to get the dispatch function.

7. Create a button to toggle the view. Inside the `onClick` handler of the button, dispatch the `toggleView` action.

8. Ensure the `button` text dynamically changes based on the current view preference.

9. Export the `Preferences` function.

**Check**: Ensure the `Preferences` component toggles the view preference correctly and that the button text updates based on the current preference.

Once you've updated the `Preferences` component and confirmed it works correctly, you’re ready to move on to the next step.

### Step 17: Add a Book Detail View

1. In your `src/components` directory, create a file named `BookDetail.jsx`.

2. Create a function named `BookDetail`.

3. Import `useSelector` from `react-redux`.

4. Import `useParams` from `react-router-dom`.

5. Use `useParams` to get the `id` parameter from the URL.

6. Use the `useSelector` hook to get the book with the matching `id` from the Redux store.

7. Inside the `BookDetail` function, return a `div` element that displays the book's title, author, genre, and other details.

8. Export the `BookDetail` function.

**Check**: Ensure the `BookDetail` component displays the details of the selected book correctly.

Once you've added the `BookDetail` component and confirmed it works correctly, you’re ready to move on to the next step.

### Step 18: Update Routing to Include BookDetail

1. In your `src` directory, open the `App.jsx` file.

2. Import the `BookDetail` component.

3. Update the `Routes` to include a route for `/book/:id` that renders the `BookDetail` component.

**Check**: Ensure that navigating to `/book/:id` displays the details of the selected book correctly.

Once you've updated the routing to include the `BookDetail` component and confirmed it works correctly, you’re ready to move on to the next step.

### Step 19: Add Functionality to Edit Books

1. In your `src/components` directory, open `BookDetail.jsx`.

2. Import `useDispatch` from `react-redux`.

3. Import the `updateBook` action from `booksSlice.js`.

4. Add state to the `BookDetail` function to manage the form inputs for editing the book details using `useState`.

5. Create an `onSubmit` handler to handle the form submission and dispatch the `updateBook` action with the updated book details.

6. Ensure the form inputs are pre-filled with the current book details.

7. Add a button to toggle between view and edit mode.

8. Export the `BookDetail` function.

**Check**: Ensure the `BookDetail` component allows for editing the book details and updates the book in the Redux store correctly.

Once you've added the functionality to edit books in the `BookDetail` component and confirmed it works correctly, you’re ready to move on to the next step.

### Step 20: Add Sorting and Filtering Functionality

1. In your `src/components` directory, create a file named `BookActions.jsx`.

2. Create a function named `BookActions`.

3. Import `useDispatch` and `useSelector` from `react-redux`.

4. Import the `sortBooks` action from `booksSlice.js`.

5. Use the `useDispatch` hook to get the dispatch function.

6. Use the `useSelector` hook to get the list of genres from the books in the Redux store.

7. Add a dropdown to select the sorting criterion (title or author). Inside the `onChange` handler, dispatch the `sortBooks` action with the selected criterion.

8. Add buttons to filter books by genre. Inside the `onClick` handler of each button, filter the books based on the selected genre.

9. Export the `BookActions` function.

**Check**: Ensure the `BookActions` component sorts and filters the books correctly.

Once you've added the sorting and filtering functionality and confirmed it works correctly, you’re ready to move on to the next step.

### Step 21: Finalize and Test the Application

1. Review all components and ensure they are connected to the Redux store correctly.

2. Test the application to ensure all features work as expected:
    - Adding a new book
    - Editing a book
    - Deleting a book
    - Viewing book details
    - Sorting books by title or author
    - Filtering books by genre
    - Toggling between list and grid views

3. Fix any bugs or issues that arise during testing.

**Check**: Ensure that the book collection manager application functions correctly and that all features work as expected.

Once you've finalized and tested the application, congratulations! You've completed the book collection manager assignment.
