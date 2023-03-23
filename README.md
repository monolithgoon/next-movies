
# next-movies

This is a Movies App built using Next.js and [The Movie Database (TMDB)](https://www.themoviedb.org/) API. 

![next-movies-1](https://user-images.githubusercontent.com/60096838/227189097-92b085be-e81d-4478-a813-87297c26f52a.png)

## Demo

A [live deployment](https://movies.zaps.dev) of this app is available to try it out.

## Contributing

Contributions are always welcome! 

For large changes, please file an issue to discuss your proposed changes with us before working on a PR :)

## Installation 

Clone and install the dependencies for `next-movies` locally:

```bash 
  git clone https://github.com/tastejs/next-movies.git
  cd next-movies 
  npm install
```

## Quick setup

1. Take a copy of .env.local.example and re-name to .env.local
2. Get your TMDb API key
3. Get your TMDB API read access token
4. Enter the details into the .env.local file
    
## Running locally

* `npm run dev`: dev build
* `npm run build`: production build
* `npm run static-build`: production static build
* `npm run start`: start the project
* `npm run vercel-deploy`: deploy to vercel
* `npm run netlify-deploy`: deploy to netlify 
* `npm run analyze`: bundle analysis 
* (`analyze:server` and `analyze:browser` are available too)

## Tech Stack

Built with:

* Next.js
* Redux and Redux Thunk
* react-glider
* react-lazyload
* react-modal-video
* react-scroll
* react-select-search
* redaxios
* use-dark-mode
* @artsy/fresnel
* @loadable/component


Based on the original `create-react-app` foundation by [@fidalgodev](https://github.com/fidalgodev/movie-library-react).

  
## License

[MIT](https://choosealicense.com/licenses/mit/)
