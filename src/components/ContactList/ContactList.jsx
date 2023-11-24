import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  deleteContact,
  removeFromFavorite,
} from 'redux/contacts/contacts.reducer';
import { Notify } from 'notiflix';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contactsStore.contacts);

  const filter = useSelector(state => state.contactsStore.filter);

  const favorites = useSelector(state => state.contactsStore.favoriteContacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const filteredAndSortedContacts = [...filteredContacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const handleDeleteContact = (name, id) => {
    dispatch(deleteContact(id));
    Notify.info(`Contact "${name}" deleted`);
    dispatch(removeFromFavorite(id));
  };

  const handleAddFavorite = contact => {
    dispatch(addToFavorite(contact));
    Notify.success(`Contact "${contact.name}" added to favorites`);
  };

  const handleRemoveFavorite = contact => {
    dispatch(removeFromFavorite(contact.id));
    Notify.info(`Contact "${contact.name}" removed from favorites`);
  };

  const favOrNo = id => {
    return favorites.some(contact => contact.id === id);
  };

  return (
    <ul className={css.list}>
      {filteredAndSortedContacts.length > 0 ? (
        filteredAndSortedContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            {favOrNo(contact.id) ? (
              <button
                className={css.button}
                onClick={() => handleRemoveFavorite(contact)}
                title={`Remove favorite "${contact.name}"`}
              >
                💙
              </button>
            ) : (
              <button
                className={css.button}
                onClick={() => handleAddFavorite(contact)}
                title={`Add to favorite "${contact.name}"`}
              >
                🤍
              </button>
            )}

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
        <h3 className={css.subtitle}>No contacts found.</h3>
      )}
    </ul>
  );
};
