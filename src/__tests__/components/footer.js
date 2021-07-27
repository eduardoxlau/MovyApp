/* eslint-disable no-undef */
import renderer from 'react-test-renderer';

import Footer from 'components/footer';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({ pathname: '/' }),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('<Footer />', () => {
  it('should render snapshot footer', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
