let defaultDFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const a = {
    displayName: 'aa',
    email: 'aaaa',
    password: 'aa',
    confirmPassword: 'aa'
};

console.log({...a, email: 'bbbb'});
