// import axios from 'axios';
import axios from '../axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({ tables }) => tables.data;
export const getLoadingState = ({ tables }) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const CHANGE_STATUS = createActionName('CHANGE_STATUS');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const changeStatus = (status, id) => ({
  status,
  id,
  type: CHANGE_STATUS,
});

/* thunk creators */
export const fetchFromAPI = () => {
  return async (dispatch, getState) => {
    dispatch(fetchStarted());

    try {
      const getUrl = `${api.url}/api/${api.tables}`;
      const { data } = await axios('GET', getUrl);

      dispatch(fetchSuccess(data));
    } catch (err) {
      dispatch(fetchError(err.message || true));
    }
  };
};

export const changeTableStatus = (status, tableId) => {
  return async (dispatch, getState) => {
    dispatch(changeStatus(status, tableId));

    if (status === 'ordered' || status === 'free') {
      let orderNumber =
        status === 'ordered' ? Math.floor(Math.random() * 300) : null;

      try {
        const patchUrl = `${api.url}/api/${api.tables}/${tableId}`;
        await axios('PATCH', patchUrl, { status, order: orderNumber });

        const getUrl = `${api.url}/api/${api.tables}`;
        const { data } = await axios('GET', getUrl);

        dispatch(fetchSuccess(data));
      } catch (err) {
        dispatch(fetchError(err.message || true));
      }
    }

    try {
      const patchUrl = `${api.url}/api/${api.tables}/${tableId}`;
      await axios('PATCH', patchUrl, { status });

      const getUrl = `${api.url}/api/${api.tables}`;
      const { data } = await axios('GET', getUrl);

      dispatch(fetchSuccess(data));
    } catch (err) {
      dispatch(fetchError(err.message || true));
    }
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case CHANGE_STATUS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: statePart.data.map(table =>
          table.id === action.id ? { ...table, status: action.status } : '',
        ),
      };
    }
    default:
      return statePart;
  }
}
