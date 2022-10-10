import { render, screen } from '@testing-library/react';
import App from './App';

const newLocal = screen.getByText(/learn react/i);
test('renders learn react link', () => {
  render(<App />);
  const linkElement = newLocal;
  expect(linkElement).toBeInTheDocument();
});
