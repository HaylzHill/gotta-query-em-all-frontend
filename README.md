# gotta-query-em-all-frontend

### Running locally

_Install packages_
```bash
npm install
```

_Run development server (vite)_
```bash
npm run dev
```

> **note** - best practice is to run this frontend alongside [The GraphQL API](https://github.com/JonShort/gotta-query-em-all), however by default it will run against the hosted API

### Setting development environment variables
To override or add to the values in `.env`, add your own `.env.[mode].local` file

* Local development - `.env.development.local`
* Production build - `.env.production.local`

