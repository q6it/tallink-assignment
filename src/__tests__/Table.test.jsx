import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Table from '../component/Table';

describe('App', () => {
    it('renders without crashing', () => {
        const { getByRole } = render(<Table />);
        expect(getByRole('table')).toBeInTheDocument();
    });
});
