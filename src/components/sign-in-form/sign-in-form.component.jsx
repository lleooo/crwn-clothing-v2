import {useState} from "react";
import {useDispatch} from 'react-redux';
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.components";

import {SingInContainer, ButtonContainer} from './sign-in-form.style';

import {BUTTON_TYPE_CLASSES} from "../button/button.components";
import {googleSignInStart, emailSignInStart} from "../../store/user/user.action";

const defaultDFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultDFormFields);
    const {email, password} = formFields;
    const dispatch = useDispatch();

    const resetForm = () => {
        setFormFields(defaultDFormFields);
    };

    const logGoogleUser = () => {
        dispatch(googleSignInStart());
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
            resetForm();
        } catch (error) {
            console.log(error);
        }

    };
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    return (
        <SingInContainer>
            <h2>Already have an account ?</h2>
            <span>Sign in with email</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} />
                <FormInput label="PassWord" type="password" onChange={handleChange} name="password" value={password} />
                <ButtonContainer>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" button_type={BUTTON_TYPE_CLASSES.google} onClick={logGoogleUser}>sign in with google</Button>
                </ButtonContainer>
            </form>
        </SingInContainer>
    );
};

export default SignInForm;;