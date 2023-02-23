import React, { useState } from 'react';

import Table from './Table';
import Form from './Form';

import { sum, divide, getReminder, getHighestPrime } from './helpers/calculations';

interface inputProps {
    a: number | null;
    b: number | null;
}

export interface rowsProps extends inputProps {
    id: number;
    operation: string;
    result: number | undefined | null | string;
}

const Calculator = () => {
    const [operation, setOperation] = useState('');
    const [inputs, setInputs] = useState<inputProps>({ a: null, b: null });

    const [error, setError] = useState('');

    const [rows, setRows] = useState<rowsProps[]>([]);

    const handleOperationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOperation(e.currentTarget.value);
    };

    const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.id === 'input-a') {
            setInputs({ ...inputs, a: Number(e.currentTarget.value) });
        } else {
            setInputs({ ...inputs, b: Number(e.currentTarget.value) });
        }
    };

    enum Operations {
        Sum = 'sum',
        Divide = 'divide',
        Reminder = 'reminder',
        HighestPrime = 'highestPrime',
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        setError('');

        if (typeof inputs.a === null || typeof inputs.b === null) return;

        const rowId = rows.length > 0 ? rows[rows.length - 1]?.id + 1 : 1;

        switch (operation) {
            case Operations.Sum:
                setRows([
                    ...rows,
                    {
                        ...inputs,
                        id: rowId,
                        operation: 'Sum',
                        result: sum(inputs.a as number, inputs.b as number),
                    },
                ]);
                break;
            case Operations.Divide: {
                if (inputs.b === 0) {
                    setError("Sorry, I can't divide by 0 ");
                    break;
                }

                const divisionResult = divide(inputs.a as number, inputs.b as number);

                setRows([
                    ...rows,
                    {
                        a: inputs.a,
                        b: inputs.b,
                        id: rowId,
                        operation: 'Division',
                        result: divisionResult,
                    },
                ]);
                break;
            }
            case Operations.Reminder: {
                if (inputs.b === 0) {
                    setError("Sorry, I can't use 0 with the reminder");
                    break;
                }

                const reminderResult = getReminder(inputs.a as number, inputs.b as number);

                setRows([
                    ...rows,
                    {
                        ...inputs,
                        id: rowId,
                        operation: 'Reminder',
                        result: reminderResult,
                    },
                ]);

                break;
            }
            case Operations.HighestPrime:
                setRows([
                    ...rows,
                    {
                        ...inputs,
                        id: rowId,
                        operation: 'Highest Prime',
                        result: getHighestPrime(inputs.a as number, inputs.b as number),
                    },
                ]);

                break;
        }
    };

    return (
        <div className="mt-6 flex flex-col justify-center">
            <Form
                handleSubmit={handleSubmit}
                handleInputsChange={handleInputsChange}
                handleOperationChange={handleOperationChange}
            />
            {rows.length > 0 && <Table rows={rows} error={error} />}
        </div>
    );
};

export default Calculator;
