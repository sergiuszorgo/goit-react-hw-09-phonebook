import React, { useState, useCallback } from 'react'; //!
import { useDispatch, useSelector } from 'react-redux';
// import propTypes from 'prop-types';
import s from './ContactForm.module.css';
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const phonebookNames = useSelector(phonebookSelectors.getAllContacts);

  const inputChange = useCallback(({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  }, []);

  const checkDublicate = name => {
    return phonebookNames.some(
      phonebookName => phonebookName.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const pushContact = useCallback(
    e => {
      e.preventDefault();
      if (checkDublicate(name)) {
        alert(`${name} already present in contacts`);
        resetForm();
        return;
      }
      if (name && number) {
        dispatch(phonebookOperations.addContact({ name, number }));
        resetForm();
        return;
      }
    },
    [name, number, dispatch],
  );

  return (
    <form className={s.formList} onSubmit={pushContact}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={name}
          placeholder={'John Doe'}
          onChange={inputChange}
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          value={number}
          placeholder="+38 (099) 999-99-99"
          onChange={inputChange}
        />
      </label>
      <button>Add contact</button>
    </form>
  );
}

// ContactForm.propTypes = {
//   addContact: propTypes.func,
// };
