import * as React from 'react';
import { Body } from './body';
import { Row } from './row';

import { shallow, mount } from 'enzyme';
import { membersReducer } from '../reducers';

describe('pages/members/list/components/body specs', () => {
  it('should render as expected when passing one item', () => {

    // Arrange
    const props ={
      members:[
          {
              id: 1,
              name: 'name test',
              avatarUrl: 'url test',
          }
        ]    
    }
    // Act
    const component = mount(<Body {...props}/>);
 
    

    // Assert
    expect(component).toMatchSnapshot();
  });

  it('should render as expected when passing more than one item ', () => {

    // Arrange
    const props = {
      members:[
        {
          id: 1,
          name: 'name test',
          avatarUrl: 'url test',
        } ,
        {
          id: 2,
          name: 'name test 2',
          avatarUrl: 'url test 2',
       } 
      ]
    };

    // Act
    const component = mount(<Body {...props}/>);


    // Assert
    expect(component).toMatchSnapshot();
   
  });



});