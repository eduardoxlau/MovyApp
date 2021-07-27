/* eslint-disable no-undef */
import { render } from '@testing-library/react';

import Notification from 'components/notification';

describe('<Notification />', () => {
  it('should render snapshot Notification', () => {
    const { asFragment } = render(<Notification message="" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should appear Notification', () => {
    render(<Notification message="text" />);
    expect(document.querySelector('h1')).toBeVisible();
  });
  it('shouldn"t appear Notification', () => {
    jest.useFakeTimers();
    render(<Notification message="" />);
    jest.runAllTimers();
    expect(document.querySelector('.hidden')).toBeInTheDocument();
  });
});
