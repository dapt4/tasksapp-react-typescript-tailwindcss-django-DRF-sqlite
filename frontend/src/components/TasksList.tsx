import { useEffect, useState } from "react";
import { TaskInterface } from "../types/Task";
import { getAllTasks } from "../api/tasks.api";
import { AxiosResponse } from "../../node_modules/axios/index";
import { TaskCard } from "./TaskCard";

export function TasksList(): JSX.Element {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  useEffect(() => {
    getAllTasks().then((res: AxiosResponse) => setTasks(res.data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task: TaskInterface) => (
        <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  );
}
