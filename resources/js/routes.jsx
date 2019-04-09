import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import Welcome from './components/welcome/welcome';

const Routes = () => (
    <Router>
        <div>
            <Route exact path={'/'} component={Welcome} />
        </div>
    </Router>
)

export default connect(
    state => ({

    })
)(Routes);
