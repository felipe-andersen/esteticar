/// tests/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, vi, it } from 'vitest';
import { expect, test } from 'vitest'
import Page from '../app/page'
import React from 'react';
describe('Button Component', () => {
    it('renders correctly', () => {
      render(<button onClick={() => {}}>Click Me</button>);
      expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

})