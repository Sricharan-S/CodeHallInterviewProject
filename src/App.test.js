import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>    
  )
}

test('renders search bar in the screen', () => {
  render(<AppWithStore />);
  const searchBarElement = screen.getByPlaceholderText(/Search movies.../i);
  expect(searchBarElement).toBeInTheDocument();
});

test('renders genre selection options in the screen', () => {
  render(<AppWithStore />);
  const genreSelector = screen.queryByText(/Select Genres.../i);
  expect(genreSelector).toBeInTheDocument();
});

test('renders all movies container div in the screen', async () => {
  render(<AppWithStore />);
  const moviesDivElement = screen.getByTestId("allMovies");
  const allMoviesDiv = await screen.findAllByTestId("singleMovieItem");
  expect(allMoviesDiv.length).toBe(20);
  expect(moviesDivElement).toBeInTheDocument();
});