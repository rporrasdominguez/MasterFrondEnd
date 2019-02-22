import * as React from 'react';
import { Table } from './table';
import { mount } from 'enzyme';


describe('pages/members/list/components/table specs', () => {

  it('should render as expected when passing one item', () => {
   
    // Arrange
    const props ={
      title:'Test Header',

      members:[
        {
          id: 1,
          name: 'name test',
          avatarUrl: 'url test',
        }   
      ]
           
    }

    // Act
    const component = mount(<Table {...props}/>);

    // Assert
    expect(component).toMatchSnapshot();
  });

  it('should render as expected when passing more one item', () => {
   
    // Arrange
    const props ={
      title:'Test Header',

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
        } ,

      ]
           
    }

    // Act
    const component = mount(<Table {...props}/>);

    // Assert
    expect(component).toMatchSnapshot();
  });
});