import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  removeFromFavorite,
} from 'redux/contacts/contacts.reducer';
import { Notify } from 'notiflix';

export const FavoriteList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.contactsStore.filter);

  const favorites = useSelector(state => state.contactsStore.favoriteContacts);

  const filteredContacts = favorites.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = (name, id) => {
    dispatch(deleteContact(id));
    Notify.info(`Contact "${name}" deleted`);
    dispatch(removeFromFavorite(id));
  };

  const handleRemoveFavorite = contact => {
    dispatch(removeFromFavorite(contact.id));
    Notify.info(`Contact "${contact.name}" removed from favorites`);
  };

  return (
    <ul className={css.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <button
              className={css.button}
              onClick={() => handleRemoveFavorite(contact)}
              title={`Remove favorite "${contact.name}"`}
            >
              💙
            </button>

            <a className={css.link} href={`tel:${contact.number}`}>
              <span>
                <b>{contact.name}</b>:
              </span>
              <span>{contact.number}:</span>
            </a>
            <button
              className={`${css.button} ${css.buttonDelete}`}
              onClick={() => handleDeleteContact(contact.name, contact.id)}
              title={`Delete contact "${contact.name}"`}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <h3 className={css.subtitle}>No favorite contacts.</h3>
      )}
    </ul>
  );
};
