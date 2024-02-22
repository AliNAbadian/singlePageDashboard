# Simple SPA Router

This is a simple Single Page Application (SPA) router implemented in JavaScript. It enables navigation between different views without reloading the entire page.

## Usage

1. Clone or download this repository.

2. Include the `router.js` file in your project.

3. Define views for your application in separate files (`Dashboard.js`, `Posts.js`, `Settings.js`).

4. Use the `navigateTo(url)` function to navigate to different paths programmatically.

5. Initialize the router using the `router()` function.

## Example

```javascript
import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/posts", view: Posts },
    { path: "/settings", view: Settings },
  ];

  const currentPath = location.pathname;

  const { view } =
    routes.find((route) => route.path === currentPath) || routes[0];
  const content = new view();
  document.querySelector("#app").innerHTML = await content.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
```

### Notes

1.  Views should have a getHtml() method returning the HTML content.
2.  The router matches the current URL path to a defined route and renders the corresponding view.
3.  Customize routes according to your application's needs.
