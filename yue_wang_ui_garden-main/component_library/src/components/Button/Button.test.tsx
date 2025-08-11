import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

// Test Husky pre-commit hook - second test
describe('Button component', () => {
  it('is visible with correct label11111', () => {
    const { getByText } = render(<Button label="Test Button" />);
    expect(getByText('Test Button')).toBeVisible();
  });

  it('has grey background and disabled cursor when disabled', () => {
    const { getByRole } = render(<Button label="Disabled Button" disabled />);
    const button = getByRole('button');
    expect(button).toHaveStyle('background-color: #ccc');
    expect(button).toHaveStyle('cursor: not-allowed');
  });
});
