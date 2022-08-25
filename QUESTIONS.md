1. What is the difference between Component and PureComponent? give an
   example where it might break my app.

  I don't remember exactly, but as far as I remember, it has something to do with lifecycle events and component update logic.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
   that?

  Context creates a separate global state that allows children components to access information stored in the contexts global state.
  When you use ShouldComponentUpdate, the changes made in context will not trigger re-render if you depend on the ShouldComponentUpdate to trigger.

4. Describe 3 ways to pass information from a component to its PARENT.

  1- Through the use of functions passed from the parent to the child, the child can call the function with a payload.
  2- A parent can pass down a setter created from the useState directive, which then the child can call in order to update the parent state.
  3- Through an observer like object, like the one in RxJs library, or through a global store action dispatch like Redux.

6. Give 2 ways to prevent components from re-rendering.

  1- useMemo
  2- useCallback

8. What is a fragment and why do we need it? Give an example where it might
   break my app.

  Fragment is a way to group a set of tags without the need to inject another node in the DOM.
  Internally, react needs a single point (a root) for a component to be rendered in the DOM, so for example 2 divs without a root node, are invalid JSX,
  a fragment can act as this wrapper, again, without needing to insert another node in the DOM.
  In some cases, it might render invalid html.


10. Give 3 examples of the HOC pattern.

  1- For example, when you have a project with a 'pages' folder, and you have your 'ui' or 'components' library, you hold all the interation logic, for example
  the fething of data, observer subscription, etc, in the high order component, which is then responsible to distribute the data to its children, which are only
  representational, or dumb components.
  
  2- When you have an authentication component that is responsible for hydrating its children with user session data

  3- When you need to wrap some pages with monitoring tools like Sentry, generally they provide some kind of wrapper HOC so your components can send events to their service.

12. what's the difference in handling exceptions in promises, callbacks and
    async...await.

    Javascript achieves asynchronous behavior by using callbacks.
    Before promises (remember bluebird?), you would supply a callback function to be called once a function would have completed its job.
    A standard is to provide a callback function with the signature (err, payload), where the first param err would be any error object that your function would have returned.
    The second argument was always the result of the successful conclusion of the function call.

    In promises, you have the .then() and .catch() blocks, where the then() block is called once the promise is resolved (generally by calling Promise.resolve), if a function
    resolved, then the control flow would go through the .then() block. In the case that the promise is rejected (Promise.reject), the control flow would go through the .catch() block.
    Signaling that there was an error thrown at some point.

    async/await works the same way as promises, as async/await uses promises under the hood, the difference is that you can have try/catch blocks in your code,
    just like normal blocking code. In the case there is an error thrown inside an async/await block, the control flow will go through the respective try/catch blocks,
    making the code more readable.

13. How many arguments does setState take and why is it async.
    
    setState takes one argument, which is either an object or a function. It is asynchronous because, at least at the time React was written,
    proxies didn't exist, making difficult to implement change detection through reflection by using proxies. Internally, react uses setState in order to
    resolve any changes it needs to make in the DOM, it is asynchronous because it has to schedule these changes to happen outside the main thread (the callstack in the event loop).

14. List the steps needed to migrate a Class to Function Component.
    
    In modern react (16+), you would need to port over the lifecycle event handlers inside the class (shouldComponentUpdate, destroy, etc) to use hooks. You would also need to refactor
    the code to put any side effects inside the useEffect hook. Move all the state and setState calls to use the useState hook, and so on.

15. List a few ways styles can be used with components.

    With styled components, where the css style is injected in style properties in the html tags through the use of normal javascript objects.
    With normal css styles being applied with the use of some bundler (eg: webpack) in order to load the styles and add them to the html page.

16. How to render an HTML string coming from the server.
  
    You could use a react primitive like React.createElement() where the first argument is the html tag in string format, and then provide the rest of the props to it.
