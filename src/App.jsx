import { useMemo } from "react";
import "./styles.css";
import { faker } from "@faker-js/faker";
import Table from "./components/Table";
import { createColumnHelper } from "@tanstack/react-table";
import TanTable from "./components/TanTable";

faker.seed(100);

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
      size: 100,
      enableSorting: true,
      sortingFn: "auto",
    }),
    columnHelper.accessor("email", { header: "이메일" }),
    columnHelper.accessor("phone", { header: "휴대폰", size: 200 }),
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
      Array(53)
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
      <Table columns={columns} data={data} />
      <TanTable columns={columns2} data={data} />
    </>
  );
}

export default App;
