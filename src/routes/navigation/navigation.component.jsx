import {Fragment} from "react";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux/es/hooks/useSelector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {selectIsCartOpen} from "../../store/cart/cart.selector";
import {selectCurrentUser} from "../../store/user/user.selector";

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import {signOutUser} from "../../utils/firebase/firebase.utils";

import {NavigationContainer, NavLink, NavLinks, LogoContainer} from "./navigation.styles";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>

                    {currentUser ?
                        <NavLink as={'span'} onClick={signOutUser}>Sign Out</NavLink> :
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