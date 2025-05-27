import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Dashboard from '@/components/templates/dashboard/dashboard.view';


describe('Button Component', () => {
    it('renders correctly', () => {
      render(<Dashboard />);
      expect(screen.getByText('Click Me')).toBeInTheDocument();
    });
})