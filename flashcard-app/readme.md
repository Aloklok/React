#Flash card app demo
####tags: React,Redux,ES6,express

####display:[flash card demo](https://flashcard-app-alok.herokuapp.com/)
# Features
1. **Create decks and cards**
1. **Search cards in a deck**
1. **Study Mode applied the method of spaced repetition**

# Learning Process
1. Use redux to combine the (reducers)[https://github.com/Aloklok/react/blob/master/flashcard-app/src/reducers.js] into one state tree called store

1. Use (react-redux)[https://github.com/reactjs/react-redux] to globally pass parts of state tree and actions as props to the components.
It avoides making extra work to pass state through nested components,at the same time turn presentational component into a container component.

1. As mentioned above,(presentational component and container component)[https://medium.com/@learnreact/container-components-c0e67432e005#.llyv729ol] are seperated,at this point we can reuse the presentational component.
more info : (smart-and-dumb-components)[https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.b74468pn0]

1. Use (react-router)[https://github.com/ReactTraining/react-router] to keeps UI in sync with the URL,since the components need the parameters of URL to deal with data,
Use (react-router-redux)[https://github.com/reactjs/react-router-redux] keep a copy of the current location hidden in state,so we can fetch the the URL object in every container component.

1. Use (express)[http://expressjs.com/] as a server to store data. 
