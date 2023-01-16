// import { Component } from 'react';
// import { ContactsForm, Button, NameInput, NumberInput } from './Form.styled';

// export class ContactForm extends Component{
// state = {
//     name: '',
//     number: '',
//   };

 
// onSubmit = (event) =>{
// event.preventDefault();
//   }

// render(){
//   return (
    
//       <ContactsForm>
//         <label>
//           Name :
//           <NameInput
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             placeholder="Nataliia"
//           />
//         </label>

//         <label>
//           Number :
//           <NumberInput
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             placeholder="+380XXXXXXXXX"
//           />
//         </label>
//         <Button type="submit" >Add contact</Button>
//       </ContactsForm>
//   );
// };
// }



// Версія з Formik

import React from 'react';
import { Formik, Form, Field } from 'formik';
import { ContactsForm, Button, NameInput, NumberInput } from './Form.styled';

export const ContactForm = ({ onSubmitForm }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
 
  const onSubmit = (event) =>{
event.preventDefault();
  }

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
        <Button type="submit" >Add contact</Button>
      </ContactsForm>
    </Formik>
  );
};
