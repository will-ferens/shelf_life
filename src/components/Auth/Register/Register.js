import React from "react";
import styled from "styled-components";
import { getFirebase, useFirebase } from 'react-redux-firebase';
import { Form, Field } from "react-final-form";

import * as FormComponents from "../formComponents"

const RegisterContainer = styled.main``;
const RegisterFormContainer = styled.section``;
const RegisterTitle = styled.h2``;


const Register = () => {


  const createNewUser = ({ email, password, username }) => {
    
  }
  return (
    <RegisterContainer>
      <RegisterFormContainer>
        <RegisterTitle>Register</RegisterTitle>
        <Form
          onSubmit={createNewUser}
          validate={values => {
            const errors = {}
            if (!values.username) {
              errors.username = 'Required'
            }
            if (!values.password) {
              errors.password = 'Required'
            }
            if (!values.confirm) {
              errors.confirm = 'Required'
            } else if (values.confirm !== values.password) {
              errors.confirm = 'Must match'
            }
            return errors
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Field name="username">
                {({ input, meta }) => (
                  <FormComponents.FormGroup>
                    <FormComponents.Label>Username</FormComponents.Label>
                    <FormComponents.Input {...input} type="text" placeholder="Username" />
                    {meta.error && meta.touched && <FormComponents.ErrorMessage>{meta.error}</FormComponents.ErrorMessage>}
                  </FormComponents.FormGroup>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <FormComponents.FormGroup>
                    <FormComponents.Label>Password</FormComponents.Label>
                    <FormComponents.Input {...input} type="password" placeholder="Password" />
                    {meta.error && meta.touched && <FormComponents.ErrorMessage>{meta.error}</FormComponents.ErrorMessage>}
                  </FormComponents.FormGroup>
                )}
              </Field>
              <Field name="confirm">
                {({ input, meta }) => (
                  <FormComponents.FormGroup>
                    <FormComponents.Label>Confirm</FormComponents.Label>
                    <FormComponents.Input {...input} type="password" placeholder="Confirm" />
                    {meta.error && meta.touched && <FormComponents.ErrorMessage>{meta.error}</FormComponents.ErrorMessage>}
                  </FormComponents.FormGroup>
                )}
              </Field>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
            </form>
            )}
        />
      </RegisterFormContainer>
    </RegisterContainer>
  );
};

export default Register;
