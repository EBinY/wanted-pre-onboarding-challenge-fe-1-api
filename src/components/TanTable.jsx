import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  getFilteredRowModel,
  getFacetedUniqueValues,
} from "@tanstack/react-table";
import React from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import Search from "./Search";

function TanTable({ columns, data }) {
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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <>
      {/* <Search onSubmit={setGlobalFilter} /> */}
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    width: header.getSize(),
                    cursor: header.column.getCanSort() ? "pointer" : "default",
                  }}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  {
                    {
                      asc: <FaSortUp />,
                      desc: <FaSortDown />,
                    }[header.column.getIsSorted()]
                  }
                  {header.column.getCanSort() &&
                  !header.column.getIsSorted() ? (
                    <FaSort />
                  ) : null}
                </th>
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

export default TanTable;
