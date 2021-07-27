/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Input from 'components/input';

describe('<Input />', () => {
  it('should render snapshot input light', () => {
    const tree = renderer.create(<Input theme="light" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render snapshot input dark', () => {
    const tree = renderer.create(<Input theme="dark" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should required input', () => {
    render(<Input required />);
    expect(document.querySelector('input')).toBeRequired();
  });
});
