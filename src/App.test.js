import { render, screen } from '@testing-library/react';
import App from './App';



test('renders learn react link', () => {
  render(<App />);
  const element = screen.getByText(/some text/i);  // This is where the error happens
  expect(element).toBeInTheDocument();
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
