# State And Props Assignment - Firehouse

In this assignment, you will build a simple React application that displays a list of firehouses and shows details of the selected firehouse. You will practice managing state in React and passing data between components using props.

## Set Up And Run A New React App

1. Open the terminal to the `assignment` directory--the simplest way to do so is to right-click on the `assignment` folder in VS Code and select "Open in Integrated Terminal".

2. In the terminal, type `npm create vite .` and hit enter/return. The `.` is important--this will create a new Vite project in the current directory.

3. It will warn you that there are files here currently. Use the arrow keys and Enter/Return to select "Ignore files and continue". This allows us to keep our readme and any data/assets files we have in our new project folder.

4. Choose React and then JavaScript from the following menus, using arrow keys and Enter/Return.

5. Install dependencies by entering `npm install` in the terminal.

6. Run the app by typing `npm run dev` in the terminal. This will provide a clickable link to open the app in your default browser, or you can navigate to the localhost URL in your browser.

## Move Data Into The Project

Our `firehouses.json` file should be in the `data` folder in this directory. You will need to move this file into the `src` folder of your new project.

## Components

You will work with the following components:

1. `App.jsx`
2. `House.jsx`
3. `HouseList.jsx`
4. `CurrentHouse.jsx`

You may make additional components for the bonus tasks if you wish.

## Step 1: Create and Render the `House` Component

1. **Create the `House` Component**:
   - Create a new file named `House.jsx`.
   - Create a functional component in it. Don't forget to export!
   - We'll be using `props.house` and `props.selectHouse` in this component. Keep in mind that `house` will be an object and `selectHouse` a function, but you don't have to make those values--they'll be passed in as props when this component is rendered. Just treat them as if they _will_ have those values, and, soon, sure enough, they will.
   - Render the house name (`props.house`) inside a list item (`<li>`). For where the name is on the `house` object, see `firehouses.json`
   - Add an `onClick` event to the house name that calls the `selectHouse` function (`props.selectHouse`) with the `house` object as an argument. You'll need to use an anonymous function in order to pass the `house` to `selectHouse`.

2. **Render a `House` Component in `App.jsx`**:
   - Import the `House` component into `App.jsx`.
   - Import the `firehouses.json` data. If you have `firehouses.json` in the `src` folder, you can use the following line to do so: `import firehouses from "./firehouses.json";`
   - Create a `selectHouse` function in `App.jsx` that, for now, just logs a house (its argument) to the console.
   - Render a single `House` component in `App.jsx`, passing it a sample house object (maybe the first house in the array) and the `selectHouse` function as props.

**Check**: You should see the name of the house rendered in the browser. Clicking on the house name should call the `selectHouse` function (you can confirm this with a `console.log` statement).

## Step 2: Create and Render the `HouseList` Component

1. **Create the `HouseList` Component**:
	- Create a new file named `HouseList.jsx`.
	- Create a functional component in it. Don't forget to export!
	- Import the `House` component.
	- Our `HouseList` component will receive a list of houses and a `selectHouse` function as props, once we're rendering it. We can use those props in this component, but we don't have to make them--they'll be passed in when we render this component.
	- Iterate over the list of houses and render a `House` component for each house.
	- Pass the `house` object and `selectHouse` function as props to each `House` component.

2. **Render the `HouseList` Component in `App.jsx`**:
	- Remove the rendering of the single sample house from the previous step.
	- Import the `HouseList` component into `App.jsx`.
	- Render the `HouseList` component in `App.jsx` with the following 2 props: the full list of houses from the `firehouses.json` file and the `selectHouse` function.

**Check**: You should see a list of houses rendered in the browser. Clicking on any house name should call the `selectHouse` function. (You can confirm this by seeing what's logged from our `selectHouse` function.)

## Step 3: Create and Render the `CurrentHouse` Component

1. **Create the `CurrentHouse` Component**:
   - Create a new file named `CurrentHouse.jsx`.
   - This component should receive the currently selected `house` as a prop.
   - If no house is selected (`props.house` is `null`), render a message prompting the user to select a house.
   - If a house is selected, render the full details of that house--name, address, and borough. Check the `firehouses.json` file for the structure of the house object.

2. **Render the `CurrentHouse` Component in `App.jsx`**:
   - Import the `CurrentHouse` component into `App.jsx`.
   - Render the `CurrentHouse` component in `App.jsx` at the top with a single house from anywhere in the array.

**Check**: You should see either a prompt to select a house or the details of the selected house rendered in the browser.

## Step 4: Manage State in `App.jsx`

1. **State Management**:
   - Create two pieces of state using `useState`:
     - `house`: This will store the currently selected house.
     - `houses`: This will store the list of houses from the `firehouses.json` file--this will be useful if you want to add a filter or sort feature later, and it's also the model we'd want to use if we were getting the data from an API.

2. **State Initialization**:
   - Initialize the `house` state to `null`.
   - Initialize the `houses` state with the `firehouses` data.

3. **Functions**:
   - `selectHouse(house)`: Change this function from logging to updating the `house` state with its argument.

4. **Pass State and Functions as Props**:
   - Pass the `house` state to the `CurrentHouse` component as a prop.
   - Pass the `houses` state and `selectHouse` function to the `HouseList` component as props.

**Check**: You should see the list of houses rendered in the browser. Clicking on any house name should update the selected house, and the details of the selected house should be displayed.

### Bonuses

- Allow the user to filter by borough. You can create some simple buttons with click listeners that change the state variable for your firehouses. The click listeners should live in App.jsx, so that they can change state. You should also have a function to reset the firehouses back to their original state.
- Sort the firehouses. Create a button with an event listener that sorts them by name. That listener should live in App.jsx, and you should have a function to reset the sorting back to the original state.
- Sort the firehouses by Engine/Ladder/Squad etc. number (whichever comes first).
- Style the app. Feel free to use Bootstrap or another component library, but, either way, make the FDNY glimmer like FIRE!!!!!

![Elmo celebrating fire](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjJoeWd2dzR1Ym55a3FqcXQ1aTAyMjVtaTUxYWk1OHJ4NWRsd3JuaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yr7n0u3qzO9nG/giphy.gif)
