export default function reducer(state, { type, payload }) {
  switch (type) {
    case 'LOGIN_USER':
      return { ...state, currentUser: payload };
    case 'IS_LOGGED_IN':
      return {
        ...state,
        isAuth: payload
      };
    case 'SIGNOUT_USE':
      return {
        ...state,
        isAuth: false,
        currentUser: null
      };
    case 'CREATE_DRAFT':
      return { ...state, draft: { latitude: 0, longitude: 0 } };
    case 'UPDATE_DRAFT_LOCATION':
      const { longitude, latitude } = payload;
      return { ...state, draft: { longitude, latitude } };
    default:
      return state;
  }
}
