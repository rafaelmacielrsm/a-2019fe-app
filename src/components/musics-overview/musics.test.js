import { shallow } from 'enzyme';
import React from 'react';
import Subject from './Musics';

describe( 'Dashboard Component', () => {
  describe( 'when the show overlay prop is true', () => {
    const subject = shallow( <Subject showOverlay={true}/>);
  
    it( 'should render a loader component', () => {
      expect( subject.find('Loader') ).toExist();
    });
  });

  describe( 'when the show overlay prop is false', () => {
    const subject = shallow( <Subject showOverlay={false}/>);
  
    it( 'should not render the loader component', () => {
      expect( subject.find('Loader') ).not.toExist();
    });
  });
  
  // describe( 'when the component has not received a data array', () => {
  //   const subject = shallow( <Subject /> )

  //   it( 'should fetch', () => {
  //     expect( subject.sta )
  //   });
  // });
});