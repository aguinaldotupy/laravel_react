import React, { Component } from 'react';
import style from './style.scss';
import { Link } from 'react-router-dom';

class Welcome extends Component {
    render() {
        return (
            <div className={style.welcome}>
                <div className="content">
                    <div className="title">Faça o seu app</div>
                    <div className='links'>
                        <Link to="/page1" className="link">Crie a page 1</Link>
                        <Link to="/page2" className="link">Crie a page 2</Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default Welcome;
