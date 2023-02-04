import { useMemo } from 'react';
import {useTable} from 'react-table'
import { Checkbox } from '@mui/material';

export const JsTable = ({
    data = [],
    columns = [],
    centerData = false,
    loading,
    isFooter,
  }) => {
    const tableData = useMemo(() => data, [data]);
    const tableColumns = useMemo(() => columns, [columns]);
  
    //   const defaultColumn = useMemo(()=>{
    //     return {
    //         Filter: ColumnFilter
    //     }
    //   },[])
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      footerGroups,
      // rows,
      page,
      // nextPage,
      // previousPage,
      // canNextPage,
      //canPreviousPage,
      // pageOptions,
      // gotoPage,
      // pageCount,
      // setPageSize,
      state,
      prepareRow,
      selectedFlatRows, // for table select
      setGlobalFilter,
    } = useTable(
      {
        columns: tableColumns,
        data: tableData,
        initialState: {
          pageIndex: 1,
        },
      },
  
      (hooks) => {
        hooks.visibleColumns.push((columns) => {
          return [
            {
              id: "selection",
              Header: ({ getToggleAllRowsSelectedProps }) => (
                <Checkbox {...getToggleAllRowsSelectedProps()} />
              ),
              Cell: ({ row }) => (
                <Checkbox {...row.getToggleAllRowsSelectedProps()} />
              ),
            },
            ...columns,
          ];
        });
      }
    );
  
    const { globalFilter, pageIndex, pageSize } = state;
  
  
    return (
      <>
        <div className={`table-container ${centerData ? "table-center" : ""}`}>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    // <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render("Header")}
                      <div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? "upIcon"
                            : "downIcon"
                          : ""}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
  
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="table-row">
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          style={{
                            minWidth: cell.column.customWidth
                              ? cell.column.customWidth
                              : "",
                          }}
                        >
                          {cell.render("Cell")}{" "}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
            {isFooter && (
              <tfoot>
                {footerGroups.map((footerGroup) => (
                  <tr {...footerGroups.getFooterGroupProps()}>
                    {footerGroup.headers.map((column) => (
                      <td {...column.getFooterProps}>
                        {column.render("Footer")}
                      </td>
                    ))}
                  </tr>
                ))}
              </tfoot>
            )}
          </table>
        </div>
      </>
    );
  };