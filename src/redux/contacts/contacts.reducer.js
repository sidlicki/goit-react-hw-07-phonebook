import { createSlice } from '@reduxjs/toolkit';

const exampleConacts = [
  { id: 'id-1', name: 'Joe Biden', number: '+1-800-375-5283' },
  { id: 'id-2', name: 'Naruhito 徳仁', number: '+81-354-74-97-70' },
  { id: 'id-3', name: 'Frank Steinmeier', number: '+49-30-28-88-71-28' },
  { id: 'id-4', name: 'Rishi Sunak', number: ' +44-0-131-556-0023' },
  { id: 'id-5', name: 'Emmanuel Macron', number: '+33-1-43-06-07-37' },
  { id: 'id-6', name: 'Sergio Mattarella', number: '+39-06-8200-3641' },
  { id: 'id-7', name: 'Justin Trudeau', number: '+1-613-230-29-61' },
  { id: 'id-8', name: 'Angela Merkel', number: '+49-30-18-580' },
  { id: 'id-9', name: 'Xi Jinping 习近平', number: '+86-10-6307-0911' },
  { id: 'id-10', name: 'Jair Bolsonaro', number: '+55-61-3429-1555' },
  { id: 'id-11', name: 'Scott Morrison', number: '+61-2-6271-5111' },
  { id: 'id-12', name: 'Moon Jae-in 문재인', number: '+82-2-730-5800' },
  {
    id: 'id-13',
    name: 'Volodymyr Zelensky',
    number: '+380-44-256-67-25',
  },
  { id: 'id-14', name: 'Macky Sall', number: '+221-33-839-50-50' },
  { id: 'id-15', name: 'Tayyip Erdoğan', number: '+90-312-417-05-30' },
  { id: 'id-16', name: 'Jacinda Ardern', number: '+64-4-817-9999' },
];

const initialState = {
  contacts: exampleConacts,
  filter: '',
  favoriteContacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      state.contacts = [...state.contacts, payload];
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
    addToFavorite(state, { payload }) {
      state.favoriteContacts = [...state.favoriteContacts, payload];
    },
    removeFromFavorite(state, { payload }) {
      state.favoriteContacts = state.favoriteContacts.filter(
        contact => contact.id !== payload
      );
    },
  },
});

export const {
  addContact,
  deleteContact,
  filterContacts,
  addToFavorite,
  removeFromFavorite,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
