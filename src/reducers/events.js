import {
  CREATE_EVENT,
  DELETE_EVENT,
  DELETE_ALL_EVENTS,
} from "../actions/index";

//stateが未定義だった場合[]で初期化して中身は無しとしている
const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case DELETE_EVENT:
      return state.filter((event) => event.id !== action.id);
    case DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};

export default events;
