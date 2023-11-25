import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { addContact } from 'redux/contacts/contacts.reducer';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);

  const submitAddContact = evt => {
    evt.preventDefault();

    const [name, number] = evt.target.elements;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      alert(
        `A contact with that name (${name.value.toLowerCase()}) already exists, try changing the name`
      );
      return;
    }
    if (contacts.some(contact => contact.number === number.value)) {
      alert(
        `A contact with this phone number (${number.value}) already exists`
      );
      return;
    }

    const newContact = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    };
    try {
      dispatch(addContact(newContact));
      name.value = '';
      number.value = '';
      Notify.success(`Contact "${newContact.name}"  added successfully`);
    } catch (e) {
      Notify.error(
        `Contact "${newContact.name}" not added.  Error: ${e.message}`
      );
    }
  };
  return (
    <form onSubmit={submitAddContact} className={css.form}>
      <input
        className={css.input}
        type="text"
        name="name"
        placeholder="Enter name"
        required
        pattern="^[A-Za-zА-Яа-яЇїІі\s]+$"
        title="You can enter only letters of the Latin and Cyrillic alphabets, as well as spaces."
      />
      <input
        className={css.input}
        type="tel"
        name="number"
        placeholder="Enter number"
        required
        pattern="^(\+?\d+){5,12}$"
        title="Phone number must start with '+' (optional) and contain only digits. Length: 5-12 characters."
      />
      <button type="submit" className={css.button} title={`Add new contact`}>
        Add contact
      </button>
    </form>
  );
};
