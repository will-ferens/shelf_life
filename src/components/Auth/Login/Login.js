import React from "react";
import { Form, Field } from "react-final-form";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import * as GlobalStyles from "../../../constants/styles";
import * as FormComponents from "../formComponents";

const Login = () => {
  const firebase = useFirebase();
  const history = useHistory();
  const error = useSelector((state) => state.firebase.authError);

  const submit = async (values) => {
    firebase
      .login({
        email: values.email,
        password: values.password,
      })
      .then((data) => {
        firebase.reloadAuth().then(() => {
          history.push("/dashboard");
        });
      });
  };
  return (
    <FormComponents.Container>
      <FormComponents.FormContainer>
        <FormComponents.Title>Login</FormComponents.Title>
        <Form
          onSubmit={submit}
          validate={(values) => {
            const errors = {};
            if (!values.password) {
              errors.password = "Required";
            }
            if (!values.email) {
              errors.email = "Required";
            }
            return errors;
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
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
              <FormComponents.ButtonContainer>
                <FormComponents.FormButton
                  primaryColor={GlobalStyles.accentSeaBlue}
                  type="submit"
                  disabled={submitting}
                >
                  Submit
                </FormComponents.FormButton>
                <FormComponents.FormButton
                  primaryColor={GlobalStyles.accentRogue}
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </FormComponents.FormButton>
              </FormComponents.ButtonContainer>
            </form>
          )}
        />
      </FormComponents.FormContainer>
      {error ? (
        <FormComponents.FormErrorMessage message={error.message} />
      ) : null}
    </FormComponents.Container>
  );
};

export default Login;
