# What i learnt from this project?

## 1. How to create multi-page in vite-project without router

- Create folder outside `src/` directory
- make two new files in it: 1) index.html 2) main.jsx
- link main.jsx in script tag of index.html
- this will only work in development.
- for live, you have to configure code in vite.config.js so that in build process it will consider it as multi-page:
- for configuration code, refer this: https://vitejs.dev/guide/build#multi-page-app

## 2. How to enable routing in project

- `npm i react-router-dom`
- You **should** specify `<RouterProvider router={router} />` in root of application that is `main.jsx` or `App.jsx` of `src/`.
- It will not work, when you provide `RouterProvider` outside `src/` in any multi-page directory.
- Create `router` to pass in `RouterProvider`, you can make it using 2 method.
  ### 1st Technique
  ```js
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Dashboard />, // specify 'layout_file' here, and make sure that layout_file contains <Outlet /> at dynamic place, then only children content will be appear at that place.
      children: [
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "search",
          element: <Search />,
        },
      ],
    },
    {
      path: "/faviorates",
      element: <Faviorate />,
    },
  ]);
  ```
  ### 2nd Technique
  ```js
  const router = createBrowserRouter(
      createRoutesFromElements(
          // Always specify 'layout_file' at parent router, and make sure that 'layout_file' contains <Outlet /> at dynamic place. then only children content will be appear at that place.
          <Route path="/" element="">
          <Route path="" element={<App />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="faviorate" element={<Faviorate />} />
          </Route>
        </Route>
      );
  );
  ```
- Specify `<Outlet />` in layout_file where your dynamic content appear based on routes.

## 3. NavLink Tag use:
- You can use `isActive` only with `NavLink` to determine which link is active.
```js
<NavLink
  to={link}
  className={({ isActive }) =>
    `flex items-center gap-3 rounded-lg px-3 py-3 ${
      isActive ? "bg-muted text-primary" : "text-muted-foreground"
    } transition-all `
  }
  end
  // Refer to understand "end props": https://reactrouter.com/en/main/components/nav-link#end
  // problem is that when you redirect: dashboard/ then dashboard link become active.
  // but when you redirect: dashboard/services that time both link become active: 1) dashboard link and 2) services link, but i just want active service link
  // so, if you use "end" props that will help in it.
>
  Home
</NavLink>
```
