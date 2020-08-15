import get from 'lodash/get';

export const getPerson = (state) => get(state, 'home.person');
export const getInformation= (state) => get(state, 'home.information');
