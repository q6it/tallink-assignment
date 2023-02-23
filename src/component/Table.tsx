import { memo } from 'react';
import { rowsProps } from './Calculator';

interface TableProps {
    rows: rowsProps[];
    error: string;
}

const Table = memo(({ rows, error }: TableProps) => (
    <div className="m-auto mt-24 flex w-1/2 flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    {error ? (
                        <p className="text-center font-medium text-red-500">{error}</p>
                    ) : (
                        <table className="min-w-full">
                            <thead className="border-b bg-gray-200">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                                    >
                                        A
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                                    >
                                        B
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                                    >
                                        Operation
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                                    >
                                        Result
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows?.length > 0 &&
                                    rows.map((row) => (
                                        <tr
                                            key={row.id}
                                            className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100"
                                        >
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                                                {row.a}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                                                {row.b}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                                                {row.operation}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                                {row.result}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    </div>
));

export default Table;
