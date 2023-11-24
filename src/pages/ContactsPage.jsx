import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './styles.module.css';

const ContactsPage = () => {
  return (
    <>
      <h2 className={css.title}>All contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
export default ContactsPage;
