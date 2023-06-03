import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import GlobalStats from '../components/Globalstats';

describe('GloabalStats', () => {
it('Test Globalstats renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <GlobalStats />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
});