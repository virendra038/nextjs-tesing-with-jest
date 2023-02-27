import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { act } from 'react-dom/test-utils';
import Counter from "./Counter"
import user from '@testing-library/user-event';

describe('Running test cases for counter',()=>{

    beforeEach(async ()=>{
        await act(() => render(<Counter description="My Counter" defaultCount={0}/>));
    })

    it('checks for default counter 0',() => {
        expect(screen.getByText('Current Count: 0')).toBeInTheDocument();
        
    })

    it('renders title',() => {
        expect(screen.getByText(/my counter/i)).toBeInTheDocument();
    })

    it('checks for the increment on clicking -1', async ()=>{
        await act(async ()=>{
            await user.click(screen.getByRole('button', {name: '-'}));
        })
        expect(screen.getByText('Current Count: -1')).toBeInTheDocument();

    })

    it('checks for the decrement on clicking +1',async ()=>{
        await act(async ()=>{
            await user.click(screen.getByRole('button', {name: '+'}));
        })
        await waitFor(()=>expect(screen.getByText('Current Count: 1')).toBeInTheDocument());
    })

})