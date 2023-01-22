import { Formik, Form, Field,ErrorMessage } from "formik";
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const initialValues = {
    name: '',
    number:'',
};
const schema = yup.object().shape({
    name: yup.string().required(),
    number:yup.number().required(),
});

const FormikForm = ({onSubmit}) => {
    const hendleSubmit = ({ name, number }, actions) => {
        let id = nanoid();

        let person = { id: id, name: name, number: number };
        onSubmit(person);
        actions.resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={hendleSubmit} validationSchema={schema}>
            <Form >
                <label >Name
                    <Field 
                        type="text"
                        name="name"
                        placeholder="FormikForm"
                        required
                    />
                    <ErrorMessage name="name" component="div" />
                </label>
                <label>Number
                    <Field 
                        type="tel"
                        name="number"
                        placeholder="FormikForm"
                        required
                    />
                    <ErrorMessage name="number" component="div" />
                </label>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};
FormikForm.propTypes = {
    onSubmit:PropTypes.func.isRequired,
};

export default FormikForm;