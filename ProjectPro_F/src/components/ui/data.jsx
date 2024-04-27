const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "DESCRIPTION", uid: "description", sortable: true },
  { name: "USERS", uid: "users" },
  { name: "Status", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

export { columns, statusOptions };
