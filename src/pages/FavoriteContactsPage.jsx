import { FavoriteList } from 'components/ContactList/FavoriteList';
import css from './styles.module.css';
import { Filter } from 'components/Filter/Filter';
const Favorites = () => {
  return (
    <>
      <h2 className={css.title}>Favorite contacts</h2>
      <Filter />
      <FavoriteList />
    </>
  );
};
export default Favorites;
