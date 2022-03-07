import { auth, providerGoogle } from "../../firebase/firebase";

//Initial
const dataInitial = {
  loading: false,
  active: false,
};

//Actions
const LOADING = "LOADING";
const USER_SUCCESS = "USER_SUCCESS";
const USER_ERROR = "USER_ERROR";
const SIGN_OFF = "SIGN_OFF";

// Reducer
export default function userReducer(state = dataInitial, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case USER_ERROR:
      return { ...dataInitial };
    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        activo: true,
        user: action.payload.user,
      };
    case SIGN_OFF:
      return { ...dataInitial };
    default:
      return { ...state };
  }
}

//Create actions
export const login = (email, password, canal) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  let res;
  if (canal == "correo") {
    res = await auth.signInWithEmailAndPassword(email, password);
  } else {
    res = await auth.signInWithPopup(providerGoogle);
  }
  dispatch({
    type: USER_SUCCESS,
    payload: {
      user: {
        uid: res.user.uid,
        email: res.user.email,
      },
    },
  });

  localStorage.setItem(
    "user",
    JSON.stringify({
      uid: res.user.uid,
      email: res.user.email,
    })
  );
};

export const logout = () => (dispatch) => {
  auth.signOut();
  dispatch({
    type: SIGN_OFF,
  });
  localStorage.removeItem("user");
};
