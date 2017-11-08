import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount, render } from 'enzyme';

const Marcello = ({ proprieta }) => (
  <div className="Marcello">
    <p className="Marcello__text">{ proprieta }</p>
  </div>
);

describe('Marcello', () => {

  it('Prova di Marcello', () => {
    const wrapper = render(<Marcello proprieta="maria" />);


    expect(wrapper.text()).toContain('culone');
  });

  it('Nessun falso positivo lol', () => {
    const wrapper = render(<Marcello testo="lonzolone" />);
    console.log(wrapper.text())
    expect(wrapper.text()).not.toContain('testolonee');
  });


});