import { render } from '@testing-library/react';

import Suggestions from './suggestions';

describe('Suggestions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Suggestions />);
    expect(baseElement).toBeTruthy();
  });
});
