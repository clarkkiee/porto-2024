import React from 'react';
import { Field, Formik } from 'formik';

function Form() {

    const handleSubmit = () => {

    }

    return (
        <div>
            <h1>MY FROM</h1>
            <Formik onSubmit={handleSubmit}>
                <Form>
                    <Field type="email" name="email" placeholder="Email" />

                </Form>
            </Formik>
        </div>
    )

}

export default Form;