/*
Declare the types of action
put export in front => we can import them like
  >> import * as types from './ActionTypes'


Hard to manage type values in string.
so we save all these string values in this file
and import these values
whenever we need to use them in different files
 */

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COLOR = 'SET_COLOR';