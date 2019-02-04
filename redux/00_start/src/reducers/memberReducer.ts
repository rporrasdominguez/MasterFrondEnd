import {actionsEnums} from '../common/actionsEnums';
import {MemberEntity} from '../model/member';

export type memberState = {
  members: MemberEntity[];
  company:string;
}

interface BaseAction{
  type:string;
  payload:any;
}

const createDefaultState = (): memberState =>({
  members: [],
  company: 'lemoncode',
})

export const memberReducer =  (state : memberState = [], action) => {
  switch (action.type) {
    case actionsEnums.MEMBER_REQUEST_COMPLETED:
      return handleMemberRequestCompletedAction(state, action.payload);
  }

  return state;
};

const handleMemberRequestCompletedAction = (state : memberState, members) => {
  return members;
}
