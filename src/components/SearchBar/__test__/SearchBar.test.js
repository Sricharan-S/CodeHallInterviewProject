import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SearchBar from "..";

const fetchMovies = jest.fn();
const fetchSearch = jest.fn();

test('types text in to the search input to display movies', async () => {
    render(<SearchBar fetchMovies={fetchMovies} fetchSearch={fetchSearch}/>);
    const searchBarElement = screen.getByPlaceholderText(/Search movies.../i);
    const searchClearButton = screen.getByTestId('searchClearButton');
    fireEvent.change(searchBarElement, { target: { value: 'test' }});
    await waitFor(() => {
     expect(searchBarElement.value).toBe('test');
    })
    fireEvent.click(searchClearButton);
    expect(fetchMovies).toHaveBeenCalledTimes(1);
});

test('check to see search api for movies called after user input', async () => {
    render(<SearchBar fetchMovies={fetchMovies} fetchSearch={fetchSearch}/>);
    const searchBarElement = screen.getByPlaceholderText(/Search movies.../i);
    fireEvent.change(searchBarElement, { target: { value: 'test' }});
    await waitFor(() => {
     expect(searchBarElement.value).toBe('test');
    })
    await waitFor(() => {
        expect(fetchSearch).toHaveBeenCalledWith(searchBarElement.value);
    })
})

