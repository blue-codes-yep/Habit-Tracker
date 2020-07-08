import { Form, Field, Formik } from 'formik';

const HabitForm = ({ setHabits }) => {
    return (
        <Formik
            initialValues={{
                habit: ''
            }}
            onSubmit={data => {
                console.log(data)
                setHabits(prevState => [...prevState, data.habit])
            }}
        >

            <Form>
                <Field name='habit'></Field>
                <button type="submit">Submit</button>
            </Form>

        </Formik>


    )
}

export default HabitForm;