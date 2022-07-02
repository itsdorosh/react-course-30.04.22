import {v4 as uuid} from "uuid";
import {ACTION_TYPES} from "./actionTypes";

const refreshState = (prevState, freshData) => ({...prevState, ...freshData});

export const reducer = (prevState, {type, payload}) => {
  console.log(prevState, {type, payload});
  switch (type) {
    case ACTION_TYPES.CREATE_IT_SCHOOL: {
      return refreshState(prevState, {
        schools: [...prevState.schools, {
          id: uuid(),
          name: payload.name,
          description: payload.description,
          maxGroupsCount: payload.maxGroupsCount,
          maxStudentsCountPerGroup: payload.maxStudentsCountPerGroup,
        }],
      });
    }

    case ACTION_TYPES.UPDATE_IT_SCHOOL: {
      return refreshState(prevState, {
        schools: prevState.schools.map((school) => school.id === payload.id && {
          ...school, [payload.field]: payload.value
        }),

        selectedSchool: {id: 1, name: "Changed", description: "test desc"}
      });
    }

    case "SELECT_SCHOOL": {
      return refreshState(prevState, {selectedSchool: prevState.schools.find(({id}) => id === payload.id)});
    }

    case ACTION_TYPES.PASS_LESSON: {
      return refreshState(prevState, {passedLessons: [...prevState.passedLessons, {id: payload.id, status: "passed"}]})
    }

    case "SET_LOADING": {
      return refreshState(prevState, {isLoading: payload.status});
    }

    case "INIT_PHOTOS_LIST": {
      return refreshState(prevState, {photos: [...prevState.photos, ...payload.photos]});
    }

    default: {
      return prevState;
    }
  }
};
