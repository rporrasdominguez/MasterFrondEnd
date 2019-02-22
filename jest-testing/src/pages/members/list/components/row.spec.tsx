import * as React from 'react';
import {shallow} from 'enzyme';
import { Row } from './row';



describe('pages/members/list/components/body specs', () => {

  it('should render as expected when passing required properties', () => {
    // Arrange
    const props ={
        member:
            {
                id: 1,
                name: 'name test',
                avatarUrl: 'url test',
            }
        
            
    }
    // Act
    const component = shallow(
        <Row {...props}/>
    );
    // Assert
    expect(component).toMatchSnapshot();
  });

});