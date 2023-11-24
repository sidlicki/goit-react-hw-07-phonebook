import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { filterContacts } from 'redux/contacts/contacts.reducer';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search by name"
      onChange={evt => dispatch(filterContacts(evt.target.value))}
    />
  );
};
