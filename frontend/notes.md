# Nested Router

## 1st Technique

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

## 2nd Technique

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
