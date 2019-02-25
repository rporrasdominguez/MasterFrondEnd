import * as React from 'react';
import { Body } from './body';

import { mount,shallow } from 'enzyme';


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
    //const component = mount(<Body {...props}/>);
    const component = shallow(<Body {...props}/>);
 
    

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
    //const component = mount(<Body {...props}/>);
    const component = shallow(<Body {...props}/>);


    // Assert
    expect(component).toMatchSnapshot();
   
  });



});