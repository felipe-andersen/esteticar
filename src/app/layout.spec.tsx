import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import RootLayout from '@/app/layout'


vi.mock('next/font/google', () => ({
	Inter: vi.fn().mockReturnValue({ className: 'mocked-inter-font' }),
}))

describe('RootLayout', () => {
	it('should render the children content', () => {
		render(
			<RootLayout>
				<div>Root Layout</div>
			</RootLayout>,
		)

		const childContent = screen.getByText('Root Layout')
		expect(childContent).toBeTruthy()
	})
})