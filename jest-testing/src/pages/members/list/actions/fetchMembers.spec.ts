import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import * as apiMember from '../../../../rest-api/api/member';
import { Member } from '../../../../rest-api/model';

import { fetchMembers } from './fetchMembers';
import { actionIds } from './actionsIds';

const middlewares = [reduxThunk];
const getMockStore = configureStore(middlewares);

describe('members/list/actions/fetchMembers specs', () => {
    it('should call to apiMember.fetchMembers', async() => {

      // Arrange
        const fetchMembersStub = jest.spyOn(apiMember,'fetchMembers').mockResolvedValue([]);

      // Act
        const store = getMockStore();
        await store.dispatch<any>(fetchMembers());

      // Assert
        expect(fetchMembersStub).toHaveBeenCalled();

    });

    it('should return success with dispatch action type UPDATE_MEMBERS and payload with members', (done) => {

        // Arrange
          const members: Member[]=[
              {
                  id:1,
                  login:'test login',
                  avatar_url: 'test url',
              }
          ];

          const fetchMembersStub = jest.spyOn(apiMember,'fetchMembers').mockResolvedValue(members);
  
        // Act
          const store = getMockStore();

          store.dispatch<any>(fetchMembers())
                 .then(() => {
                   // Assert
                   const expectedAction = store.getActions()[0];
                   expect(expectedAction.type).toEqual(actionIds.UPDATE_MEMBERS);
                   expect(expectedAction.payload).toEqual(members);
                   done();
                });
      });

      it('should call console.log when fail', async() => {

        // Arrange
          const error = 'test error';

          const fetchMembersStub = jest.spyOn(apiMember,'fetchMembers').mockRejectedValue(error);

          const logStub = jest.spyOn(window.console,'log');
  
        // Act
          const store = getMockStore();
          await store.dispatch<any>(fetchMembers());
  
        // Assert
          expect(logStub).toHaveBeenCalledWith(error);
  
      });
  
});