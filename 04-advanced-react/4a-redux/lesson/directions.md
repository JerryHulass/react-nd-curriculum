# Redux

Planned steps for more full version of this lesson:

### Lifting State and Prop Drilling

- Start with the todos app with todos and username preferences state managed in `TodoContainer`.
- Lift state to `App`, and drill it down through `TodoContainer`. (Possibly adding it to Footer and Header, if we don't want it already in there.)
- Discuss the challenge of maintaining this through a larger app. (Possibly include a larger app example to show the challenge here.)

### Redux Setup

Probably skip this!

Have them already set up with:

- the store
- an action
- an initial state
- the reducer function with a case for that action
- a dispatcher tied into the action
- show them the dev tools

### Reducer

- Add a second action and case to the reducer.
- Use the dispatcher to dispatch that action from a component.
- Show how the state changes in the Redux DevTools.
- Give them a couple more examples.
- Challenge them to finish the reducer with a few more actions.
