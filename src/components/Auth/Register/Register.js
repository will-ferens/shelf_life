import React from "react";
import { Form, Field } from "react-final-form";
import { useFirebase } from "react-redux-firebase";
// import { Link } from "react-router-dom";

import * as FormValidationFunctions from "../validation";
import * as FormComponents from "../formComponents";

const Register = () => {
  const firebase = useFirebase();

  const createNewUser = ({ email, password, username }) => {
    firebase
      .createUser({ email, password }, { username, email })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const submit = async (values) => {
    await createNewUser({
      email: values.email,
      password: values.password,
      username: values.username,
    });
  };
  return (
    <FormComponents.Container>
      <FormComponents.FormContainer>
        <FormComponents.Title>Register</FormComponents.Title>
        <Form
          onSubmit={submit}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            if (!values.email) {
              errors.email = "Required";
            }
            if (
              values.email &&
              FormValidationFunctions.emailValid(values.email) !== undefined
            ) {
              errors.email = "Please enter a valid email";
            }
            if (!values.confirm) {
              errors.confirm = "Required";
            } else if (values.confirm !== values.password) {
              errors.confirm = "Must match";
            }
            return errors;
          }}
          render={({ handleSubmit, form, values }) => (
            <form onSubmit={handleSubmit}>
              <Field name="username">
                {({ input, meta }) => (
                  <FormComponents.FormGroup>
                    <FormComponents.Label>Username</FormComponents.Label>
                    <FormComponents.Input
                      {...input}
                      type="text"
                      placeholder="Username"
                    />
                    {meta.error && meta.touched && (
                      <FormComponents.ErrorMessage>
                        {meta.error}
                      </FormComponents.ErrorMessage>
                    )}
                  </FormComponents.FormGroup>
                )}
              </Field>
              <Field name="email">
                {({ input, meta }) => (
                  <FormComponents.FormGroup>
                    <FormComponents.Label>Email</FormComponents.Label>
                    <FormComponents.Input
                      {...input}
                      type="text"
                      placeholder="Email"
                    />
                    {meta.error && meta.touched && (
                      <FormComponents.ErrorMessage>
                        {meta.error}
                      </FormComponents.ErrorMessage>
                    )}
                  </FormComponents.FormGroup>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <FormComponents.FormGroup>
                    <FormComponents.Label>Password</FormComponents.Label>
                    <FormComponents.Input
                      {...input}
                      type="password"
                      placeholder="Password"
                    />
                    {meta.error && meta.touched && (
                      <FormComponents.ErrorMessage>
                        {meta.error}
                      </FormComponents.ErrorMessage>
                    )}
                  </FormComponents.FormGroup>
                )}
              </Field>
              <Field name="confirm">
                {({ input, meta }) => (
                  <FormComponents.FormGroup>
                    <FormComponents.Label>Confirm</FormComponents.Label>
                    <FormComponents.Input
                      {...input}
                      type="password"
                      placeholder="Confirm"
                    />
                    {meta.error && meta.touched && (
                      <FormComponents.ErrorMessage>
                        {meta.error}
                      </FormComponents.ErrorMessage>
                    )}
                  </FormComponents.FormGroup>
                )}
              </Field>
              <FormComponents.ButtonContainer>
                <FormComponents.FormButton type="submit">
                  Submit
                </FormComponents.FormButton>
                <FormComponents.FormButton type="button" onClick={form.reset}>
                  Reset
                </FormComponents.FormButton>
              </FormComponents.ButtonContainer>
            </form>
          )}
        />
      </FormComponents.FormContainer>
    </FormComponents.Container>
  );
};

export default Register;
