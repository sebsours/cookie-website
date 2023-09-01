### Cookies Inc

# What it is

A website to mimic a cookie company selling their selection of cookies and more. Users are able to
view the websites selection and select whatever item they wish to buy. Items are added to their cart
which displays the number of items a user picked on the navbar.
Once they are ready to place their order, users can click the shopping cart to review their order
and input the necessary information to place the order (No real data is stored anywhere and any dummy
data can be inputted for the purposes of the demo). Once the order is placed, users will receive
confirmation that the order was placed, and the website will reset its state.

# Technologies Used

Built on top of Vite, this website uses React and TypeScript. TailwindCSS was used for styling components and
I used a UI library called Material Tailwind for some components such as the Carousel.

Lastly, there is a json file inside the assets folder that holds the majority of the website's selection
of items. This was used so I didn't have to continously copy code to build each card component and to mimic
api behavior.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
