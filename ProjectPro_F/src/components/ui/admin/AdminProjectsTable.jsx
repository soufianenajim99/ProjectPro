import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  Pagination,
} from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
import BlockIcon from "@mui/icons-material/Block";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import axiosClient from "@/axiosClient";

const columns = [
  { name: "PROJECT NAME", uid: "name" },
  { name: "DESCRIPTION", uid: "description" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const statusColorMap = {
  active: "warning",
  paused: "danger",
  finished: "success",
};

export default function AdminProjectsTable({ projects, onActionComplete }) {
  const handleBlock = (id) => {
    try {
      axiosClient.patch(`/admin/removeProject/${id}`).catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      });
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(onActionComplete, 0);
    }
  };

  const handleRemoveBlock = (id) => {
    try {
      axiosClient.patch(`/admin/approveProject/${id}`).catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      });
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(onActionComplete, 0);
    }
  };

  const projects_link = React.useMemo(() => {
    return projects && projects.Projects
      ? projects.Projects
      : [
          {
            id: 1,
            name: "loading",
            description: "loading",
            deleted_at: "active",
          },
          {
            id: 2,
            name: "loading",
            description: "loading",
            deleted_at: "active",
          },
        ];
  }, [projects]);

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(projects_link.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return projects_link.slice(start, end);
  }, [page, projects_link]);

  console.log(projects_link);
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return user.status == "paused" ? (
          <Tooltip color="success" content="Approve">
            <span className="text-lg text-success cursor-pointer active:opacity-50">
              <TaskAltIcon onClick={() => handleRemoveBlock(user.id)} />
            </span>
          </Tooltip>
        ) : (
          <Tooltip color="danger" content="Remove Project">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <BlockIcon onClick={() => handleBlock(user.id)} />
            </span>
          </Tooltip>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table
      aria-label="Example table with custom cells"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
