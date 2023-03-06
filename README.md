## Installation

The project was set up with using [pnpm](https://pnpm.io) package manager. It should work fine with npm as well.

To install the dependencies, run

> pnpm run install

## Bootstrap

To start the application, run:

> pnpm run start

The application should be available on your localhost.

## Production build

> pnpm run build

### To preview production build locally

> pnpm run preview

## Solution

The project is set up with Vite, React.JS, @reduxjs/toolkit, Jest and axios. Out of these, this was my (almost) first time
using Vite and @reduxjs/toolkit.

### Naming conventions

I followed naming conventions familiar to me. 
- shared components goes to src/components,
- pages goes to src/pages
  - subcomponents private to this specific page goes to \<page>/components
- globl types goes to src/types
- global helpers goes to src/helpers

### Possible update opportunities

As of the limitation of time - and using some tools for the first time - I have not implemented maybe every nitty-gritti details.

Tests can be more extensive - I tried to cover the most important parts of the application.

Reduxjs/toolkit naming and folder convention can be improved based on some best practices.

Test setup can be unified.

Flag management (for countries itself then) can be improved.
