import React, { useState } from 'react';

import Table from './Table';

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

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        setError('');

        if (typeof inputs.a === null || typeof inputs.b === null) return;

        const rowId = rows.length > 0 ? rows[rows.length - 1]?.id + 1 : 1;

        switch (operation) {
            case 'sum':
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
            case 'divide': {
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
            case 'reminder': {
                if (inputs.b === 0) {
                    setError("Sorry, I can't use 0 with the reminder");
                    break;
                }

                const reminderResult = getReminder(inputs.a as number, inputs.b as number);
                console.log('TCL: handleSubmit -> reminderResult', reminderResult);

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
            case 'highestPrime':
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
            <form className="m-auto w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="mb-6 flex flex-wrap">
                    <div className="w-full pr-2 md:w-1/2">
                        <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            htmlFor="input-a"
                        >
                            Input A
                        </label>
                        <input
                            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                            id="input-a"
                            data-testid="input-a"
                            type="number"
                            placeholder="Input A"
                            required
                            onChange={handleInputsChange}
                        />
                    </div>

                    <div className="w-full pl-2 md:w-1/2">
                        <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            htmlFor="input-b"
                        >
                            Input B
                        </label>
                        <input
                            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                            id="input-b"
                            data-testid="input-b"
                            type="number"
                            placeholder="Input B"
                            required
                            onChange={handleInputsChange}
                        />
                    </div>

                    <div className="mt-8 w-full">
                        <label
                            className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                            htmlFor="operation-select"
                        >
                            Select the operation
                        </label>
                        <div className="relative inline-block w-full">
                            <select
                                id="operation-select"
                                className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
                                onChange={handleOperationChange}
                                required
                            >
                                <option value=""></option>
                                <option value="sum">Sum</option>
                                <option value="divide">Divide</option>
                                <option value="reminder">Reminder</option>
                                <option value="highestPrime">Highest Prime</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="h-4 w-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <button
                        type="submit"
                        className="absolute right-0 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </form>

            {rows.length > 0 && <Table rows={rows} error={error} />}
        </div>
    );
};

export default Calculator;
