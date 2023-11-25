import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  deleteContact,
  fetchAllContacts,
  removeFromFavorite,
} from 'redux/contacts/contacts.reducer';
import { Notify } from 'notiflix';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.contacts.items);

  const filter = useSelector(state => state.contacts.filter);

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
    dispatch(addToFavorite(contact.id));
    Notify.success(`Contact "${contact.name}" added to favorites`);
  };

  const handleRemoveFavorite = contact => {
    dispatch(removeFromFavorite(contact.id));
    Notify.info(`Contact "${contact.name}" removed from favorites`);
  };

  const favOrNo = id => {
    const contact = contacts.find(contact => contact.id === id);
    return contact && contact.favorite === true;
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
