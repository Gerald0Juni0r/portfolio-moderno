import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  // jsdom não implementa IntersectionObserver
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('mostra o nome no topo da página', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /geraldo júnior/i })).toBeInTheDocument();
});
