import {
    getCoreRowModel,
    useReactTable,
    flexRender,
    getPaginationRowModel,
    PaginationState
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";
import "./appTable.scss";
import { useState, useMemo } from "react";
import TableFilter from "../tableFilter/TableFilter";

export interface ReactTableProps<T extends object> {
    data: T[];
    columns: ColumnDef<T>[];
}
interface ITemName {
    image: string;
    details: { title: string; rating: number };
}
export interface IData {
    itemName: ITemName;
    description: string;
    properties: string;
    price: string;
    inventory: number;
    discount: number;
}

export const Table = <T extends object>({ data, columns }: ReactTableProps<T>) => {
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10
    });
    const pagination = useMemo(
        () => ({
            pageIndex,
            pageSize
        }),
        [pageIndex, pageSize]
    );
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        debugTable: true,
        pageCount: 1,
        state: {
            pagination
        },
        onPaginationChange: setPagination,
        manualPagination: true
        // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    });

    const fetchDataOptions = {
        pageIndex,
        pageSize
    };
    return (
        <div className="table">
            <TableFilter/>
            <table>
                <div className="table_container">
                    <thead className="table_header">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="px-6 py-4 text-sm font-medium text-gray-900"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef.header,
                                                  header.getContext()
                                              )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody className="table_body">
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className='border-b" bg-white'>
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900"
                                        key={cell.id}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </div>
                <div className="table_footer">
                        <button
                            className="border rounded p-1"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            <span>{"< "}</span>
                           <span>Prev</span>
                        </button>
                        <span>Showing {" "}<strong>
                                {table.getState().pagination.pageIndex + 1} - {" "}
                                {table.getRowModel().rows.length}
                            </strong> out of  <strong>{table.getPageCount()}</strong> results</span>
                        <button
                            className="border rounded p-1"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            <span>Next</span>{" >"}
                        </button>
                    </div>
            </table>
        </div>
    );
};
