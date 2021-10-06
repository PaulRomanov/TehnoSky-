import { BrowserRouter as Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MainPage from '../MainPage/MainPage';


const PagesAll = () => {
  const location = useLocation();

  return (
    <div className="pages">
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="page" key={location.key}>
          <Switch location={location}>
            <Route exact path="/">
              <MainPage />
            </Route>
            {/* <Route exact path="/about">
              <About />
            </Route>
            <Route path="/details/:title">
              <Details />
            </Route>
            <Route path="/error">
              <NotFound />
            </Route>
            <Redirect to="/error">
              <NotFound />
            </Redirect> */}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default PagesAll;