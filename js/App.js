import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/query';
import QueryPage from './containers/QueryPage';

const store = createStore(reducer);

class App extends React.Component {
    render() {
        return (
          <Provider store={store}>
            <QueryPage />
          </Provider>
        );
    }
}

export default App;
