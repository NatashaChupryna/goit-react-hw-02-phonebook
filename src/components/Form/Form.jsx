// Версія з Formik
import React from 'react';
import { Formik, Form, Field} from 'formik';
import { Button } from './Form.styled';
import styled from '@emotion/styled';



const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values)
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <ContactsForm>
        <label>
          Name :
          <NameInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Nataliia"
          />
        </label>

        <label>
          Number :
          <NumberInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="+380XXXXXXXXX"
          />
        </label>
        <Button type="submit">Add contact</Button>
      </ContactsForm>
    </Formik>
  );
};

const ContactsForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const NameInput =styled(Field)`
margin-left: 25px;

:focus-visible{
    box-shadow: #516aed 0px 5px 15px;
    border: none;
    outline: transparent;
}

`
const NumberInput =styled(Field)`
margin-left: 10px;
:focus-visible{
    box-shadow: #516aed 0px 5px 15px;
    border: none;
    outline: transparent;
}
`