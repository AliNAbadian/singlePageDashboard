// console.log("ss");

const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("Dashboard") },
    { path: "/posts", view: () => console.log("Posts") },
    { path: "/settings", view: () => console.log("Settings") },
  ];

  //Test Route

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  console.log(potentialMatches);
};

document.addEventListener("DOMContentLoaded", () => {
  router();
});
