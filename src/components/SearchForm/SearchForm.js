import React from 'react'; //!
import { useSelector, useDispatch } from 'react-redux';
// import propTypes from 'prop-types';
// import s from './SearchForm.module.css';
import { phonebookSelectors, changeFilter } from '../../redux/phonebook';

export default function SearchForm() {
  const dispatch = useDispatch();
  const filter = useSelector(phonebookSelectors.getFilter);
  const inputForm = e => dispatch(changeFilter(e.target.value));
  return (
    <section>
      <label htmlFor="">
        Find contact by name{' '}
        <input type="text" name="filter" value={filter} onChange={inputForm} />
      </label>
    </section>
  );
}

// SearchForm.propTypes = {
//   filter: propTypes.string.isRequired,
//   inputForm: propTypes.func.isRequired,
// };
