import React from 'react'; //!
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import s from './ContactList.module.css';
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getFilteredContacts);
  // const deleteContact = useCallback(
  //   id => {
  //     dispatch(phonebookOperations.deleteContact(id));
  //   },
  //   [dispatch],
  // );
  return (
    <div className={s.ContactBox}>
      <h2 className={s.Align}>Contacts: {contacts.length}</h2>
      <ul className={s.ContactList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.ContactListItem}>
            <p className={s.ContactListName}>
              {name}: {number}
            </p>
            <div>
              <button
                className={s.contBtn}
                onClick={() => dispatch(phonebookOperations.deleteContact(id))}
              >
                <span class="material-icons md-light">close</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// const ContactList = ({ contacts, deleteContact }) => (
//   <div className={s.ContactBox}>
//     <h2 className={s.Align}>Contacts: {contacts.length}</h2>
//     <ul className={s.ContactList}>
//       {contacts.map(({ id, name, number }) => (
//         <li key={id} className={s.ContactListItem}>
//           <p className={s.ContactListName}>
//             {name}: {number}
//           </p>
//           <div>
//             <button className={s.contBtn} onClick={() => deleteContact(id)}>
//               <span class="material-icons md-light">close</span>
//             </button>
//           </div>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const mapStateToProps = state => ({
//   contacts: phonebookSelectors.getFilteredContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   deleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  deleteContact: propTypes.func.isRequired,
};
