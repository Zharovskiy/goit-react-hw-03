import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const ContactForm = ({ handleSubmit }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required")
      .min(3, "Too Short!")
      .max(50, "Too Long!"),
    number: Yup.number()
      .required("Required")
      .min(3, "Too Short!")
      .max(9999999999, "Too Long!"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" as="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field type="number" name="number" id={numberFieldId} />
        <ErrorMessage name="number" as="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
