import React, { useEffect, useState } from "react";
import { FiPlus, FiTrash } from "react-icons/fi";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { motion } from "framer-motion";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteIcon from "@mui/icons-material/Delete";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { users } from "./data";
import axiosClient from "@/axiosClient";
import { useForm } from "react-hook-form";

export const KanbanTable = ({ project, sbd }) => {
  console.log(project);

  return (
    <div className="h-screen w-full bg-blue-gray-50 text-black mx-auto">
      {/* <div>{sbd}</div> */}
      <Board project={project} sbd={sbd} />
    </div>
  );
};

const Board = ({ project, sbd }) => {
  const [cards, setCards] = useState(DEFAULT_CARDS);
  const [rende, setrende] = useState(0);
  const fetchCards = async () => {
    try {
      const response = await axiosClient.get("/taskcontroller/gettasks");
      setCards(response.data.Tasks_list);
      // console.log(response.data.Tasks_list);
    } catch (error) {
      console.error("Failed to fetch cards:", error);
    }
  };
  useEffect(() => {
    fetchCards();
  }, [rende]);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12 justify-center">
      <Column
        project={project}
        title="Project Backlog"
        column="backlog"
        headingColor="text-purple-900"
        rende={rende}
        setrende={setrende}
        cards={cards}
        setCards={setCards}
        sbd={sbd}
      />
      <Column
        project={project}
        title="TODO"
        column="todo"
        headingColor="text-green-900"
        cards={cards}
        rende={rende}
        setrende={setrende}
        setCards={setCards}
        sbd={sbd}
      />
      <Column
        project={project}
        title="In progress"
        column="progress"
        headingColor="text-black"
        cards={cards}
        rende={rende}
        setrende={setrende}
        setCards={setCards}
        sbd={sbd}
      />
      <Column
        project={project}
        title="Complete"
        column="complete"
        headingColor="text-red-900"
        cards={cards}
        rende={rende}
        setrende={setrende}
        setCards={setCards}
        sbd={sbd}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

const Column = ({
  title,
  headingColor,
  cards,
  column,
  setCards,
  project,
  rende,
  setrende,
  sbd,
}) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id == cardId);
      if (!cardToTransfer) return;
      console.log(cardToTransfer);

      try {
        const payload = {
          column: column,
        };
        axiosClient
          .patch(`/tasks/updateTask/${cardId}`, payload)
          .then((response) => {
            console.log("Success:", response);
            cardToTransfer = { ...cardToTransfer, column };
            copy = copy.filter((c) => c.id !== +cardId);
            console.log(copy);
            setCards(copy);
            setrende(++rende);
            console.log(rende);
          })
          .catch((err) => {
            const response = err.response;
            if (response && response.status === 422) {
              console.log(response.data.errors);
            }
          });
      } catch (error) {
        console.error(error);
      }
      cardToTransfer = { ...cardToTransfer, column };
      console.log(cardToTransfer);
      console.log(copy, cardId);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter(
    (c) => c.column === column || column === "backlog"
  );

  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          !active ? "  bg-blue-gray-50" : " bg-blue-gray-200"
        }`}
      >
        {filteredCards.map((c) => {
          return (
            <Card
              key={c.id}
              {...c}
              handleDragStart={handleDragStart}
              sbd={sbd}
            />
          );
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard
          column={column}
          setCards={setCards}
          project={project}
          sbd={sbd}
        />
      </div>
    </div>
  );
};

const Card = ({ utilisateur, titre, id, column, handleDragStart, sbd }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { titre, id, column })}
        className="cursor-grab rounded border border-gray-700 bg-blue-gray-500 p-3 my-5 active:cursor-grabbing"
      >
        <div className="flex flex-col">
          <p className="text-sm text-neutral-100">{titre}</p>
          <Avatar
            isBordered
            src={`http://127.0.0.1:8000/storage/images/profile/${utilisateur?.user?.picture}`}
            size="sm"
            className=" mt-2 self-end"
          />
        </div>
      </motion.div>
    </>
  );
};

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-purple-900 opacity-0"
    />
  );
};

const BurnBarrel = ({ setCards }) => {
  const [active, setActive] = useState(false);
  const handleRemoveTask = (cardId) => {
    try {
      axiosClient
        .delete(`/tasks/deletetask/${cardId}`)
        .then((response) => {
          console.log("Success:", response.data.task_deleted.id);
          setCards((pv) =>
            pv.filter((c) => c.id !== response.data.task_deleted.id)
          );
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status === 422) {
            console.log(response.data.errors);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");
    handleRemoveTask(cardId);
    setCards((pv) => pv.filter((c) => c.id !== cardId));
    console.log(cardId);
    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active
          ? "border-red-800 bg-red-800/20 text-red-500"
          : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
      }`}
    >
      {active ? (
        <DeleteForeverIcon className="animate-bounce" />
      ) : (
        <DeleteIcon />
      )}
    </div>
  );
};

const AddCard = ({ column, setCards, project, sbd }) => {
  const { register, handleSubmit } = useForm();
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);
  const onSubmit = (data) => {
    const payload = {
      titre: data.name,
      productbacklog_id: project.productbacklog,
      utilisateur_id: data.user,
      column: column,
      sprintbacklog_id: sbd,
    };

    console.log(payload);
    axiosClient
      .post("/taskcontroller/store", payload)
      .then((response) => {
        // console.log("Success:", response);
        setCards((pv) => [...pv, response.data.Task_Created]);
      })
      .catch((error) => {
        console.error("Error posting the data:", error);
      });
    setAdding(false);
  };

  // const handleSubmitt = (e) => {
  //   e.preventDefault();

  //   if (!text.trim().length) return;

  //   const newCard = {
  //     column,
  //     title: text.trim(),
  //     id: Math.random().toString(),
  //   };

  //   setCards((pv) => [...pv, newCard]);

  //   setAdding(false);
  // };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit(onSubmit)}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            {...register("name")}
            autoFocus
            placeholder="Add new task..."
            className="w-full rounded border border-purple-100 bg-blue-gray-200 p-3 text-sm text-black placeholder-blue-gray-800 focus:outline-0"
          />
          <Select
            items={project.users}
            {...register("user")}
            label="Assigned to"
            placeholder="Select a user"
            labelPlacement="outside"
            className="max-w-xs"
          >
            {(user) => (
              <SelectItem key={user.id} textValue={user.username}>
                <div className="flex gap-2 items-center">
                  <Avatar
                    alt={user.username}
                    className="flex-shrink-0"
                    size="sm"
                    src={`http://127.0.0.1:8000/storage/images/profile/${user.picture}`}
                  />
                  <div className="flex flex-col">
                    <span className="text-small">{user.username}</span>
                    <span className="text-tiny text-default-400">
                      {user.email}
                    </span>
                  </div>
                </div>
              </SelectItem>
            )}
          </Select>

          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <FiPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add card</span>
          <FiPlus />
        </motion.button>
      )}
    </>
  );
};

const DEFAULT_CARDS = [
  // BACKLOG
  { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
  { title: "SOX compliance checklist", id: "2", column: "backlog" },
  { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
  { title: "Document Notifications service", id: "4", column: "backlog" },
  // TODO
  {
    title: "Research DB options for new microservice",
    id: "5",
    column: "todo",
  },
  { title: "Postmortem for outage", id: "6", column: "todo" },
  { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

  // DOING
  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "doing",
  },
  { title: "Add logging to daily CRON", id: "9", column: "doing" },
  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    column: "done",
  },
];
