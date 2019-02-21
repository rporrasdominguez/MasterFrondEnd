import { combineReducers } from 'redux';
import { membersReducer, MembersState} from './members/list';

export interface State {
    members: MembersState;
}

export const reducers = combineReducers<State>({
    members:membersReducer,
});
