import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { token } from 'api/api';
import {
  authCurrentUser,
  authLogIn,
  authLogOut,
  authRegister,
} from 'api/authApi';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await authRegister(credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    if (error) {
      if (error.response.status === 400) {
        toast.error('User creation error! Please try again!');
      } else if (error.response.status === 500) {
        toast.error('Oops! Server error! Please try later!');
      } else {
        toast.error('Something went wrong!');
      }
    }
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await authLogIn(credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error('Invalid email or password! Try again!');
  }
});

export const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    await authLogOut(credentials);
    token.unset();
  } catch (error) {
    if (error.response.status === 500) {
      toast.error('Oops! Server error! Please try later!');
    } else {
      toast.error('Something went wrong! Please reload the page!');
    }
  }
});

export const getCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const { data } = await authCurrentUser();
      return data;
    } catch (error) {
      toast.warn('Authorization timed out! Please authenticate again!');
    }
  }
);
