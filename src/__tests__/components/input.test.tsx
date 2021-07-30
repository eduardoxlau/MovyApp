/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { render } from '@testing-library/react';

import Input from 'components/input';

describe('<Input />', () => {
  it('should render snapshot input light', () => {
    const { asFragment } = render(
      <Input theme="light" onChange={() => null} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render snapshot input dark', () => {
    const { asFragment } = render(<Input theme="dark" onChange={() => null} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should required input', () => {
    render(<Input required onChange={() => null} />);
    expect(document.querySelector('input')).toBeRequired();
  });
});
