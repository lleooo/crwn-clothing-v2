import {useState} from "react";
import FormInput from "../form-input/form-input.component";

import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

const defaultDFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultDFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetForm = () => {
        setFormFields(defaultDFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password do not same");
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
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
        <div>
            <h1>Sign up with email</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display name" type="text" onChange={handleChange} name="displayName" value={displayName} />
                <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} />
                <FormInput label="PassWord" type="password" onChange={handleChange} name="password" value={password} />
                <FormInput label="Confirm PassWord" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <button type="submit">Sign up</button>
            </form>
        </div>
    );
};

export default SignUpForm;