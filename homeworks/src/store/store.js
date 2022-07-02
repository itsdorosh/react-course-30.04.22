import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {reducer} from "./reducer";

const initState = {
  schools: [{
    id: 1,
    name: "demo school 1",
    description: "demo school 1 demo description",
    maxGroupsCount: 3,
    maxStudentsCountPerGroup: 10,
    courses: [],
    learningGroups: [],
  }], selectedSchool: {name: "test", id: 1}, history: [], passedLessons: [], isLoading: false, photos: [],
};

const mw = [thunk];

export const store = createStore(reducer, initState, composeWithDevTools(applyMiddleware(...mw)));
