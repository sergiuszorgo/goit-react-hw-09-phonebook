import React, { useState, useCallback } from 'react'; //!
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
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
// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   // добавление значений в state
//   inputChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   //   очистка формы
//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

//   // отправка контакта

// checkDublicat = name => {
//   return this.props.contacts.some(
//     contact => contact.name.toLowerCase() === name.toLowerCase(),
//   );
// };
//   pushContact = e => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     const { addContact } = this.props;
// if (this.checkDublicat(this.state.name)) {
//   alert(`${name} already present in contacts`);
//   return;
// }
//     if (name && number) {
//       addContact(this.state);
//       this.resetForm();
//       return;
//     }
//     alert('Please enter name and phone');
//   };

//   render() {
// return (
//   <form className={s.formList}>
//     <label>
//       Name:
//       <input
//         type="text"
//         name="name"
//         value={this.state.name}
//         placeholder={'John Doe'}
//         onChange={this.inputChange}
//       />
//     </label>
//     <label>
//       Number:
//       <input
//         type="tel"
//         name="number"
//         pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
//         title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
//         required
//         value={this.state.number}
//         placeholder="+38 (099) 999-99-99"
//         onChange={this.inputChange}
//       />
//     </label>
//     <button onClick={this.pushContact}>Add contact</button>
//   </form>
// );
//   }
// }

// const mapStateToProps = state => ({
//   contacts: phonebookSelectors.getAllContacts(state),
// });
// const mapDispatchToProps = dispatch => ({
//   addContact: ({ name, number }) =>
//     dispatch(phonebookOperations.addContact({ name, number })),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  addContact: propTypes.func,
};
