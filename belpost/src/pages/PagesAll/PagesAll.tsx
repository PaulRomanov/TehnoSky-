import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import About from '../About/About';
import MainPage from '../MainPage/MainPage';
import NotFound from '../NotFound/NotFound';
import AdministrativePage from '../AdministrativePage/AdministrativePage';

const PagesAll = () => {
  const location = useLocation();

  return (
    <div className="pages">
      <TransitionGroup>
        <Switch location={location}>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/administrative">
            <AdministrativePage />
          </Route>
          <Route exact path="/management">
            <NotFound />
          </Route>
          <Route exact path="/appointmentSchedule">
            <NotFound />
          </Route>
          <Route exact path="/structure">
            <NotFound />
          </Route>
          <Route exact path="/ContentAbout">
            <About />
          </Route>
        </Switch>
      </TransitionGroup>
    </div>
  );
};

export default PagesAll;
