import { Sheet, Table } from "@avaya/neo-react";
import { useState } from "react";

export const AdvancedTable =() => {
  const columns = [
    {
      Header: "name header",
      accessor: "name"
    },
    {
      Header: "other header",
      accessor: "other"
    }
  ];
  const [data, setData] = useState([
    { id: 1, name: "sir Fred", other: "Lorem Ipsum" },
    { id: 2, name: "sir Daniel", other: "Lorem Ipsum" },
    { id: 3, name: "madam Tif", other: "Lorem Ipsum" },
    { id: 4, name: "madam Hailey", other: "Lorem Ipsum" },
    { id: 5, name: "intersex Alex", other: "Lorem Ipsum" },
    { id: 6, name: "androgynous Skyler", other: "Lorem Ipsum" },
    { id: 7, name: <a href="#frank">fancy Frank</a>, other: "Lorem Ipsum" }
  ]);

  return (
    <div>
      <h1>Table</h1>

      <Sheet title="Example Simple Table">
        <Table
          columns={columns}
          data={data}
          handleRefresh={() => {
            setData(data.slice(1));
          }}
        />
      </Sheet>

      <Sheet title="Example Selectable Table">
        <Table
          columns={columns}
          data={data}
          selectableRows="single"
          handleCreate={() => alert("create")}
          handleEdit={() => alert("edit")}
          handleDelete={() => alert("delete")}
          handleRefresh={() => {
            setData(data.slice(1));
          }}
        />
      </Sheet>
    </div>
  );
}
