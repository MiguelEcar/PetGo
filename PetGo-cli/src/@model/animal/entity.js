import * as Yup from 'yup';


const newOid = {
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    category: '',
    birthDate: '',
    status: false,
};

const validation = Yup.object().shape({
    name: Yup.string()
        .min(2, 'This field must have at least 2 characters!')
        .max(100, 'This field may have max 100 characters!')
        .required('This field is required!'),
    description: Yup.string()
        .min(2, 'This field must have at least 2 characters!')
        .max(500, 'This field may have max 500 characters!')
        .required('This field is required!'),
    imageUrl: Yup.string()
        .min(2, 'This field must have at least 2 characters!')
        .max(1000, 'This field may have max 500 characters!')
        .required('This field is required!')
});

export const animal = {
    newOid,
    validation
}