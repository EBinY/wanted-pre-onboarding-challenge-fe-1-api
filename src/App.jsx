import { useMemo } from "react";
import "./styles.css";
import { faker } from "@faker-js/faker";
import ClassicTable from "./components/ClassicTable";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "./components/Table";

// faker.seed(10);

function App() {
  const columns = useMemo(
    () => [
      {
        accessor: "name",
        Header: "Name",
      },
      {
        accessor: "email",
        Header: "Email",
      },
      {
        accessor: "phone",
        Header: "Phone",
      },
    ],
    []
  );

  const columnHelper = createColumnHelper();
  const columns2 = [
    columnHelper.accessor("name", {
      header: "이름",
      size: 150, // default
      enableSorting: true, // default
      enableColumnFilter: true, // default
      sortingFn: "auto", // default
    }),
    columnHelper.accessor("email", {
      header: "이메일",
      enableColumnFilter: false, // set
    }),
    columnHelper.accessor("phone", {
      header: "휴대폰",
      size: 200, // set
      enableSorting: false, // set
      enableColumnFilter: false, // set
    }),
    // columnHelper.accessor("birth", { header: "생년월일" }),
    // columnHelper.accessor("register_date", { header: "등록일" }),
    // columnHelper.accessor("last_edit_date", { header: "최종수정일" }),
  ];
  // const columns2 = useMemo(
  //   () => [
  //     columnHelper.accessor("name", {
  //       header: "이름",
  //       size: 100,
  //       enableSorting: true,
  //       sortingFn: "auto",
  //     }),
  //     columnHelper.accessor("email", { header: "이메일" }),
  //     columnHelper.accessor("phone", { header: "휴대폰", size: 200 }),
  //     // columnHelper.accessor("birth", { header: "생년월일" }),
  //     // columnHelper.accessor("register_date", { header: "등록일" }),
  //     // columnHelper.accessor("last_edit_date", { header: "최종수정일" }),
  //   ],
  //   []
  // );

  const data = useMemo(
    () =>
      Array(15)
        .fill()
        .map(() => ({
          name: faker.name.lastName() + faker.name.firstName(),
          email: faker.internet.email(),
          phone: faker.phone.number(),
        })),
    []
  );

  return (
    <>
      <ClassicTable columns={columns} data={data} />
      <Table columns={columns2} data={data} />
    </>
  );
}

export default App;
