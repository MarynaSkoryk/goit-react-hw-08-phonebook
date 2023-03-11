import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

// const BASE_URL = 'https://connections-api.herokuapp.com';
const BASE_URL = 'https://6404629a80d9c5c7bac69574.mockapi.io/contacts';

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
