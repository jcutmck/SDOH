import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
//import * as yup from 'yup';
import { SubmitButton } from '../components/Button';
import { TextField } from '@mui/material';


const UtForm = () => {
    /*
    const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    });
    */
    const WithMaterialUI = () => {
    const formik = useFormik({
        initialValues: {
        email: 'foobar@example.com',
        password: 'foobar',
        },
    //   validationSchema: validationSchema,
        onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <h1 className="py-2">This is the Form Page - v0.01</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="py-2">
                    <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    />
                </div>
                <div className="py-2">
                    <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    />
                </div>
                <div>
                    <SubmitButton text="Submit"/>
                </div>
            </form>
        </div>
    );
    };

    ReactDOM.render(<WithMaterialUI />, document.getElementById('root'));
}

export default UtForm;
