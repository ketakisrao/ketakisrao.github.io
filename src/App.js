import React from 'react';
import './App.scss';
import ButtonAppBar from './Components/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop';
import About from './About/';
import Portfolio from './Portfolio/';
import EDU from './EDU/';
import PIT from './PIT/';
import LRM from './LRM/';

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                    <ButtonAppBar></ButtonAppBar>
                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={Portfolio}>
                            </Route>
                            <Route path="/about" component={About}>
                            </Route>
                            <Route path="/EDU" component={EDU}>
                            </Route>
                            <Route path="/PIT" component={PIT}>
                            </Route>
                            <Route path="/LRM" component={LRM}>
                            </Route>
                        </Switch>
                    </div>
            </Router>
        </div>
    );
}

export default App;
