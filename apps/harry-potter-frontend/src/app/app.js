import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Route, Link } from 'react-router-dom';
// import Header from './component/Header';
import Characters  from  './container/Characters'

export function App() {
  return (
    <>
      <Route
        path="/"
        exact
        render={(props) => (
         <>
         {/* <Header/> */}
         <Characters/>
         </>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
  </>
  );
}

export default App;
