import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Boilerplate</h1>
                </Link>
                <button className="btn btn--link" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchedToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchedToProps)(Header);