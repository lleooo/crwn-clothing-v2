import {useState} from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.components";

import {
    signInWithGooglePopup,
    sigInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";


import './sign-in-form.style.scss';
import '../button/button.styles.scss';

const defaultDFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultDFormFields);
    const {email, password} = formFields;

    const resetForm = () => {
        setFormFields(defaultDFormFields);
    };

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await sigInAuthUserWithEmailAndPassword(email, password);
            resetForm();
            console.log('success');
        } catch (error) {
            console.log(error);
        }

    };
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };

    return (
        <div className="sign-in-container">
            <h2>Already have an account ?</h2>
            <span>Sign in with email</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} />
                <FormInput label="PassWord" type="password" onChange={handleChange} name="password" value={password} />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" button_type="google" onClick={logGoogleUser}>sign in with google</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;;