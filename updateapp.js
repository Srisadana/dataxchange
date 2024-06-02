import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import UploadDataProduct from './components/UploadDataProduct';
import DataCatalog from './components/DataCatalog';

function App() {
    return (
        <Router>
            <div>
                <h1>DataTradeHub</h1>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/upload" component={UploadDataProduct} />
                    <Route path="/catalog" component={DataCatalog} />
                    <Route path="/" component={DataCatalog} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
