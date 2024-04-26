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
import { columns } from "./data";
import BlockIcon from "@mui/icons-material/Block";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useForm } from "react-hook-form";
import axiosClient from "@/axiosClient";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function AdminUsersTable({ useers, onActionComplete }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleBlock = (id) => {
    try {
      axiosClient.patch(`/admin/desactivateUser/${id}`).catch((err) => {
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
      axiosClient.patch(`/admin/activateUser/${id}`).catch((err) => {
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

  const users_linked = React.useMemo(() => {
    return useers && useers.users
      ? useers.users
      : [
          {
            id: 1,
            name: "loading",
            email: "loading",
            deleted_at: "active",
          },
          {
            id: 2,
            name: "loading",
            email: "loading",
            deleted_at: "active",
          },
        ];
  }, [useers]);

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(users_linked.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users_linked.slice(start, end);
  }, [page, users_linked]);
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{
              radius: "lg",
              src: `http://127.0.0.1:8000/storage/images/profile/${user.picture}`,
            }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "deleted_at":
        return user.deleted_at ? (
          <Chip className="capitalize" color="danger" size="" variant="flat">
            Desactivated
          </Chip>
        ) : (
          <Chip className="capitalize" color="success" size="" variant="flat">
            Activated
          </Chip>
        );

      case "actions":
        return user.deleted_at ? (
          <Tooltip color="success" content="Remove Block">
            <span className="text-lg text-success cursor-pointer active:opacity-50">
              <TaskAltIcon onClick={() => handleRemoveBlock(user.id)} />
            </span>
          </Tooltip>
        ) : (
          <Tooltip color="danger" content="Block User">
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
    <div>
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
    </div>
  );
}
