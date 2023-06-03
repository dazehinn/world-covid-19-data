import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchCovidData } from '../redux/statisticsSlice';

const mockStore = configureStore([thunk]);

describe('fetchCovidData', () => {
  it('should dispatch the correct actions when fetching coins succeeds', async () => {
    const expectedPayload = [
      {
        id: 1,
        country: 'Australia',
        region: 'Northern Territory',
        cases: {
          total: 624,
          new: 52,
        },
        show: false,
      },
    ];
    const mockResponse = { json: jest.fn().mockResolvedValue({ data: expectedPayload }) };
    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

    const store = mockStore({});
    await store.dispatch(fetchCovidData());

    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0].type).toEqual('get/Covid19/pending');
    expect(actions[1].type).toEqual('get/Covid19/rejected');

    fetchMock.mockRestore();
  });

  it('should dispatch the correct actions when fetching data fails', async () => {
    const mockResponse = { json: jest.fn().mockRejectedValue(new Error('Fetch error')) };
    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

    const store = mockStore({});
    await store.dispatch(fetchCovidData());

    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0].type).toEqual('get/Covid19/pending');
    expect(actions[1].type).toEqual('get/Covid19/rejected');
    expect(actions[1].error.message).toEqual('Fetch error');

    fetchMock.mockRestore();
  });
});
