import { Host, columns } from "./columns";
import { DataTable } from "./data-table";
import { DataTablePagination } from "./paginated-table";
import { promises as fs } from "fs";

async function getUsers(): Promise<Host[]> {
  const response = await fetch("/api/hosts");
  return response.json();
}

const Aws = async () => {
  const file = await fs.readFile(process.cwd() + "/db.json", "utf8");
  const data = JSON.parse(file).hosts;

  return (
    <section className="py-2">
      <div className="container">
        {/* <h1 className="text-xl font-bold">List</h1> */}
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
};

export default Aws;
