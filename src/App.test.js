import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import App from './App';

test('renders learn react link', () => {
  render(
    <BrowserRouter>  {/* Wrap your component with BrowserRouter */}
      <App />
    </BrowserRouter>
  );
  
  const linkElement = screen.getByText(/learn react/i);  // Example text from App component
  expect(linkElement).toBeInTheDocument();
});
