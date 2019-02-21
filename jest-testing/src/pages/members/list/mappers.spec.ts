import * as model from '../../../rest-api/model';
import { mapMemberListModelToVM } from './mappers';



describe('pages/members/list/mappers specs', () => {
    
    describe('mapMemberListModelToVM', () => {

        it('should return empty array when passing members equal undefined', () => {

            // Arrange
            const members: model.Member[]= undefined;

            // Act
            const result = mapMemberListModelToVM(members);

            // Assert
            expect(result).toEqual([]);
          });

        it('should return empty array when passing members equal null', () => {

            // Arrange
            const members: model.Member[]= null;

            // Act
            const result = mapMemberListModelToVM(members);

            // Assert
            expect(result).toEqual([]);
        });

        it('should return empty array when passing members equal []', () => {

            // Arrange
            const members: model.Member[]= [];

            // Act
            const result = mapMemberListModelToVM(members);

            // Assert
            expect(result).toEqual([]);
        });


        it('should return array when one item when members equal [] with one item', () => {

            // Arrange
            const members: model.Member[]= [
                {
                    id:1,
                    login:'test login',
                    avatar_url:'test_avatar_url',
                }
            ];

            // Act
            const result = mapMemberListModelToVM(members);

            // Assert
            expect(result).toEqual([
                {
                    id:1,
                    name:'test login',
                    avatarUrl:'test_avatar_url',
                }
            ]);
        });

        it('should return array when two items when members equal [] with two items', () => {

            // Arrange
            const members: model.Member[]= [
                {
                    id:1,
                    login:'test login',
                    avatar_url:'test_avatar_url',
                },
                {
                    id:2,
                    login:'test login 2',
                    avatar_url: 'test_avatar_url_2',
                }
            ];

            // Act
            const result = mapMemberListModelToVM(members);

            // Assert
            expect(result).toEqual([
                {
                    id:1,
                    name:'test login',
                    avatarUrl:'test_avatar_url',
                },
                {
                    id:2,
                    name:'test login 2',
                    avatarUrl:'test_avatar_url_2',
                }
            ]);
        });

    });

});