import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => {
  return state.contacts.contacts;
};
export const selectLoading = state => {
  return state.isLoading;
};
export const selectError = state => {
  return state.error;
};

export const selectFilter = state => state.filter.query;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  }
);
