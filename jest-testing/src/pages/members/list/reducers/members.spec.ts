import { membersReducer, MembersState } from './members';
import deepFreeze from 'deep-freeze';
import { actionIds } from '../actions/actionsIds';

describe('members/list/reducers/membersReducer tests', () => {
    
    it('should return initial state when passing undefined state and some action type', () => {
      // Arrange
        const state = undefined;
        const action = {type: 'some type'};

      // Act
        const nexState = membersReducer(state,action);

      // Assert
      expect(nexState).toEqual([]);
    });

    it('should return same state when passing a state and some action type', () => {
        // Arrange
          const state: MembersState =[
              {
                  id:1,
                  login: 'test login',
                  avatar_url: 'test avatar_url',
              }
          ];


          const action = {type: 'some type'};

          deepFreeze(state); //state freezing
  
        // Act
          const nexState = membersReducer(state,action);
  
        // Assert
        expect(nexState).toEqual([
            {
                id:1,
                login: 'test login',
                avatar_url: 'test avatar_url',
            }
        ]);
      });

      it('should return updated state when passing a state, action type actionIds.UPDATE_MEMBERS and members payload', () => {
        // Arrange
          const state: MembersState =[
              {
                  id:1,
                  login: 'test login',
                  avatar_url: 'test avatar_url',
              }
          ];

          const payload =[
            { id: 2, 
              login: 'test login 2', 
              avatar_url: 'test avatar_url 2', 
            },
            { id: 3, 
              login: 'test login 3', 
              avatar_url: 'test avatar_url 3', 
            },  
          ]


          const action = {
            type: actionIds.UPDATE_MEMBERS,
            payload,
        };

          deepFreeze(state); //state freezing
  
        // Act
          const nexState = membersReducer(state,action);
  
        // Assert
        expect(nexState).toEqual(payload);
      });
  });