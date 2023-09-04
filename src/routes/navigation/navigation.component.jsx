import {Fragment} from "react/cjs/react.production.min";
import {Outlet, Link} from "react-router-dom";

import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link to='/'>
                    <div>logo</div>
                </Link>
                <div className="nav-links-container">
                    <Link to='/signIn'>
                        signIn
                    </Link>
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default Navigation;