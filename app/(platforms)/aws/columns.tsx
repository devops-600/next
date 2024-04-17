"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Host = {
  id: string;
  ip: string;
  name: string;
  desc: string;
  env: number;
};

const EnvMap = ["", "Production", "Test", "Development", "QA", "UAT"];

export const columns: ColumnDef<Host>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "ip",
    // header: "Name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ip
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "env",
    // header: "Environment",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Environment
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const env = parseInt(row.getValue("env")) || 1;
      const formatted = EnvMap[env];

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "desc",
    header: "Description",
    enableResizing: false,
    cell: ({ row }) => {
      const desc = row.original.desc;

      return (
        <div
          className="text-sm text-muted-foreground"
          style={{
            width: "20rem",
            height: "2.5rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {desc}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const host = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(host.ip)}
            >
              Copy host IP
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View host details</DropdownMenuItem>
            <DropdownMenuItem className="bg-red-400 text-slate-100">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
