# Create-react-app-three-js
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and implements [Three.JS](https://threejs.org/) functionality. This projects also references the [Three.JS Crate texture](https://threejs.org/examples/textures/crate.gif).

This projects aim is to help solve the following problems encountered when integrating Three.JS within React. 
- [Attempted import error: 'CSS3DObject/CSS3DRenderer' is not exported from 'three' (imported as 'THREE').](https://github.com/mrdoob/three.js/issues/16095)
- [How to use THREE.CSS3DRenderer in angular2](https://stackoverflow.com/questions/41279071/how-to-use-three-css3drenderer-in-angular2)

## Instructions
The instructions are the same commands typical with create-react-app

### Development 
- Checkout the repo into `/create-react-app-three-js`
- `cd /create-react-app-three-js`
- `yarn install`
- `yarn start`
- Go to `http://localhost:3000/`
- Go to `http://localhost:3000/css` to play with the CSS renderer, or `http://localhost:3000/webgl` to see the WebGL implementation
- `yarn build` to see the exported distribution

### Build
- `cd build`
- `http-server` (npm install -g http-server)
- Go to `http://127.0.0.1:3000/` to see the distribution being served

