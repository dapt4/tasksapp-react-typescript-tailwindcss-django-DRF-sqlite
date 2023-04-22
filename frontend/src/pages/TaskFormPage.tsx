import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { UseFormType } from "../types/UseFormType";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function TaskFormPage(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<UseFormType>();
  const navigate = useNavigate();
  const params = useParams();
  const onSubmitForm = handleSubmit(async (data: UseFormType) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success("Task updated");
    } else {
      await createTask(data);
      toast.success("Task created");
    }
    navigate("/tasks");
  });
  const handleDelete = async () => {
    const accepted = confirm("are you sure?");
    if (params.id && accepted) {
      await deleteTask(params.id);
      toast.success("Task Deleted");
      navigate("/tasks");
    }
  };

  const loadTask = async () => {
    if (params.id) {
      const {
        data: { title, description },
      } = await getTask(params.id);
      setValue("title", title);
      setValue("description", description);
    }
  };

  useEffect(() => {
    loadTask();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.title && <span className="text-red-500">title is required</span>}
        <textarea
          rows={3}
          placeholder="description"
          {...register("description", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        {errors.description && <span className="text-red-500">description is required</span>}
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>
      {params.id && (
        <div className="flex justify-end">
          <button
            onClick={handleDelete}
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
          >
            delete task
          </button>
        </div>
      )}
    </div>
  );
}
