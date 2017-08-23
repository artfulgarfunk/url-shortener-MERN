# Conveniently Abbreviated
A URL Shortener made with a MERN Stack (MongoDB, Express, React.js and Node.js)

## Design
A single page app where a user inputs a link and receives a different URL in return, which when visited will redirect them to the original inputted url. As the app is deployed on heroku, the URL is particularly long so it may in fact be a URL Lengthener. This was built for fun to get to grips with the MERN stack.

The program was carefully structured, with distinctly separate concerns for each part. There's a component for inputting information, another for displaying it, another for storing it and so on.
Container.jsx is the only component with state, and doesn't render anything itself directly. Instead it passes the information from forms and so on through props to the other child components.

This was an interesting build because instead of using a web MVC framework with strong conventions and "magic" such as Rails or Django, I had to build each individual part. Although the core concept is simple this has a couple of nice features such as dynamically generated React components, stateless functional components and asynchronous calls to the server.
As a result I understand every line of code within the app (except for node_modules of course!).

Check out the demo on [Heroku](https://conveniently-abbreviated.herokuapp.com/)

## User Stories
As a user, so I can save characters for tweeting, I can input a long URL and receive a short URL

As a user, so I can't tweet dead links, I can't input an invalid URL

As a user, if I input the same link more than once, I'll receive the same short URL

As a user, I can see the number of times a short URL has been visited

## Next Steps
- Styling - predominantly React Boostrap will be used
- Incorporate MongoDb - the app currently uses an array on the server to store information. This would allow more data to be stored, as well as other features like checking for duplication.
- Add in error handling for various edge cases
- Format the dates for each URL
- Add feature for showing the number of times a short URL has been visited
- Complete test suite

## Build Technologies
- MongoDB
- Express
- React
- Node
- React Bootstrap
- Valid URL Node Package

## Test Technologies
- Sinon
- Chai
- Mocha
- Enzyme

## Run
- Clone this repository
- `$ npm run compile`
- `$ npm start`
- Visit localhost://5000 in your browser

## Test
- `$ npm test`
