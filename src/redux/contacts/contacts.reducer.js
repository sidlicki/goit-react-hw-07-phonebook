import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        'https://6560d78d83aba11d99d199f6.mockapi.io/contacts/allContacts'
      );
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const { data } = await axios.post(
        'https://6560d78d83aba11d99d199f6.mockapi.io/contacts/allContacts',
        newContact
      );
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.delete(
        `https://6560d78d83aba11d99d199f6.mockapi.io/contacts/allContacts/${id}`
      );
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
  favoriteContacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
    // addContact(state, { payload }) {
    //   state.contacts = [...state.contacts, payload];
    // },
    // deleteContact(state, { payload }) {
    //   state.contacts = state.contacts.filter(contact => contact.id !== payload);
    // },
    // addToFavorite(state, { payload }) {
    //   state.favoriteContacts = [...state.favoriteContacts, payload];
    // },
    // removeFromFavorite(state, { payload }) {
    //   state.favoriteContacts = state.favoriteContacts.filter(
    //     contact => contact.id !== payload
    //   );
    // },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = [...state.contacts.items, payload];
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload
        );
      })
      .addMatcher(
        isAnyOf(
          fetchAllContacts.pending,
          addContact.pending,
          removeContact.pending
        ),
        state => {
          state.contacts.isLoading = true;
          state.contacts.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllContacts.rejected,
          addContact.rejected,
          removeContact.rejected
        ),
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = payload;
        }
      ),
});

export const {
  // addContact,
  // deleteContact,
  filterContacts,
  // addToFavorite,
  // removeFromFavorite,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
