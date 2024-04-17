import { User, columns } from "./columns";
import { DataTable } from "./data-table";
import { promises as fs } from "fs";

async function getUsers(): Promise<User[]> {
  const response = await fetch("/api/users");
  return response.json();
}

const Aws = async () => {
  const file = await fs.readFile(process.cwd() + "/db.json", "utf8");
  const data = JSON.parse(file).users;

  return (
    <section className="py-4">
      <div className="container">
        <h1 className="text-3xl font-bold">List</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
};

export default Aws;
