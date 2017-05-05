import React from 'react';
import SimpleNavigation from './index';
import {shallow } from 'enzyme';
import {shallowToJson } from 'enzyme-to-json';


const navigationDirective = [
    {to:'/', displayText:'Home'},
    {to:'/users', displayText:'User'},
    {to:'/users/1', displayText:'User 1'},
    {to:'/users/1/view-review/2', displayText:'User 1 view user 2'},
    {to:'/font-test', displayText:'Font test'},
    {to:'/lazy-load', displayText:'Lazy load'},
    {to:'/todos/all', displayText:'Todo'},
    {to:'/rest', displayText:'Rest'}
];


const navLenght = navigationDirective.lenght;

describe(`
  =============================================
  ==               Widget Test               ==
  ==           simple-navigation             ==
  =============================================
`, () => {
  describe(':::: <SimpleNavigation /> ', () => {
    const component = shallow(<SimpleNavigation navigations={navigationDirective} />);
    const componentJson = shallowToJson(component);

    test(`:::: lenght of children should be one `, () =>{
      expect(component).toHaveLength(1);
    });

    test(`:::: snapshot test `, () =>{
      expect(component).toMatchSnapshot(1);
    });
  })
});


