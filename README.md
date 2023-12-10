# How to test
1. Set url
- go to [vite.config.ts] file
- change url on server proxy
```
// your-domain is what you gave me for the test
server: {
  proxy: {
    "/api/SpectrumWS": {
      target: "wss://your-domain.net",
      changeOrigin: true,
      ws: true,
    },
    "/api": {
      target:
        "https://your-domain.net",
      changeOrigin: true,
      secure: false,
      ws: true,
    },
  },
},
```
2. npm i or yarn install
3. npm run dev or yarn dev
4. [optional] test code
- console only : npm run test or yarn test
- on screen : npm run test:open or yarn test:open

## Document is for Assignment and etc
- Assignment3.md : Feedback for backend.
- spec.md : This is what I searched and applied while doing this project. Of course, spec might be different from what Isar Aerospace use.

## Develop environment
- View library : React
- Languages : Typescript, HTML, CSS
- Bundler : Vite
- State management : Basic hooks, React-query
- Style library : styled-components
- Test library : cypress

### library
- axios : REST API request
- chart.js : altitude chart
- chart-adapter-dayjs-3 : chart js time series adapter
- chartjs-plugin-annotation : chart js show range
- dayjs : time series util
- react-chartjs-2 : chart js wrapped for React
- react-customizable-progressbar : speed meter
- react-query : state management
- react-router-dom : routing
- styled-components : CSS in JS
- cypress : testing

## Folder structure
### cypress
- test code

### public
- assets/data : mock data to test
- assets/img : image and icon

### src
- globalStyles.ts : styled-components global css
- index.tsx : entry point

#### components
- Altitude : line grapgh, table
- Button : common button
- Direction: to show isAscending
- Loading : loading indicator
- MessageBar : status message
- Speed : speed meter(velocity without direction)
- StatusMonitor : all components
- Temperature : temperature

#### hooks
- useAltitude : altitude component logic
- useLive : live data logic
- useTemperature : temperature component logic

#### models
- statusModel : data from server

#### routes
- batch : status monitor with single request by REST API
- live : status monitor with socket

#### services
- api : axios basic setting
- StatusApi : status api
- StatusSocket : status socket

#### utils
- constants : constants
- routeUtil : react-router-dom util