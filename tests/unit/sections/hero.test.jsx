import { render, screen } from '@testing-library/react'
import Hero from '../../../components/sections/index/hero'
import '@testing-library/jest-dom'

describe('Hero section parts', () => {

	it('renders main heading', () => {
		render(<Hero />)
		
		const heading = screen.getByRole('heading', {
			name: /Samson Bruno Were\./i,
		})
		
		expect(heading).toBeInTheDocument()
	})

	it('renders sub heading', () => {
		render(<Hero />)
		
		const heading = screen.getByRole('heading', {
			name: /I build software for businesses\./i,
		})
		
		expect(heading).toBeInTheDocument()
	})

})