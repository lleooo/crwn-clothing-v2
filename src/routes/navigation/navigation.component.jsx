import {Fragment} from "react";
import {useDispatch} from "react-redux";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux/es/hooks/useSelector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {selectIsCartOpen} from "../../store/cart/cart.selector";
import {selectCurrentUser} from "../../store/user/user.selector";

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import {NavigationContainer, NavLink, NavLinks, LogoContainer} from "./navigation.styles";
import {signOutStart} from "../../store/user/user.action";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();

    const signOutHandler = () => {
        dispatch(signOutStart());
    };

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>

                    {currentUser ?
                        <NavLink as={'span'} onClick={signOutHandler}>Sign Out</NavLink> :
                        <NavLink to='/auth'>
                            Sign In
                        </NavLink>
                    }
                    <CartIcon></CartIcon>
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default Navigation;