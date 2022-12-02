# Homework

Here is sample code that is not by far ideal.

1. Refactor code to production-grade quality.
2. Find and describe bugs and issues.
3. Add styling by your choice. (You can add styling library)
4. Demonstrate connection to backend API.
5. Add Todo detail page (add routing to app, use context api for state managment from fetch todos to render todos and detail)
6. Todo component has defined shouldComponentUpdate lifecycle, but it can be done better, adjust it
7. Optional: rewrite Todo component to FC (choose if you want, prepare explanation)

# Solution

![todo-list](/screenshots/todo-list.png)

![detail](/screenshots/detail.png)

1. Created create-react-app with command `npx create-react-app todo-list --template typescript`.
2. In `App.tsx` was neverending rerendering of data after each change. `window.location.href` with `handleOnClick` reloaded browser window always.
3. Added `styled-components`.
4. Used `mockapi.io` for creating API data, called with `fetch` in `App.tsx` file.
5. Found in `src/components/TodoDetail.tsx`.
6. It not needed to have `shouldComponentUpdate` in this component.
7. All components were rewritten to functional components.