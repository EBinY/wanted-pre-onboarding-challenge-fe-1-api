import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  getFilteredRowModel,
  getFacetedUniqueValues,
} from "@tanstack/react-table";
import React, { useState, useEffect } from "react";
import Search from "./Search";
import TableHeader from "./TableHeader";

function Table({ columns, data }) {
  // const tableData = [
  //   {
  //     name: "김땡땡",
  //     phone: "01012345678",
  //     birth: "830309",
  //     register_date: "2022-04-06",
  //     last_edit_date: "2022-08-24",
  //   },
  //   /* ... */
  // ];

  // const [data, setData] = useState([...tableData]);

  // const columnHelper = createColumnHelper();
  // const columns = [
  //   columnHelper.accessor("name", { header: "이름", size: 100 }),
  //   columnHelper.accessor("phone", { header: "휴대폰" }),
  //   columnHelper.accessor("birth", { header: "생년월일" }),
  //   columnHelper.accessor("register_date", { header: "등록일" }),
  //   columnHelper.accessor("last_edit_date", { header: "최종수정일" }),
  // ];

  // const column = columnHelper.accessor("phone",
  // 	{
  // 		header: "이름",
  // 		cell: ({ renderValue }) =>
  //   		renderValue().replace(/(\d{3})(\d{3,4})(\d{4})/, "$1-$2-$3"),
  // 	}
  // )

  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onGlobalFilterChange: setGlobalFilter,
  });

  // const { setGlobalFilter } = useReactTable;

  return (
    <>
      {/* <Search onSubmit={setGlobalFilter} /> */}
      {/* <DebouncedInput
        value={globalFilter}
        onChange={(value) => setGlobalFilter(String(value))}
      /> */}
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeader header={header} key={header.id} />
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;

// function DebouncedInput({
//   value: initialValue,
//   onChange,
//   debounce = 500,
//   ...props
// }) {
//   const [value, setValue] = useState(initialValue);

//   useEffect(() => {
//     setValue(initialValue);
//   }, [initialValue]);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       onChange(value);
//     }, debounce);

//     return () => clearTimeout(timeout);
//   }, [value]);

//   return (
//     <input
//       {...props}
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//     />
//   );
// }
