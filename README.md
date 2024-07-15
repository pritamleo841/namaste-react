# Episodes Covered -
1. Inception
2. Igniting our App
3. Laying the foundation
4. Talk is cheap, show me the code


# Parcel
- Dev build
- Local server
- HMR => Hot Module Replacement ( Automatic refresh of browser upon file saving)
- File Watching Algorithm - written in C++.
- Faster builds due to caching as .parcel-cache
- Image Optimization
- Minification of files, bundling of files
- Compresses your code
- Consistent hashing
- Code Splitting
- Differential Bundling
- Error handling
- Diagnostics
- Supports HTTPs
- Tree shaking ( removes unused code )
- Different builds for dev and production

# Two types of export/import
- Named Export 
    export const NAME;
    import {NAME} from 'path'
- Default Export
    export default NAME
    import NAME from 'path'

# React Hooks
- Normal Javascript utility functions
- useState() - superpowerful state variable
- useEffect()

# Two types of routing in web apps
- Client side routing(SPA)
- Server side routing

# Phases of contructor-render-componentDidMount cycle for parent and child1,child2 [Class component only]

- Parent Ctor
- Parent render
   - child1 ctor
   - child1 render
   - child2 ctor
   - child2 render
   - child1 did Mount
   - child2 did Mount
- Parent didMount

# Phases of contructor-render-componentDidMount-componentDidUpdate-componentWillMount for a parent and child1,child2 [Class component only]

- Parent Ctor
- Parent render
  - child1 Ctor
  - child1 render
  - child2 Ctor
  - child2 render
- Parent componentDidMount
  - child2 componentDidMount
  - child2 render
  - child2 componentDidUpdate

  - child1 componentDidMount
  - child1 render
  - child1 componentDidUpdate

  - child1 componentWillMount
  - child2 componentWillMount

  # Lazy loading (Also known as)
  - On demand loading
  - Code spilliting
  - Dynamic bundling
  - Dynamic import

  # Redux toolkit

  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect out store to our app
  - Create a Cart Slice
  - Dispatch action
  - Read data using Selector

  # Types of testing (developer)
- Unit Testing
- Integration Testing
- End to End Testing(requires tools)

# Setting up testing in out app 
- Install React testing library
- Installed Jest
- Installed babel dependencies for using jest with babel
- Configure babel in out app
- Configure parcel config to disable default babel transpilation
- Jest configuration(npx jest --init)
- install jsdom library (because jest version > 28)
- __add__ => dundar method