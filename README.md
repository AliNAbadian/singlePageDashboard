Simple Client-Side Router
This is a simple implementation of a client-side router in JavaScript. It allows you to define routes for your web application and display different views based on the current URL path.

Installation
There is no installation required for this router. Simply include the JavaScript file in your HTML document and call the router function to initialize it.

Usage
To define a route, add an object to the routes array. The object should have a path property that specifies the URL path for the route and a view property that specifies the view to render for that path. For example:

javascript
Copy code
const routes = [
{ path: "/", view: Dashboard },
{ path: "/posts", view: Posts },
{ path: "/settings", view: Settings }
];
In the above example, the Dashboard, Posts, and Settings modules are imported from separate files. These modules should contain the code for rendering the corresponding views.

To navigate to a different route, call the navigateTo function with the URL path as the argument. For example:

scss
Copy code
navigateTo("/posts");
This will update the URL path in the browser and render the Posts view.

The router function is called automatically when the DOMContentLoaded event is fired. It will render the view for the initial URL path.

The router also listens for the popstate event, which is fired when the user navigates to a different URL using the browser's back or forward buttons. When this event is fired, the router function is called to render the view for the new URL path.

License
This client-side router is released under the MIT License. See LICENSE for details.
