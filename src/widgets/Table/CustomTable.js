import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useTable, useExpanded, useSortBy, usePagination } from 'react-table';
import EditableCell from '../InputField/EditableCell';
import Pagination from './Pagination';

export default function CustomTable({
  columns: userColumns,
  data,
  updateData,
  isSubComponentExpanded = false,
  subComponent,
  editableColumns = [],
  showPagination = false,
  headerColor,
  bodyColor,
}) {
  const defaultColumn = { Cell: EditableCell };
  const defaultExpanded = isSubComponentExpanded
    ? data.map((element) => {
        return { index: true };
      })
    : [];

  const initialStateValue = showPagination
    ? { pageIndex: 0 }
    : { pageIndex: 0, pageSize: data.length };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    visibleColumns,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns: userColumns,
      data,
      defaultColumn,
      initialState: initialStateValue,
      editableColumns: editableColumns,
      updateData,
    },
    useSortBy,
    useExpanded,
    usePagination
  );

  return (
    <TableContainer sx={{ padding: 0 }}>
      <Table {...getTableProps()}>
        <TableHead sx={{ background: headerColor }}>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <Box component='span'>
                    {column.render('Header')}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ArrowDownwardIcon fontSize='small' />
                      ) : (
                        <ArrowUpwardIcon fontSize='small' />
                      )
                    ) : (
                      ''
                    )}
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            const rowProps = row.getRowProps();
            return (
              <React.Fragment key={rowProps.key}>
                <TableRow {...rowProps} sx={{ background: bodyColor }}>
                  {row.cells.map((cell) => {
                    return (
                      <TableCell {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </TableCell>
                    );
                  })}
                </TableRow>
                {defaultExpanded && defaultExpanded[i]?.index ? (
                  <TableRow>
                    <TableCell
                      colSpan={visibleColumns.length}
                      sx={{
                        padding: '0px',
                        paddingLeft: '15px',
                        
                      }}
                    >
                      {subComponent(row.original.id)}
                    </TableCell>
                  </TableRow>
                ) : null}
              </React.Fragment>
            );
          })}
        </TableBody>
      </Table>
      {showPagination && (
        <Pagination
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
          pageCount={pageCount}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          setPageSize={setPageSize}
          pageIndex={pageIndex}
          pageSize={pageSize}
        />
      )}
    </TableContainer>
  );
}
