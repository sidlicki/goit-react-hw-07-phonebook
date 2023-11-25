import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  removeFromFavorite,
} from 'redux/contacts/contacts.reducer';
import { Notify } from 'notiflix';
import {
  selectorContacts,
  selectorFilter,
  selectorIsLoading,
} from 'redux/contacts/contacts.selectors';
import Loader from 'components/Loader/Loader';
import { openModal } from 'redux/modal/modal.reducer';
import { Modal } from 'components/ModalEdit/ModalEdit';
import { selectIsOpenModal } from 'redux/modal/modal.selectors';

export const FavoriteList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectorContacts);

  const filter = useSelector(selectorFilter);

  const isLoading = useSelector(selectorIsLoading);

  const isOpenModal = useSelector(selectIsOpenModal);

  const favoriteContacts = contacts.filter(contact => contact.favorite);

  const filteredContacts = favoriteContacts.filter(
    contact =>
      contact.name.trim().toLowerCase().includes(filter.toLowerCase().trim()) ||
      contact.number.trim().toString().includes(filter.toLowerCase().trim())
  );

  const filteredAndSortedContacts = [...filteredContacts].sort((a, b) =>
    a.name.localeCompare(b.name)
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
      {isLoading && (
        <div className={css.loaderWrapper}>
          <Loader />
        </div>
      )}
      {filteredAndSortedContacts.length > 0 ? (
        filteredAndSortedContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <button
              className={css.button}
              onClick={() => handleRemoveFavorite(contact)}
              title={`Remove favorite "${contact.name}"`}
            >
              💙
            </button>
            {/* button edit */}
            <button
              className={css.button}
              title={`Edit this conatct`}
              onClick={() => dispatch(openModal(contact))}
            >
              🖊
            </button>
            {/*  */}

            <a className={css.link} href={`tel:${contact.number}`}>
              <span>
                <b>{contact.name}</b>:
              </span>
              <span> {contact.number}</span>
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
        <h3 className={css.subtitle}>No favorites contacts found.</h3>
      )}
      {isOpenModal && <Modal />}
    </ul>
  );
};
